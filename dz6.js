// попробуем при помощи обработчика событий скрывать выпадающее меню при наведении на любой из элементов навигации (пункты меню).

let ul = document.getElementById('ul');

    ul.addEventListener('mouseenter',()=>{
        ul.style.display = "none";
})


// Создать 2 кнопки со значениями удалить и добавить. При нажатии кнопки добавить на страницу добавляется элемент с каким-либо текстом. Добавлять можно сколько угодно раз. При нажатии кнопки удалить - удаляется последний добавленный элемент.

let butAdd = document.getElementById('add');
let butDell = document.getElementById('dell');
let div = document.getElementById('div')

butAdd.addEventListener('click',()=>{
    let item = document.createElement('p');
    item.classList.add('element');
    item.innerText = 'Элемент'; 
    div.append(item);
});

butDell.addEventListener('click',()=>{
    let last = div.lastChild;
    last.remove();
});