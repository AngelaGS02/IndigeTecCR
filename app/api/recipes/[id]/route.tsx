import mongoose from 'mongoose';
import { NextRequest, NextResponse } from "next/server";
import Recipe from '../../../models/Recipes';

// Connect to MongoDB
const connectDB = async () => {
  if (mongoose.connections[0].readyState) return; // If already connected, skip
  await mongoose.connect(process.env.MONGO_URI as string);
  console.log('Connected to MongoDB');
};

export const GET = async (
  req: NextRequest,
  context: { params: { id: string } }
) => {
  await connectDB();
  const id = context.params.id;

  const recipe = await Recipe.findById(id);

  if (!recipe) {
    return NextResponse.json({ message: "Recipe not found" }, { status: 404 });
  }

  return NextResponse.json({ recipe });
};