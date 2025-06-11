const {DataTypes, sequelize} = require("../../dataSource");


const Ingredient = sequelize.define('Ingredient', {
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
module.exports = Ingredient;
