const btn1 = document.querySelector(".btn-1");
const task = document.querySelector(".task");
const addTask = document.querySelector(".newTask");

btn1.addEventListener("click", (e) => {
    e.preventDefault();
    let taskText = addTask.value;
    task.insertAdjacentHTML("beforeend", `<div class="taskAdded">
        <p>${taskText}</p>
        <div class="btns">
        <button type="button" class="btn-2 edit-task">Edit</button>
        <button type="button" class="btn-2 delete-task">Delete</button>
        </div>
        </div>`);
    addTask.value = "";
})
task.addEventListener("click", (e) => {
    const clickedBtn = e.target.closest(".btn-2");
    if (!clickedBtn) return;
    const taskAdded = clickedBtn.closest(".taskAdded");
    if (clickedBtn.classList.contains("delete-task")) {
        taskAdded.remove();
    }
    if (clickedBtn.classList.contains("edit-task")) {
        const p = taskAdded.querySelector("p");
        const newValue = prompt("Edit your task:", p.innerText);
        if (newValue !== null && newValue.trim() !== "") {
            p.innerText = newValue;
        }
    }
});