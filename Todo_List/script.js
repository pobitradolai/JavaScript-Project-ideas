document.addEventListener("DOMContentLoaded", function() {
  const taskInput = document.getElementById("taskInput");
  const addTaskBtn = document.getElementById("addTaskBtn");
  const taskList = document.getElementById("taskList");

  addTaskBtn.addEventListener("click", function() {
    addTask();
  });

  taskInput.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
      addTask();
    }
  });

  function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
      const li = document.createElement("li");
      li.textContent = taskText;
      taskList.appendChild(li);
      taskInput.value = "";
      createDeleteButton(li);
    }
  }

  taskList.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("completed");
    } else if (e.target.classList.contains("delete-btn")) {
      e.target.parentElement.remove();
    }
  });

  function createDeleteButton(li) {
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "❌";
    deleteButton.classList.add("delete-btn");
    li.appendChild(deleteButton);
  }
});
