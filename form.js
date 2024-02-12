const todoField = document.getElementById("todo-field");

const addButton = document.getElementById("add-button");

const ulElement = document.getElementById("list");

var tasks = [];

addButton.addEventListener('click',addText);

function addText() {
    if (todoField.value == "","  ") {
        tasks.push(todoField.value);
    }
    let li = document.createElement("li");
    li.innerHTML = todoField.value;
    ulElement.appendChild(li);
}
