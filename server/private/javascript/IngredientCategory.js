const {DataTypes, sequelize} = require("../../dataSource");


const IngredientCategory = sequelize.define('IngredientCategory', {
        ingredientCategoryName: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            isLowercase: true,
            notEmpty: true
        }
    },
    {
        freezeTableName: true,
    })

module.exports = IngredientCategory;
