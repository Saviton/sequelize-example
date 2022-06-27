const Sequelize = require('sequelize');
const {connectToDataBase} = require('./connect-to-database');
const sequelize = connectToDataBase();
const {DataTypes} = Sequelize;


function createUserTable() {
    /** Описание модели, которая позже будет создана как таблица в SQL, путем вызова для этого объекта метода sync.*/
    const User = sequelize.define('user', {
            userId: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            username: {
                type: DataTypes.STRING,
                allowNull: false,
                /** Валидация данных*/
                validate: {
                    len: [4, 6]
                }
            },
            password: {
                type: DataTypes.STRING
            },
            age: {
                type: DataTypes.INTEGER,
                defaultValue: 21
            },
            smart: {
                type: DataTypes.BOOLEAN,
                defaultValue: true
            }
        },
        {
            /** параметр true: автоматически к таблице добавляются поля updated,created.
             * false: не добавляются.*/
            timestamps: false,
            /** запрет на модификацию названия таблицы, при параметре false: создаёт таблицу users*/
            freezeTableName: true
        });

    /** sync: принимает параметр force: true, если true, удаляет существующую таблицу с таким же именем и создаёт ту,
     *  для которой вызывается sync.
     *  Параметр alter: добавляет столбцы оговоренные в объекте для которого вызывается sync в существующую таблицу
     *  с таким же именем.*/
    User.sync(
        // {alter: true}
    ).then((data) => {
        console.log("Table and model synced successfully!");
    }).catch((err) => {
        console.log("Error syncing the table and model!");
    })

    /** возвращаем модель юзера, чтобы через её после инсертить данные*/
    return User;
}

module.exports = {createUserTable}