const {createUserTable} = require('./sequelize-core/createUserTable');
const {isConnectSuccess} = require('./sequelize-core/isConnectSuccess');
const {inserSingleUserToUserTable} = require('./sequelize-core/inserSingleUserToUserTable');
const {insertMultiUserToUserTable} = require('./sequelize-core/insertMultiUserToUserTable');
const {queryToUserTable} = require('./sequelize-core/queryToUserTable');


isConnectSuccess();
createUserTable();
// inserSingleUserToUserTable();
// insertMultiUserToUserTable();
queryToUserTable();

