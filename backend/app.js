import express from "express";
import cors from "cors";
import dotenv from 'dotenv';
import { dbConnection } from './database/dbConnection.js';
import {errorMiddleware} from './error/error.js';
import reservationRouter from './routes/reservationRoute.js'

const app = express();

// Configure dotenv to load environment variables
dotenv.config({ path: "./config/config.env" });

app.use(cors({
    origin: [process.env.FRONTEND_URL],  // Use underscore in the environment variable name
    methods: ["POST"],
    credentials: true,
}));

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1/reservation', reservationRouter);

// Database connection
dbConnection();
app.use(errorMiddleware)

export default app;