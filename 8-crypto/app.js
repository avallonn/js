function crypto(password) {
    let cryptoPass = password.split(['']);
    cryptoPass.reverse();
    return cryptoPass;
};
console.log(crypto('password'));


function check() {
    let encryptedPass = crypto('password');
    encryptedPass.reverse();
    let truePass = encryptedPass.join('');

    switch (truePass) {
        case 'password':
            console.log('Пароль верный!');
        break;
        default:
            console.log('Пароль неверный!');
    };
};
console.log(check());