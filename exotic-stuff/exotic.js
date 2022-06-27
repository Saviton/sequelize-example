const {connectToDataBase} = require('../sequelize-core/connect-to-database');
const sequelize = connectToDataBase();
/** Если он вызывается для объекта sequelize, а не для отдельной модели,
 *  то он будет удалять/модифицировать все последующие таблицы в зависимости от параметра.*/
sequelize.sync({force: true});

/** будет удалять все таблицы с окончанием на _test, название передаются как regex.*/
sequelize.drop({match: /_test$/});