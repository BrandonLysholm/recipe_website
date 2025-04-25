const {DataTypes, sequelize} = require("../../dataSource");


const IngredientCategory = sequelize.define('IngredientCategory', {
        name: {
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
