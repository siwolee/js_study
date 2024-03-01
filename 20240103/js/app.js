const $ = document.querySelector.bind(document);
const todoInput = $(".todo-input");
const todoButton = $(".todo-button");
const todoList = $(".todo-list");
const filterUndone = $(".filter-undone");
const filterDone = $(".filter-done");
const filterAll = $(".filter-all");

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", switchStateTodo);

filterUndone.addEventListener("click", filterTodo);
filterDone.addEventListener("click", filterTodo);
filterAll.addEventListener("click", filterTodo);

function addTodo(event){
    //Prevent form from submitting
    event.preventDefault();
	
	const newTodo=document.createElement("li");
	const todoText=todoInput.value;
	newTodo.innerText=todoText;
	newTodo.classList.add("undone");
	todoList.appendChild(newTodo);
	todoInput.value="";
}

function switchStateTodo(e) {
	const item = e.target;
	item.classList.toggle("undone");
	item.classList.toggle("done");
}

function filterTodo(e) {
	let filter = e.target.innerText;
	if (filter === "Undone")
		filter = "undone";
	else if (filter === "Done")
		filter = "done";

	for (const item of todoList.children)
	{
		if (filter === "All" || filter === item.classList[0])
		{
			item.style.display = "";
		}
		else
		{
			item.style.display = "none";
		}
	}
}