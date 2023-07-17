// Retrieve todos from local storage or initialize with a default todo
let todos = JSON.parse(localStorage.getItem("todos")) || [
  {
    id: generateId(),
    description: "Bath in the glory of this app",
    done: false,
  },
];

// DOM elements
const todoInput = document.getElementById("todoInput");
const addTodoBtn = document.getElementById("addTodoBtn");
const todoList = document.getElementById("todoList");
const filterRadios = document.getElementsByName("filter");
const removeDoneBtn = document.getElementById("removeDoneBtn");

// Event listeners
addTodoBtn.addEventListener("click", handleAddTodo);
removeDoneBtn.addEventListener("click", handleRemoveDoneTodos);
filterRadios.forEach((radio) =>
  radio.addEventListener("change", handleFilterChange)
);

// Initialize todo list
renderTodoList();

function handleAddTodo() {
  const description = todoInput.value.trim();

  if (description === "") {
    return;
  }

  if (isDuplicate(description)) {
    alert("Todo already exists!");
    return;
  }

  const newTodo = {
    id: generateId(),
    description,
    done: false,
  };

  todos.push(newTodo);
  saveTodosToLocalStorage();
  renderTodoList();

  todoInput.value = "";
}

function handleRemoveDoneTodos() {
  todos = todos.filter((todo) => !todo.done);
  saveTodosToLocalStorage();
  renderTodoList();
}

function handleFilterChange() {
  renderTodoList();
}

function renderTodoList() {
  const filter = getSelectedFilter();
  const filteredTodos = filterTodos(todos, filter);

  todoList.innerHTML = "";

  filteredTodos.forEach((todo) => {
    const todoItem = document.createElement("li");
    todoItem.classList.add("todo-item");

    const todoCheckbox = document.createElement("input");
    todoCheckbox.type = "checkbox";
    todoCheckbox.checked = todo.done;
    todoCheckbox.addEventListener("change", () => {
      todo.done = !todo.done;
      saveTodosToLocalStorage();
    });

    const todoLabel = document.createElement("label");
    todoLabel.textContent = todo.description;

    todoItem.appendChild(todoCheckbox);
    todoItem.appendChild(todoLabel);

    todoList.appendChild(todoItem);
  });
}

function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
}

function saveTodosToLocalStorage() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function getSelectedFilter() {
  const selectedRadio = Array.from(filterRadios).find((radio) => radio.checked);
  return selectedRadio ? selectedRadio.value : "all";
}

function filterTodos(todos, filter) {
  switch (filter) {
    case "open":
      return todos.filter((todo) => !todo.done);
    case "done":
      return todos.filter((todo) => todo.done);
    default:
      return todos;
  }
}

function isDuplicate(description) {
  return todos.some(
    (todo) => todo.description.toLowerCase() === description.toLowerCase()
  );
}
