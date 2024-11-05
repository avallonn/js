const card = '4561-2612-1234-5464';

function correctCardNumber (cardNum) {
    console.log(cardNum);
    cardNum = cardNum
    .trim()
    .replaceAll('-', '')
    console.log(cardNum)

    if (cardNum.length != 16) {
        return false;
    } 
    // Проверка по Алгоритму Луны
    let sum = 0;
    for (let i = 0; i < cardNum.length; i++) {
        let numbers = Number(cardNum[i]);
        if ((cardNum.length - i) % 2 === 0) {
            numbers *= 2;
            if (numbers >= 9) {
                numbers -= 9;
            }
            sum += numbers;
        }
    }
    return sum % 10 === 0;
}
console.log(correctCardNumber(card));