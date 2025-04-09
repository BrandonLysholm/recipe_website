const sequelize = require("../sequelize.js")


const Ingredient = sequelize.define('Ingredient', {
    ingredient: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    ingredientCategory: {
        type: DataTypes.STRING,
    }
})

(async () => {
    await sequelize.sync({ force: true });
    // Code here
})();


// Synchronize the model with the database
// This function will delete all existing tables in the database
const syncDatabase = async () => {
    await sequelize.sync();
    console.log("Database synchronized.");
};
// remember to comment this after server runs ones.
syncDatabase();
module.exports = Ingredient;