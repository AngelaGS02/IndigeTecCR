export  interface UserModel{
    id:number,
    name:string,
    email:string,
    password:string,
    role:string,
    created_at:string,
    updated_at:string,
    deleteUser:(id: number)=> void;
}

export interface ProductModel{
    id:number,
    title:string,
    description:string,
    price:number,
    stock:number,
    created_at:string,
    updated_at:string,
    deleteProduct:(id: number)=> void;
}

export interface RecipeModel{
    id:number,
    title:string,
    description:string,
    price:number,
    stock:number,
    created_at:string,
    updated_at:string,
    deleteProduct:(id: number)=> void;
}

export interface IngredientModel{
    id:number,
    title:string,
    description:string,
    price:number,
    stock:number,
    created_at:string,
    updated_at:string,
    deleteProduct:(id: number)=> void;
}

export interface GroupModel{
    id:number,
    title:string,
    description:string,
    price:number,
    stock:number,
    created_at:string,
    updated_at:string,
    deleteProduct:(id: number)=> void;
}

export interface Recipe {
  province: number;
  recipe_name: string;
  ingredients: Object;
  preparation_steps: string[];
  preparation_time: string;
  occasion: string;
  who_prepares: string;
  used_for_festivities: boolean;
}

export interface Ingredient {
  name_spanish: string;
  names_indigenous_languages: string;
  production_location: string;
  exists_today: boolean;
  consumption_by_group: string;
}

export interface Group {
  name: string;
  location: string;
  population: { year: number; number: number };
  languages_spoken: string[];
  social_structure: {
    clans: string[];
    leadership: string;
    cultural_practices: string;
  };
}

export interface Festivity {
  Nombre_Original: string;
  Fecha: Date;
  Actividades: string[];
  Quien_Puede_Asistir: string[];
  Implicaciones: string;
}
