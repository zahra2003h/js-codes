const input = document.getElementById("todo-input");

const button = document.getElementById("todo-button");

var tasks = [];

button.addEventListener('click', function onAddButtonClick(event) {
    var inputValue = input.value;
    var inputValueWithoutWhiteSpase = inputValue.trim();
    if (inputValueWithoutWhiteSpase != "") {
        tasks.push(inputValueWithoutWhiteSpase);
    }

});