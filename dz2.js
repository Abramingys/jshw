/ Первое задание
let a = 0;

while (a < 50) { 
    console.log(a);
    a++;
}

//   Второе задание
for (let a = 0; a <= 100; a++) {
    if (a == 0){
    }
    else if (a % 2 ===0) {
        console.log(a);
    }
}

// Третье задание
function sum () {
    let array = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    let resultSum = 0;
    for( let i = 0; i < array.length; i++) {
    resultSum +=array[i]
    }
    console.log(resultSum);
}
sum()

// Четвертое задание

let a = 2;
let b = 8;
let result = 1;
let i = 0;

while(i < b){
    result = result * a;
    i++;
}
console.log(result);