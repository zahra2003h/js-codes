const todoField = document.getElementById("todo-field");

const addButton = document.getElementById("add-button");

var tasks = [];

addButton.addEventListener('click',addText);

function addText() {
    if (todoField.value == "","  ") {
        tasks.push(todoField.value);
    }

    document.getElementById("pTag").innerHTML= tasks.join("<br>");

}
