console.log("Hello World!")

let count = 0;
let indice = 0;
let codigo = "";

const CURRENT_NUMBER = document.getElementById('currentNumber');
var lista = document.getElementById('span-result-list');
var tarefa = document.querySelector("#todo-tarefa");

function increment() {
	count++;
	CURRENT_NUMBER.innerHTML = count;
}

function decrement() {
	count--;
	CURRENT_NUMBER.innerHTML = count;
}

function test() {
	kdowkdpo;
}

function todo_list_add() {
	indice++;
	codigo = "tarefa" + indice;
	lista.innerHTML = lista.innerHTML
		+ '<input type="checkbox" id="'+ codigo +'" name="'+ codigo +'" value="'+ tarefa.value +'">'
		+ '<label for="'+ codigo +'">'+ tarefa.value +'</label><br>';
}