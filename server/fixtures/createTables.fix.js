const Ingredient = require ('../private/javascript/Ingredient');
const IngredientCategory = require ('../private/javascript/IngredientCategory');
const RecipeCategory = require ('../private/javascript/RecipeCategory');
const {addAssociations} = require('../private/javascript/Associations');

async function createTables(bForce) {
    await addAssociations();

    await Ingredient.sync({force: bForce});
    await IngredientCategory.sync({force: bForce});
    await RecipeCategory.sync({force: bForce});
}

module.exports = createTables;
