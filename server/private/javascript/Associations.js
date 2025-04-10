const Ingredient = require('./Ingredient');
const IngredientCategory = require('./IngredientCategory');

addAssociations = () => {
    Ingredient.belongsTo(IngredientCategory);
}

module.exports = {addAssociations};
