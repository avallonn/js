const date = ['10-02-2022', 'тест', '11/12/2023', '00/12/2022', '41/12/2023', '30/02/2024'];

const validDates = date
    .map(date => new Date(date))
    .filter(date => !isNaN(date))
    .map(date => date.toLocaleDateString('ru-RU'))
    .sort((a, b) => a - b);

console.log(validDates);