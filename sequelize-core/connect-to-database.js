const Sequelize = require('sequelize');

function connectToDataBase() {
    /** Подключение к БД через параметры конструктора.*/
    const sequelize = new Sequelize('sequelize-test', 'postgres', '123', {
        host: 'localhost',
        port: 5432,
        dialect: 'postgres'
    });

    return sequelize;
}

module.exports = {connectToDataBase};