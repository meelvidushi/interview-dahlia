import dotenv from 'dotenv';
import express, { Express } from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import usernamesRouter from './routes/usernames'; 

dotenv.config({ path: '../.env' });

mongoose
  .connect(process.env.MONGODB_URI as string) 
  .then(() => console.log('MongoDB connected'))
  .catch((err: Error) => console.log(err));

const app: Express = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/usernames', usernamesRouter);

const port: string | number = process.env.PORT || 3006;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


