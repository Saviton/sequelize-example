const {connectToDataBase} = require('./connect-to-database')
const sequelize = connectToDataBase();

function isConnectSuccess() {
    /** Проверка на успешное подключение к БД*/
    sequelize.authenticate().then(() => {
        console.log("Connection successful!");
    }).catch((err) => {
        console.log("Error connecting to database!");
    });
}

module.exports = {isConnectSuccess};