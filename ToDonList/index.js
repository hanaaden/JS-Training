const button = document.getElementById("add-btn")
const input = document.getElementById("task-input")
// const addp = document.createElement('li')
const task = document.getElementById('task-list')
let i =0

button.onclick = function(){
    if (input.value != "") {
     const i = document.createElement('li')
     task.textContent = input.value + "\n"
     i.innerHTML = input.value
     document.body.appendChild(i)
     i.className = "text"
     
     
    }else {
        alert("add a task")
    }

}