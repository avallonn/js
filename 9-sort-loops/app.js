const arr = [1, 40, -50, -20, -10, 5, 0, 100];

function sort(arrayOfSort) {
    for (const element of arrayOfSort) {
        switch (true) {
            case arr[0] > arr [1]:
                arr1 = arr[1];
                arr[1] = arr[0];
                arr[0] = arr1;
            case arr[1] > arr [2]:
                arr2 = arr[2];
                arr[2] = arr[1];
                arr[1] = arr2;
            case arr[2] > arr [3]:
                arr3 = arr[3];
                arr[3] = arr[2];
                arr[2] = arr3;
            case arr[3] > arr [4]:
                arr4 = arr[4];
                arr[4] = arr[3];
                arr[3] = arr4;
            case arr[4] > arr [5]:
                arr5 = arr[5];
                arr[5] = arr[4];
                arr[4] = arr5;
            case arr[5] > arr [6]:
                arr6 = arr[6];
                arr[6] = arr[5];
                arr[5] = arr6;
        };
    };
    return arr;
};

console.log(sort(arr))