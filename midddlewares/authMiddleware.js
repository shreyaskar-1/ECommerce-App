
import userModel from "../models/userModel.js";
import JWT from "jsonwebtoken";

export const requireSignIn = (req, res, next) => {
    try {
        const token = req.headers.authorization;
        if (!token) {
            return sendError(res, 'Authorization token is missing', 401);
        }

        // Verify token
        const decoded = JWT.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        console.error(error);
        return sendError(res, 'Invalid or expired token', 401);
    }
};

// Admin Access Middleware
export const isAdmin = async (req, res, next) => {
    try {
        const user = await userModel.findById(req.user._id);
        if (user.role !== 1) {
            return sendError(res, 'You are not authorized as admin', 403);
        }
        next();
    } catch (error) {
        console.error(error);
        return sendError(res, 'Error verifying admin privileges', 403);
    }
};