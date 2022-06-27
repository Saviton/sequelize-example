const {createUserTable} = require('./createUserTable');
const userTable = createUserTable();

function inserSingleUserToUserTable() {
    userTable.sync({alter: true}).then(() => {
        return userTable.create({
            username: 'Murloc',
            password: "Mmmrrgglm",
            age: "9",
            smart: false
        }).then((data) => {
            console.log(data.toJSON());
        }).catch((err) => {
            console.log(err);
        })
    })
}

module.exports = {inserSingleUserToUserTable};