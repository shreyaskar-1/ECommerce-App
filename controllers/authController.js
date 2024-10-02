import userModel from "../models/userModel.js"
import { hashPassword } from './../helpers/authHelper.js'
import JWT from "jsonwebtoken"


export const registerController = async (req, res) => {
    try {
        const { name, email, password, phone, address } = req.body
        // validations
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
        // Check For  Users
        const existingUser = await userModel.findOne({ email })
        // Check For Existing Users
        if (existingUser) {
            return res.status(200).send({
                success: true,
                message: 'User Already Exist Please Login',
            })
        }

        // Register User
        const hashedPassword = await hashPassword(password)
        // save password
        const user = await new userModel({
            name,
            email,
            password: hashedPassword,
            phone,
            address
        }).save()
        res.status(201).send({
            success: true,
            message: 'User Register Successfully',
            user
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Error in Registeration",
            error: error.message
        })
    }
}

// POST Login
export const registerController = async (req, res) => {
    try {
    }catch(error){

    }
}