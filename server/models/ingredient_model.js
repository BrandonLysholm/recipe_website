const {Sequelize,DataTypes} = require('sequelize');
const sequelize = new Sequelize('../recipes.db');

const Ingredient = sequelize.define('Ingredient', {
    ingredient: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    ingredientCategory: {
        type: DataTypes.STRING,
    }
})