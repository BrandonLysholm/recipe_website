const {Sequelize,DataTypes} = require('sequelize');
const sequelize = new Sequelize('../recipes.db');

const Recipe = sequelize.define('Recipe', {
    title:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    mealCategory:{
        type: DataTypes.STRING,
    }
})