const password = ['s','s','a','p','d','o','r','w'];
const fullPassword = password.join('');
console.log(fullPassword);


// Как в массиве сделать перестановку символов местами без их удаления и вернуть потом обратно?
function passEncryptor() {
    password [2] = password.splice(0, 1, password[3])[0];
    console.log(password);

};
passEncryptor();

function passCheck () {
    console.log(fullPassword.includes('ssapdorw'|| 'password'));
};
passCheck();