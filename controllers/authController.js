import bcrypt from "bcrypt";
import userModel from "../models/userModel.js";
import { comparePassword, hashPassword } from './../helpers/authHelper.js';
import JWT from "jsonwebtoken";

// Helper to send error response
const sendError = (res, message, statusCode = 400) => {
    return res.status(statusCode).send({
        success: false,
        message,
    });
};

// Register Controller
export const registerController = async (req, res) => {
    try {
        const { name, email, password, phone, address } = req.body;

        // Validate required fields
        if (!name) {
            return res.send({ error: 'Name Is Required' })
        }
        if (!email) {
            return res.send({ error: 'Email Is Required' })
        }
        if (!password) {
            return res.send({ error: 'Password Is Required' })
        }
        if (!phone) {
            return res.send({ error: 'Phone Is Required' })
        }
        if (!address) {
            return res.send({ error: 'Address Is Required' })
        }
        // Check if user already exists
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return sendError(res, 'User already exists, please login', 200);
        }

        // Hash password and create new user
        const hashedPassword = await hashPassword(password);
        const user = await new userModel({
            name,
            email,
            password: hashedPassword,
            phone,
            address
        }).save();

        res.status(201).send({
            success: true,
            message: 'User registered successfully',
            user
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({
            success: false,
            message: 'Error in registration',
            error: error.message
        });
    }
};

// Login Controller
export const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validate input
        if (!email || !password) {
            return sendError(res, 'Email and Password are required', 401);
        }

        // Check if user exists
        const user = await userModel.findOne({ email });
        if (!user) {
            return sendError(res, 'Invalid email', 404);
        }

        // Validate password
        const isMatch = await comparePassword(password, user.password);
        if (!isMatch) {
            return sendError(res, 'Invalid password', 401);
        }

        // Generate token
        const token = JWT.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });

        res.status(200).send({
            success: true,
            message: 'Login successful',
            user: {
                name: user.name,
                email: user.email,
                phone: user.phone,
                address: user.address
            },
            token,
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({
            success: false,
            message: 'Error in login',
            error: error.message
        });
    }
};
