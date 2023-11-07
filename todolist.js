const addEl = document.getElementById("icon");
const inputEl = document.getElementById("todo_input");
const deleteEl = document.getElementById("icon-2");
const todoListEl = document.getElementById("todo_list");

function addTodoEvent() {
	const inputValue = inputEl.value;

	const ulEl = document.createElement("ul");
	const liEl = document.createElement("li");
	const paragraghEl = document.createElement("p");
	paragraghEl.id = "paragraph_todos";
	paragraghEl.innerText = inputValue;
	const spanEl = document.createElement("span");
	const icon = document.createElement("ion-icon");
	icon.setAttribute("name", "close"); // setAttribute means the name="" or anything inside an element of the html,
	icon.id = "icon-2";

	liEl.appendChild(paragraghEl);
	liEl.appendChild(spanEl);
	spanEl.appendChild(icon);
	ulEl.appendChild(liEl);
	todoListEl.appendChild(ulEl);

	inputEl.value = "";

	icon.addEventListener("click", () => {
		liEl.style.display = "none";
	});
}

addEl.addEventListener("click", addTodoEvent);
