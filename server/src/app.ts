import express, { Application, Request, Response } from 'express';
import cors from 'cors';

const PORT: number = 8000;
const app: Application = express();

app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response): void => {
    res.send("hello world");
});

app.use("/user-auth", require('../routes/user/user_auth'));

app.listen(PORT, (): void => {
    console.log(`Server is up and running on PORT: ${PORT}`);
});
