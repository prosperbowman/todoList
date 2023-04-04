
let todoEl = document.querySelector('#todo');
const todoListEl = document.querySelector('#todoList');
const searchEl = document.querySelector(".box_search");

let mode = "create";
let elementToUpdate;

document.addEventListener("keyup", function (event) {
	if (event.key === "Enter" && mode === "update") updateTodo();
	if (event.key === "Enter" && mode === "create") addTodo();
});

searchEl.addEventListener("keyup", function(event){
	for(let i = 0; i < todoListEl.children.length; i++){
		const listItem = todoListEl.children[i].firstElementChild;
		const listItemText = listItem.innerText.toLowerCase();

		if (listItemText.includes(searchEl.value.toLowerCase())) {
			listItem.parentElement.style.display = "flex";
		} else {
			listItem.parentElement.style.display = "none";
		}
	}

})
// addTodoBtn.addEventListener("click",function(event){
	
//     if(todoEl.value.length === 0){
//         return alert('Nothing is inputed');
//     }

// 	if("click" === mode)(updateTodo)
//     const todo = todoEl.value;
//     todoListEl.insertAdjacentHTML("afterbegin", `<li class="lists">
//         <span class="text">${todo} </span>
// 		<span class="actions">
//             <span class="complete">✅</span>
//             <span class="delete">❌</span>
// 		</span>
//     </li>`);

//     resetInput();
// });

document.addEventListener("click", function (event) {
	const targetEl = event.target;
	const targetClassList = Array.from(targetEl.classList);

	if (targetClassList.includes("delete")) removeTodo(targetEl);

	if (targetClassList.includes("complete")) completeTodo(targetEl);

	if(targetClassList.includes("text")) prepareUpdate(targetEl);

	if (targetClassList.includes("search_icon")) toggleSearchBox();

});

function toggleSearchBox() {
	searchEl.value = "";
	searchEl.classList.toggle("lost");
	searchEl.focus();
}

function addTodo() {
	if (todoEl.value.length === 0) return;

	todoListEl.insertAdjacentHTML(
		"afterbegin",
		`
		 <li class="lists">
        <span class="text">${todo.value}</span>
		<span class="actions">
            <span class="complete">✅</span>
            <span class="delete">❌</span>
		</span>
    </li>
	`
	);

	resetInput();
}

function removeTodo(todo) {
	todo.closest(".lists").remove();
}

function completeTodo(todo) {
	todo.closest(".actions").classList.toggle("completed");
}

function updateTodo() {
	
	if (todoEl.value.length === 0) return;	

	elementToUpdate.innerHTML=
		`
        <span class="text">${todoEl.value}</span>
	`
	;
		mode = "update";

		resetInput();
}

function prepareUpdate(todo) {
	todoEl.value = todo.closest(".text").innerText;
	elementToUpdate = todo;
	mode = "update";
}

function resetInput() {
	todoEl.value = "";
}
