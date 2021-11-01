// Напишите функцию printMessage(n), которая выводит сообщения на экран каждые n секунд.
function printMessagee(n) {
    setInterval(() => {
        console.log("hello1");
        alert('hello');
    }, n);
};

printMessagee(5000);

// Напишите функцию, которая выводит через 5 секунд на экран сообщение “прошло 5 секунд”

function time(n) {
    setTimeout(() => {
        alert('Прошло 5 секунд');
    }, n);
}
time(5000);

// Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

function printNumbers(from, to) {

    let timerId = setInterval(() => {
        alert(from);
        if (from == to) {
            clearInterval(timerId);
        }
        from++
    }, 1000);
}

printNumbers(100, 110);

// По нажатию на кнопку показывать сообщение через 5 секунд, во время этих 5 секунд должно появляться слово “loading”, а после появления сообщения - скрываться

let butAdd = document.getElementById('btn')
let buttext = 'Кнопка';

butAdd.addEventListener('click', (event) => {

    butAdd.innerText = 'loading';

    setTimeout(() => {
        alert("Hello");
        butAdd.innerText = buttext;
    }, 5000);

});