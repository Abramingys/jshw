// Создать элемент p с классом “text” и с текстом - “Это всего лишь текст”, после него вставьте div с классом “alert” и с текстом “А это сообщение об ошибке” с красным фоном, белым текстом и полями (padding) размером 20px

let p = document.createElement('p');
p.className = 'text';
p.innerText = 'Это всего лишь текст';
let div = document.createElement('div');
div.className = "alert";
div.innerText = 'А это сообщение об ошибке';
div.style.background = "red";
div.style.color = "white";
div.style.padding = "20px";

document.body.append(p);
p.after(div)


// Создать список элементов с помощью тега <ol> со значениями из массива строк: ["Viktor", "Tatiana", "Eduard", "Michael", "Denis", "Peter", "Ann", "Dmitry", "Sergey", "Ivan", "Alan"]
// Каждый четный элемент должен иметь css класс “even” и иметь зеленый фон, а нечетный - “odd” и иметь синий фон.
// *Если это пользователь, у которого в имени встречаются минимум 2 одинаковые буквы без учета регистра (например, Peter, Tatiana) - цвет текста должен стать белым.

let itemArray = ["Viktor", "Tatiana", "Eduard", "Michael", "Denis", "Peter", "Ann", "Dmitry", "Sergey", "Ivan", "Alan"];
let ol = document.createElement('ol');
document.body.prepend(ol);

let i = 0;

for (;i < itemArray.length;i++){
    let li =  document.createElement('li');
    if (i % 2 !== 0) {
        li.classList.add('even');
        li.style.background = 'green'
    }
    else{
        li.classList.add('odd');
        li.style.background = 'blue'
    }
    ol.append(li);
    li.innerText = li.innerText + item[i];
} 