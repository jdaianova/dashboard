function addTask() {
  const tasks = document.querySelectorAll(".tasks");
  const addBtn = document.querySelector(".add-btn");
  const addTaskBtn = document.querySelector(".add-task-btn");
  const cancelTaskBtn = document.querySelector(".cancel-task-btn");
  const newTaskText = document.querySelector(".new-task-text");
  const addNewTask = document.querySelector(".add-new-task");
  let textNewTask;

  addBtn.addEventListener("click", () => {
    addNewTask.classList.remove("invisible");
    addBtn.classList.add("invisible");
    addTaskBtn.classList.add("invisible");

    newTaskText.addEventListener("input", (e) => {
      textNewTask = e.target.value;
      if (textNewTask) {
        addTaskBtn.classList.remove("invisible");
      } else {
        addTaskBtn.classList.add("invisible");
      }
    });
  });

  cancelTaskBtn.addEventListener("click", () => {
    newTaskText.value = "";
    textNewTask = "";
    addNewTask.classList.add("invisible");
    addBtn.classList.remove("invisible");
  });

  addTaskBtn.addEventListener("click", () => {
    const newTask = document.createElement("div");
    newTask.classList.add("task");
    newTask.draggable = true;
    newTask.textContent = textNewTask;
    tasks[0].appendChild(newTask);
    newTaskText.value = "";
    textNewTask = "";
    addNewTask.classList.add("invisible");
    addBtn.classList.remove("invisible");
    dragAndDrop();
  });
}

addTask();

let draggedItem = undefined;
function dragAndDrop() {
  const tasksAll = document.querySelectorAll(".tasks");
  const taskAll = document.querySelectorAll(".task");

  for (let i = 0; i < taskAll.length; i++) {
    const item = taskAll[i];
    item.addEventListener("dragstart", () => {
      draggedItem = item;
      setTimeout(() => {
        item.classList.add("invisible");
      }, 0);
    });

    item.addEventListener("dragend", () => {
      setTimeout(() => {
        item.classList.remove("invisible");
        draggedItem = undefined;
      }, 0);
    });

    item.addEventListener("dblclick", () => {
      item.remove();
    });

    for (let j = 0; j < tasksAll.length; j++) {
      const items = tasksAll[j];
      console.log(items);
      items.addEventListener("dragover", (e) => e.preventDefault());
      items.addEventListener("dragenter", function (e) {
        e.preventDefault();
        this.style.backgroundColor = "rgba(0,0,0, .5)";
      });
      items.addEventListener("dragleave", function (e) {
        e.preventDefault();
        this.style.backgroundColor = "rgba(0,0,0,0)";
      });
      items.addEventListener("drop", function (e) {
        this.style.backgroundColor = "rgba(0,0,0,0)";
        this.append(draggedItem);
      });
    }
  }
}

dragAndDrop();
