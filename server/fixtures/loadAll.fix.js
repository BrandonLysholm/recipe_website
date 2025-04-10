const createTables = require('./createTables.fix');
const fillIngredientCategoryTable = require('./IngredientCategory.fix');
const fillIngredientTable = require('./Ingredient.fix');

async function loadEverything() {
    await createTables(true);
    await fillIngredientCategoryTable();
    await fillIngredientTable();

}

loadEverything();
