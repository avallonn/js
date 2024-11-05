const arr = [1, 40, -50, -20, -10, 5, 0, 100];

function arrSort() {
    for (let j = arr.length - 1; j > 0; j--) {
        for (let i = 0; i < j; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
            };
        };
    };
    return arr;
}
console.log(arrSort(arr));