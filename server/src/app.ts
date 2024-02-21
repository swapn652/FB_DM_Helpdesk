import express, {Application, Request, Response} from 'express';
import cors from "cors";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


const prisma = new PrismaClient();

const PORT: number = 8080;
const app: Application = express();

app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response): void => {
    res.send("hello world");
});

app.post("/sign-up", async (req: Request, res: Response): Promise<void> => {
    const { name, password, email } = req.body;

    try {
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


app.listen(PORT, (): void => {
    console.log(`Server is up and running on PORT: ${PORT}`);
});
