const IngredientCategory = require('../private/javascript/IngredientCategory');

async function fillIngredientCategoryTable() {
    const IngredientCategories = [
        'protein',
        'vegetable',
        'dairy',
        'spice',
        'carb',
        'misc'
    ];
    for (const ingredientCategory of IngredientCategories) {
        await IngredientCategory.create({
            ingredientCategoryName: ingredientCategory
        });
    }
}

module.exports = fillIngredientCategoryTable;
