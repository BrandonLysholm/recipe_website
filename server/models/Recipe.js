const sequelize = require("../sequelize.js")


const Recipe = sequelize.define('Recipe', {
    title:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    mealCategory:{
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
module.exports = Recipe;