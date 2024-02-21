import express, {Router, Request, Response} from 'express';
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import crypto from "crypto";

const prisma = new PrismaClient();

const router: Router = express.Router();


router.post("/sign-up", async (req: Request, res: Response): Promise<void> => {
    const { name, password, email } = req.body;

    try {
        // Check if email already exists
        const existingUser = await prisma.user.findUnique({
            where: { email },
        });

        if (existingUser) {
            // Email already exists, return an error
            res.status(400).json({ message: "Email already exists" });
        }

        // Email does not exist, hash the password and create the new user
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await prisma.user.create({
            data: {
                name,
                password: hashedPassword,
                email,
            },
        });

        res.status(201).json(newUser);
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).send("Error creating user");
    }
});

// router.post()

export default router;