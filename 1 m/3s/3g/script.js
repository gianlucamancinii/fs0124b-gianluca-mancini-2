document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");

    addTaskBtn.addEventListener("click", function() {
        const taskText = taskInput.value.trim(); //aggiungo evento al click
        if (taskText !== "") { 
            addTask(taskText);
            taskInput.value = "";
        } else {
            alert("Please enter a task!"); //aggiungo alert
        }
    });

    function addTask(taskText) {
        const li = document.createElement("li");
        const deleteBtn = document.createElement("button");
        const taskTextSpan = document.createElement("span");
        taskTextSpan.textContent = taskText;

        li.appendChild(taskTextSpan);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);

        deleteBtn.textContent = "🙅🏻‍♂️";
        deleteBtn.classList.add("delete-btn"); // aggiungo botton per l'eliminazione individuale delle task sulla lista
        deleteBtn.addEventListener("click", function() {
            li.remove();
        });

        taskTextSpan.addEventListener("click", function() {
            taskTextSpan.classList.toggle("completed");
        });
    }
});
