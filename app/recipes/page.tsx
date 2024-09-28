'use client'

import { useEffect, useState } from 'react';
import { fetcher } from '../utils/fetcher';
import { TextField, Button, List, ListItem, ListItemText } from '@mui/material';

interface Recipe {
  _id?: string;
  province: number;
  recipe_name: string;
  ingredients: { name: string; quantity: string }[];
  preparation_steps: string[];
  preparation_time: string;
  occasion: string;
  who_prepares: string;
  used_for_festivities: boolean;
}

const RecipesPage = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [form, setForm] = useState<Partial<Recipe>>({});

  // Fetch recipes on mount
  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    const data = await fetcher('/api/recipes', 'GET');
    console.log('data:')
    console.log(data)
    if (data.success) {
      setRecipes(data.data);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (form._id) {
      // Update existing recipe
      await fetcher(`/api/recipes/${form._id}`, 'PUT', form);
    } else {
      // Create new recipe
      await fetcher('/api/recipes', 'POST', form);
    }
    fetchRecipes();
    setForm({});
  };

  const handleDelete = async (id: string) => {
    await fetcher(`/api/recipes/${id}`, 'DELETE');
    fetchRecipes();
  };

  const handleEdit = (recipe: Recipe) => {
    setForm(recipe);
  };

  return (
    <div>
      <h1>Recipes</h1>
      <div>
        <TextField
          label="Province"
          name="province"
          type="number"
          value={form.province || ''}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          label="Recipe Name"
          name="recipe_name"
          value={form.recipe_name || ''}
          onChange={handleChange}
          fullWidth
        />
        {/* Add more fields for the other properties here */}
        <Button variant="contained" onClick={handleSubmit}>
          {form._id ? 'Update Recipe' : 'Add Recipe'}
        </Button>
      </div>
      <List>
        {recipes.map((recipe) => (
          <ListItem key={recipe._id}>
            <ListItemText
              primary={recipe.recipe_name}
              secondary={`Province: ${recipe.province}`}
            />
            <Button variant="outlined" onClick={() => handleEdit(recipe)}>Edit</Button>
            <Button variant="contained" color="secondary" onClick={() => handleDelete(recipe._id!)}>
              Delete
            </Button>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default RecipesPage;
