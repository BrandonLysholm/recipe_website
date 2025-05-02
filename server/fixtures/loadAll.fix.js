const createTables = require('./createTables.fix');
const fillIngredientCategoryTable = require('./IngredientCategory.fix');
const fillIngredientTable = require('./Ingredient.fix');
const fillRecipeCategoryTable = require('./RecipeCategory.fix');

async function loadEverything() {
    await createTables(true);
    await fillIngredientCategoryTable();
    await fillIngredientTable();
    await fillRecipeCategoryTable();

}

loadEverything();
