import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRoute from './routes/auth.js';
import usersRoute from './routes/users.js';
import roomsRoute from './routes/rooms.js';
import hotelsRoute from './routes/hotels.js';
import cookieParser from 'cookie-parser';

const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected');
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on('disconnected', () => {
  console.log('MongoDB disconnected');
});

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use('/api/auth', authRoute);
app.use('/api/users', usersRoute);
app.use('/api/rooms', roomsRoute);
app.use('/api/hotels', hotelsRoute);

app.use((err, req, res, next) => {
  const errStatus = err.status || 500;
  const errMessage = err.message || 'Something went wrong';
  res.status(errStatus).json({
    success: false,
    status: errStatus,
    message: errMessage,
    stack: err.stack,
  });
});

const port = 8800 || process.env.PORT;
app.listen(port, () => {
  connect();
  console.log(`Backend connected to port: ${port}`);
});
