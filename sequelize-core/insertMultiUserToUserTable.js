const {createUserTable} = require('./createUserTable');
const userTable = createUserTable();

function insertMultiUserToUserTable() {
    userTable.sync({alter: true}).then(() => {
        return userTable.bulkCreate([
            {
                username: 'Boris',
                password: "Boris103",
                age: "12",
                smart: false
            },
            {
                username: 'Molis',
                password: "Moris173",
                age: "14",
                smart: false
            },
            {
                username: 'Voris',
                password: "Voris193",
                age: "19",
                smart: true
            },
        ]).then((data) => {
            data.forEach((element) => {
                console.log(element.toJSON());
            })
        }).catch((err) => {
            console.log(err);
        })
    })
}

module.exports = {insertMultiUserToUserTable};