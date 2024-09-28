// Maneja la conexión

import mongoose from 'mongoose';

const uri = process.env.MONGO_URI as string;

let connection: Promise<typeof mongoose>;

const connectDB = async (): Promise<typeof mongoose> => {
  if (!connection) {
    connection = mongoose.connect("mongodb://localhost:27017/indigenous_heritage");
  }
  return connection;
};

export default connectDB;
