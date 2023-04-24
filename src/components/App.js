class Card {
  #el;
  #styles;

  constructor(element) {
    this.#el = element;
    this.#styles = window.getComputedStyle(element);
  }

  clear() {
    this.#el.remove();
  }

  set styles(text) {
    this.#el.style.cssText = text;
  }

  get styles() {
    return this.#styles;
  }

  get proection() {
    return (() => {
      const d = document.createElement("div");
      d.classList.add("proection");
      const { width, height } = this.styles;
      d.style.cssText = `
	 			width: ${width};
		 		height: ${height};
		 		margin: 10px 0;
				background-color: white;
				border-radius: 3px;
			`;
      return d;
    })();
  }

  get element() {
    return this.#el;
  }
}

class Controller {
  constructor(container) {
    this.container = container;
    this.draggingElement = null;
    this.draggingProection = null;
  }

  setDraggingElement(node) {
    this.draggingElement = new Card(node);
  }

  replaceDragging() {
    this.draggingProection.replaceWith(this.draggingElement.element);
    this.draggingElement.element.style = this.draggingElement.styles;
  }

  clear() {
    this.draggingElement = null;
    this.draggingProection = null;
  }

  onMouseDown = (evt) => {
    const target = evt.target;

    if (target.classList.contains("draggable")) {
      this.shiftX = evt.offsetX;
      this.shiftY = evt.offsetY;
      this.setDraggingElement(target);
      this.draggingElement.style = `
		 		left: ${evt.pageX - this.shiftX}px;
		 		top: ${evt.pageY - this.shiftY}px;
			`;
      this.proectionAct(evt);
    }
  };

  onMouseUp = () => {
    if (this.draggingElement) {
      this.replaceDragging();
      this.clear();
    }
  };

  // Рассчёт позиции вставки проекции и вставка или удаление
  proectionAct(evt) {
    const target = evt.target;
    const element = this.draggingElement;
    const proection = this.draggingProection;
    if (
      target.classList.contains("draggable") &&
      !target.classList.contains("proection")
    ) {
      const { y, height } = target.getBoundingClientRect();
      const appendPosition =
        y + height / 2 > evt.clientY ? "beforebegin" : "afterend";

      if (!proection) {
        this.draggingProection = element.proection;
      } else {
        proection.remove();
        target.insertAdjacentElement(appendPosition, proection);
      }
    } else {
      if (target.classList.contains("board")) {
        const draggableChildren = Array.from(target.children).filter((n) =>
          n.classList.contains("draggable")
        );
        if (draggableChildren.length > 0) {
          return;
        }
        if (!proection) {
          this.draggingProection = element.proection;
        } else {
          proection.remove();
          //const currentAddNewTaskButton = target.querySelector(".add-btn");
          target.insertBefore(proection, target.querySelector(".add-btn"));
        }
      }
    }
  }

  onMouseMove = (evt) => {
    if (this.draggingElement) {
      const { pageX, pageY } = evt;
      const element = this.draggingElement;
      const { width, height } = this.draggingElement.styles;
      element.styles = `
				position: absolute;
		 		left: ${pageX - this.shiftX}px;
		 		top: ${pageY - this.shiftY}px;
		 		pointer-events: none;
				width: ${width};
				height: ${height};
			`;
      this.proectionAct(evt);
    }
  };
}

const controller = new Controller(document.querySelector(".board"));
const addNewTaskButtons = document.querySelectorAll(".add-btn");

document.body.addEventListener("mousedown", controller.onMouseDown);
document.body.addEventListener("mouseup", controller.onMouseUp);
document.body.addEventListener("mousemove", controller.onMouseMove);

[...addNewTaskButtons].forEach((addBtn) => {
  addBtn.addEventListener("click", () => {
    const currentBoard = addBtn.parentElement;
    const addNewTask = currentBoard.querySelector(".add-new-task");
    const addTaskButton = currentBoard.querySelector(".add-task-btn");
    const cancelTaskButton = currentBoard.querySelector(".cancel-task-btn");
    const taskText = currentBoard.querySelector(".new-task-text");

    showElement(addNewTask);
    hideElement(addBtn);
    cancelTaskButton.addEventListener("click", () => {
      hideElement(addNewTask);
      showElement(addBtn);
    });
    addTaskButton.addEventListener("click", () => {
      if (taskText.value === "") return;
      const task = document.createElement("div");
      task.classList.add("draggable");
      task.textContent = taskText.value;
      taskText.value = "";
      currentBoard.querySelector(".task-list").appendChild(task);
      hideElement(addNewTask);
      showElement(addBtn);
    });
  });
});

function showElement(element) {
  element.classList.remove("invisible");
}

function hideElement(element) {
  element.classList.add("invisible");
}
