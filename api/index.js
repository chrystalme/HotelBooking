import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRoute from './routes/auth.js';
import usersRoute from './routes/users.js';
import roomsRoute from './routes/rooms.js';
import hotelsRoute from './routes/hotels.js';

const app = express();
dotenv.config();
const port = 8800 || process.env.PORT;

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected');
  } catch (error) {
    throw error;
  }
};

// Middlewares
app.use(express.json());
app.use('/api/auth', authRoute);
app.use('/api/users', usersRoute);
app.use('/api/rooms', roomsRoute);
app.use('/api/hotels', hotelsRoute);

app.listen(port, () => {
  connect();
  console.log(`Backend connected to port: ${port}`);
});
