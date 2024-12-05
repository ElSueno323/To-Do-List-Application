import express, { Request, Response } from 'express';
import cors from 'cors';
import startAppDataBase, {createDataBase} from "./app";
import defaultRouter from "./routes";

const app = express();
const PORT = process.env.PORT || 3000;


app.use(cors({
    methods:['GET','POST','PATCH','DELETE'],
}));
app.use(express.json());


//createDataBase();
startAppDataBase();

app.use('/',defaultRouter);



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
