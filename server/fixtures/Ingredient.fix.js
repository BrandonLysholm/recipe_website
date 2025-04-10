const Ingredient = require("../private/javascript/Ingredient");
const IngredientCategory = require("../private/javascript/IngredientCategory");

async function fillIngredientTable() {
    const protein = await IngredientCategory.findOne({where: {ingredientCategoryName: 'protein'}});
    const veg = await IngredientCategory.findOne({where: {ingredientCategoryName: 'vegetable'}});
    const dairy = await IngredientCategory.findOne({where: {ingredientCategoryName: 'dairy'}});
    const spice = await IngredientCategory.findOne({where: {ingredientCategoryName: 'spice'}});
    const carb = await IngredientCategory.findOne({where: {ingredientCategoryName: 'carb'}});
    const misc = await IngredientCategory.findOne({where: {ingredientCategoryName: 'misc'}});

    const Ingredients = [
        {name: 'chicken breast', cat: protein},
        {name:'chickpeas', cat: protein},
        {name:'oregano', cat: spice},
        {name:'paprika', cat: spice},
        {name:'salt', cat: spice},
        {name:'red pepper flakes', cat: spice},
        {name:'olive oil', cat: misc},
        {name:'grape tomatoes', cat: veg},
        {name:'garlic', cat: spice},
        {name:'spinach', cat: veg},
        {name:'lemon juice', cat: misc},
        {name:'rice', cat: carb},
        {name:'feta cheese', cat: dairy},
    ]

    for (const ingredient of Ingredients) {
        let addedIngredient = await Ingredient.create({
            ingredientName: ingredient.name,
            IngredientCategoryId: ingredient.cat.id
        })
    }
}

module.exports = fillIngredientTable;
