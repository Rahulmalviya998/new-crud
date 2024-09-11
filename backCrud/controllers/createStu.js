import express from "express";
import stumodel from "../model/student.js";
import bcrypt from "bcryptjs"
import multer from "multer";

import Joi from "joi";



const studentValidationSchema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    image: Joi.string().uri().optional(),
});
const createStu = async (req, res) => {
    const { error } = studentValidationSchema.validate(req.body);
    
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    try {
        const { name, email, password } = req.body;
        const image= req.file? req.file.path: null;
        const hasspass = await bcrypt.hash(password, 10);
        const createstudent = await stumodel.create({
            name, password: hasspass, email,image
        })
        res.json({ message: "user saved", createstudent })


    } catch {
        console.log("code not working");

    }
}
export default createStu;