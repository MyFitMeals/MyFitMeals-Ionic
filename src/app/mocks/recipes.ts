import { Recipe } from './../models/recipe';


export const RECIPES: Recipe[] =
[
    {
        name: 'POMM’CAKE',
        calories: 334,
        proteins: 30.9,
        carbs: 43.2,
        fats: 4.2,
        preparationTime: 45,
        instructions: '- Mélanger tous les ingrédients sauf la pomme dans un bol afin d’obtenir une pâte ni trop liquide, ni trop compacte. Rajouter de l’eau si besoin.',
        ingredients: '- 45 grammes de farine d’avoine (Ou autres farine)',
        tips: 'La recette est personnalisable. Il est possible de remplacer la pomme par des bananes, du chocolat, du beurre de cacahuète, ou tous types de fruits...',
        image: "../../assets/pommcake.PNG"
    },
    {
        name: 'BANANA BREAD',
        calories: 574,
        proteins: 26,
        carbs: 99,
        fats: 8,
        preparationTime: 30,
        instructions: 'Préchauffer four à 180°C. Battre blanc en neige...',
        ingredients: '90Gr Farine blanche. 225 grammes de banane.',
        tips: 'Afin de le rendre plus gourmand, vous pouvez y ajouter des pépites de chocolat.',
        image: "../../assets/bananabread.PNG" 
    },
    {
        name: 'MUFFINS PROTÉINÉS',
        calories: 397,
        proteins: 40,
        carbs: 40,
        fats: 8,
        preparationTime: 35,
        instructions: '- Préchauffer votre four à 180°C',
        ingredients: '- 40 grammes de farine d’avoine (Peut être remplacé par une autre farine ou des flocons d’avoine mixés)',
        tips: 'Afin de le rendre plus gourmand, vous pouvez y ajouter des pépites de chocolat.',
        image: "../../assets/muffins.PNG" 
    }
]