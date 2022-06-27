const {createUserTable} = require('./createUserTable');
const userTable = createUserTable();
const {connectToDataBase} = require('./connect-to-database');
const sequelize = connectToDataBase();
const Sequelize = require('sequelize');
const {DataTypes, Op} = Sequelize;

function queryToUserTable() {
    userTable.sync({alter: true}).then(() => {
        /** Посчитать сумму по столбцу, функция AVG считает среднее арифметическое.*/
        // return userTable.findAll({attributes: [[sequelize.fn('AVG', sequelize.col('age')), 'howOld']]});
        /** Получить целиком таблицу равнозначно Select * from user*/
        // return userTable.findAll();
        /** Получить определенные поля, равнозначно select username,password from user*/
        // return userTable.findAll({attributes: ['username', 'password']});
        /** SELECT "username" AS "MyName", "password" AS "pwd" FROM "user" AS "user";*/
        // return userTable.findAll({attributes: [['username', 'MyName'], ['password', 'pwd']]});
        /** вернуть все поля таблицы кроме поля password.*/
        // return userTable.findAll({attributes: {exclude: ['password']}});
        /** SELECT username FROM user WHERE age = 12 */
        // return userTable.findAll({attributes: ['username'], where: {age: 12}});
        /** SELECT * FROM user WHERE age = 12*/
        // return userTable.findAll({where: {age: 12}});
        /** SELECT * FROM user LIMIT 3*/
        // return userTable.findAll({limit: 3});
        /** SELECT * FROM user ORDER BY age ASC */
        // return userTable.findAll({order: [['age', 'ASC']]});
        /** SELECT "username", SUM("age") AS "sum_age" FROM user GROUP BY "username";
         * т.е. считает поле возраст для всех строк с одинаковым полем username.*/
        // return userTable.findAll({
        //     attributes: ['username', [sequelize.fn('SUM', sequelize.col('age')), 'sum_age']],
        //     group: 'username'});
        /** SELECT * FROM "user" AS "user" WHERE ("user"."username" = 'Boris' OR "user"."age" = 14);
         * Достаёт из таблицы строку в которой username: Boris или age: 14*/
        // return userTable.findAll({
        //     where: {
        //         [Op.or]: {username: 'Boris', age: 14}
        //     }
        // });
        /** SELECT * FROM user WHERE age > 13; Op.gt(greater than)/ Op.lt(less than) /Op.eq (equal)!!! */
        // return userTable.findAll({
        //     where: {
        //         age: {
        //             [Op.gt]: 13
        //         }
        //     }
        // });
        /** Выбирает все строки у которых размер юзернейма равен 5*/
        // return userTable.findAll({
        //     where:
        //         sequelize.where(sequelize.fn('char_length', sequelize.col('username')), 5)
        //
        // });
        /** !!! UPDATE UPDATE !!! Заменяет все username на pizza, для строк у которых поле age = 12.*/
        // return userTable.update({username: 'pizza'}, {
        //     where: {age: 12}
        // });
        /** !!! DELETE DELETE !!! Удаляет все строки у которых поле username = pizza*/
        // return userTable.destroy({where: {username: 'pizza'}});
        /** Удаляет все строки таблицы, но не саму таблицу! */
        // return userTable.destroy({truncate: true});
        /** Находит максимальное значение поля age в таблице.*/
        return userTable.max('age');
    }).then((data) => {
        // data.forEach((element) => {
        //     console.log(element.toJSON());
        // })
        console.log(data)
    }).catch((err) => {
        console.log(err);
    });
}

module.exports = {queryToUserTable};