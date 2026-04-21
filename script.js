const btn1 = document.querySelector(".btn-1");
const task = document.querySelector(".task");
const addTask = document.querySelector(".newTask");

btn1.addEventListener("click", (e)=>{
    e.preventDefault();
    let taskText = addTask.value;
    task.insertAdjacentHTML("beforeend", `<div class="taskAdded"><p>${taskText}</p></div>`);
    addTask.value = "";
})