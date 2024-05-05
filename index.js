const taskContainer = document.querySelector(".task-list-container");

const taskList = [];

function addTask() {
  const taskInput = document.getElementById("task-input").value;
  taskList.push(taskInput);
  console.log(taskList);

  const newNode = createNewNode(taskInput);
  taskContainer.appendChild(newNode);
}

function createNewNode(taskName) {
  var newNode = document.createElement("div");
  newNode.classList.add("newNode");

  var tickButton = document.createElement("i");
  tickButton.classList.add("fa-regular");
  const circleTicl = tickButton.classList.add("fa-circle");

  var taskTitle = document.createElement("p");
  taskTitle.classList.add("taskTitle");
  taskTitle.textContent = taskName;

  var crossIcon = document.createElement("i");
  crossIcon.classList.add("crossTick");
  crossIcon.classList.add("fa-solid");
  crossIcon.classList.add("fa-xmark");
  newNode.appendChild(tickButton);
  newNode.appendChild(taskTitle);
  newNode.appendChild(crossIcon);

  return newNode;
}
