const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: '../database.db'
});

async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log("Database connected succefully");
    } catch (error) {
        //ensure you created the database
        //check database credentials
        console.error("Unable to connect to the database:", error);
    }
}

testConnection();

module.exports = sequelize;