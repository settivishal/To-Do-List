// ------------footer----------
const addButton = document.querySelector('.addButton');
let input = document.querySelector('.input');

// ------------todo container------
const container = document.querySelector('.todo-container');


function item(itemName) {
    createDiv(itemName);
}

function createDiv(itemName) {
    // --------div element--------
    let itemBox = document.createElement('div');
    itemBox.classList.add('items');

    // -------- list elements-----
    let input = document.createElement('input');
    input.value = itemName;
    input.disabled = true;
    input.classList.add('item-input');
    input.type = "text";

    // ------edit button--------
    let editButton = document.createElement('button');
    editButton.innerHTML = "EDIT";
    editButton.classList.add('edit-button');

    // ----remove button--------
    let removeButton = document.createElement('button');
    removeButton.innerHTML = 'X';
    removeButton.classList.add('remove-button');

    container.appendChild(itemBox);

    itemBox.appendChild(input);
    itemBox.appendChild(editButton);
    itemBox.appendChild(removeButton);

    editButton.addEventListener('click', () => edit(input));

    removeButton.addEventListener('click', () => remove(itemBox));
}

function edit(input) {
    input.disabled = !input.disabled;
}

function remove(item) {
    container.removeChild(item);
}

// --------default items------
new item('Assignment-1');
new item('Assignment-2');
new item('Assignment-3');

// ----------adding custom items-------
function check() {
    if (input.value != "") {
        new item(input.value);
        input.value = '';
        input.setAttribute('placeholder', "Add an item");
    }
    else {
        input.style.borderColor = "red";
        input.setAttribute('placeholder', "ENTER VALID INPUT!!");
        input.style.fontSize = "75%";
        input.addEventListener('click', () => {
            input.setAttribute('placeholder', "");
            input.style.borderColor = '#5b45b9';
            input.style.fontSize = "none";
        })
    }
}

// ----------add button---------------
addButton.addEventListener('click', () => check());

window.addEventListener('keydown', (e) => {
    if (e.keyCode == 13) {
        check();
    }
})