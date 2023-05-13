import express, { Application, Request, Response } from 'express';

const app : Application = express();
import cors from 'cors';
import { Schema } from 'mongoose';

// using cors
app.use(cors());



// parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
  
    // inserting a test data into mongodb

    /*
    Step 1 : Interface
    Step 2 : Schema
    Step 3 : Model
    Step 4 : Database Query
    */
    

    // creating an interface 
    interface IUser {
        id: string;
        role: "student";
        password: string;
        name: {
            firstName: string;
            middleName?: string;
            lastName: string;
        };
        dataOfBirth?: string;
        gender: "male" | "female";
        email?: string; 
        contactNO: string;
        emergencyContactNo: string;
        presentAddress: string;
        permanentAddress: string;
    }

    const userSchema = new Schema<IUser>({
        id: {
            type: String,
            required: true,
            unique: true
        },
        role: {
            type: String,
            required: true, 
        },
        password: {
            type: String,
            required: true,
            unique: true,
        },
        name: {
            firstName: {
                type: String,
                required: true,
            },
            middleName: {
                type: String,
            },
            lastName: {
                type: String,
                required: true,
            }
        },
        dataOfBirth: {
            type:String,
        },
        gender: {
            type: String,
            enum: ['male', 'female']
        },
        email: {
            type: String,
        },
        contactNO: {
            type: String,
            required: true,
        },
        emergencyContactNo: {
            type: String,
            required: true,
        },
        presentAddress: {
            type: String,
            required: true,
        },
        permanentAddress: {
            type: String,
            required: true,
        }
})
})



export default app;