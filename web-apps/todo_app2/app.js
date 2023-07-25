let todos = JSON.parse(localStorage.getItem("todos")) || [
  {
    id: generateId(),
    description: "Bath in the glory of this app",
    done: false,
  },
];

const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");
const filterRadios = document.getElementsByName("filter");
const removeDoneBtn = document.getElementById("removeDoneBtn");

todoForm.addEventListener("submit", handleAddTodo);
removeDoneBtn.addEventListener("click", handleRemoveDoneTodos);
filterRadios.forEach((radio) =>
  radio.addEventListener("change", renderTodoList)
);

// Fetch todos on page load
fetchTodos();

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
    description,
    done: false,
  };

  fetch("http://localhost:4730/todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTodo),
  })
    .then((response) => response.json())
    .then((data) => {
      todos.push(data);
      updateTodosAndSave();
      todoInput.value = "";
    })
    .catch((error) => {
      console.error("Error adding todo:", error);
    });
}

function handleRemoveDoneTodos() {
  const doneTodos = todos.filter((todo) => todo.done);
  const deletePromises = doneTodos.map((todo) =>
    fetch(`http://localhost:4730/todos${todoId}`, {
      method: "DELETE",
    })
  );

  Promise.all(deletePromises)
    .then(() => {
      todos = todos.filter((todo) => !todo.done);
      updateTodosAndSave();
    })
    .catch((error) => {
      console.error("Error removing done todos:", error);
    });
}
function updateTodosAndSave() {
  renderTodoList();
  saveTodosToLocalStorage();
}

function renderTodoList() {
  const filter = getSelectedFilter();
  const filteredTodos = filterTodos(todos, filter);

  todoList.innerHTML = "";

  filteredTodos.forEach((todo) => {
    const todoItem = createTodoItemElement(todo);
    todoList.appendChild(todoItem);
  });
}

function createTodoItemElement(todo) {
  const todoItem = document.createElement("li");
  todoItem.classList.add("todo-item");

  const todoCheckbox = document.createElement("input");
  todoCheckbox.type = "checkbox";
  todoCheckbox.checked = todo.done;
  todoCheckbox.addEventListener("change", () => {
    todo.done = !todo.done;
    updateTodoStatus(todo);
  });

  const todoLabel = document.createElement("label");
  todoLabel.textContent = todo.description;

  todoItem.appendChild(todoCheckbox);
  todoItem.appendChild(todoLabel);

  return todoItem;
}

function fetchTodos() {
  fetch("http://localhost:4730/todos")
    .then((response) => response.json())
    .then((data) => {
      todos = data;
      renderTodoList();
    })
    .catch((error) => {
      console.error("Error fetching todos:", error);
    });
}

function updateTodoStatus(todo) {
  fetch(`http://localhost:4730/todos${todo.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ done: todo.done }),
  })
    .then((response) => {
      if (!response.ok) {
        console.error("Error updating todo status:", response.status);
      }
      saveTodosToLocalStorage();
    })
    .catch((error) => {
      console.error("Error updating todo status:", error);
    });
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
    case "all":
      return todos;
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
