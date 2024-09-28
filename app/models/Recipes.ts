import mongoose, { Schema, Document } from 'mongoose';

// Define the Ingredient schema
const IngredientSchema = new Schema({
  name: String,
  quantity: String,
}, { _id: false }); // Set _id to false to prevent an _id field on subdocuments

// Define the Recipe schema
const RecipeSchema = new Schema({
  province: { type: Number, required: true },
  recipe_name: { type: String, required: true },
  ingredients: { type: [IngredientSchema], required: true },
  preparation_steps: { type: [String], required: true },
  preparation_time: { type: String, required: true },
  occasion: { type: String, required: true },
  who_prepares: { type: String, required: true },
  used_for_festivities: { type: Boolean, default: false },
});

// Define the Recipe model interface
interface IRecipe extends Document {
  province: number;
  recipe_name: string;
  ingredients: { name: string; quantity: string }[];
  preparation_steps: string[];
  preparation_time: string;
  occasion: string;
  who_prepares: string;
  used_for_festivities: boolean;
}

export default mongoose.models.Recipe || mongoose.model<IRecipe>('Recipe', RecipeSchema);
