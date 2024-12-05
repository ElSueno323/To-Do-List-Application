import express, { Request, Response } from 'express';
import cors from 'cors';
import startAppDataBase, {createDataBase} from "./app";

const app = express();
const PORT = process.env.PORT || 3000;


app.use(cors());
app.use(express.json());


createDataBase();
startAppDataBase();

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, world! This is a simple Node.js + TypeScript project.');
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
