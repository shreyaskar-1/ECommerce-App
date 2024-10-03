import express from "express";
import {registerController , loginController } from "../controllers/authController.js";
import { isAdmin } from "../midddlewares/authMiddleware.js";

// router Object
const router = express.Router()

// routing
// Register || Method POST
router.post('/register', registerController)

// LOGIN || POST
router.post('/login', isAdmin, loginController)

export default router;

