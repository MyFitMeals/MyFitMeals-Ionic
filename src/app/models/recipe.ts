import { Diet } from './diet';
import { Type } from './type';
import { Temperature } from './temperature';
export class Recipe 
{
    name: string;
    calories: number;
    proteins: number;
    carbs: number;
    fats: number;
    preparationTime: number;
    instructions: string;
    ingredients: string;
    tips: string;
    imageURL: any;
    _id: string;
    temperature?: Temperature;
    type?: Type;
    diet?: Diet;
}