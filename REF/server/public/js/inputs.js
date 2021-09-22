const loginInFo = {
    username: 'Evans',
    password: 'Theloveofmylife'
};

const loggedInMsg = 'Success, You are logged in'
const names = ['Evans','Aidoo','Doris','Theophilus','Nathaniel']
//names.map((name) => console.log(name));
names.map((name) => console.log(name))

function form(username, password) {
    if (username === loginInFo.username && password === loginInFo.password) {
        console.log(`${loggedInMsg} here are the list of names for the promotions: ${names}`)
    } else if (username !== loginInFo.username && password !== loginInFo.password) {
        console.log('Incorrect')
    } else if (username !== loginInFo.username || password !== loginInFo.password) {
        console.log('Incorrect username or password')
    }
};


form('Evans', 'Theloveofmylife');
console.log('++++++++++++++++++++++||++++++++++++++++++++++++++++++')




