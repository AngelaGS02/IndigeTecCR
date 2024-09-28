import mongoose from 'mongoose';
import { NextRequest, NextResponse } from "next/server";
import Recipe from './models/Recipes';

// Connect to MongoDB
const connectDB = async () => {
  if (mongoose.connections[0].readyState) return; // If already connected, skip
  await mongoose.connect(process.env.MONGO_URI as string);
  console.log('Connected to MongoDB');
};

// Action to read
export const GET = async (req: NextRequest) => {
  await connectDB();
  const recipes = await Recipe.find({});

  return NextResponse.json({
    recipes,
  });
};

// Action to create
export const POST = async (req: NextRequest) => {
  await connectDB();
  const { province, recipe_name, ingredients, preparation_steps, preparation_time, occasion, who_prepares, used_for_festivities } = await req.json();

  const recipe = await Recipe.create({
    province,
    recipe_name,
    ingredients,
    preparation_steps,
    preparation_time,
    occasion,
    who_prepares,
    used_for_festivities
  });

  return NextResponse.json({
    recipe,
  });
};

// Action to delete
export const DELETE = async (req: NextRequest) => {
  await connectDB();
  const url = new URL(req.url).searchParams;
  const id = url.get("id");

  const recipe = await Recipe.findByIdAndDelete(id);

  if (!recipe) {
    return NextResponse.json(
      {
        message: "Recipe not found",
      },
      {
        status: 404,
      }
    );
  }

  return NextResponse.json({});
};

// Action to update or edit
export const PUT = async (req: NextRequest) => {
  await connectDB();
  const { id, ...updateData } = await req.json();

  const recipe = await Recipe.findByIdAndUpdate(id, updateData, {
    new: true,
    runValidators: true,
  });

  if (!recipe) {
    return NextResponse.json(
      {
        message: "Recipe not found",
      },
      {
        status: 404,
      }
    );
  }

  return NextResponse.json({
    recipe,
  });
};