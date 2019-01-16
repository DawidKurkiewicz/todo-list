

const ul = document.querySelector("ul");
const form = document.querySelector('form');
const taskNumber = document.querySelector('h1 span');
const listItems = document.getElementsByClassName('task');
const input = document.querySelector('input');


const removeTask = (e) => {
    e.target.parentNode.remove();
    taskNumber.textContent = listItems.length;
}

const addTask = (e) => {
    e.preventDefault()
    const titleTask = input.value;
    if (titleTask === "") return;
    const task = document.createElement('li');
    task.className = 'task';
    task.innerHTML = titleTask + "<button>Remove</button>";
    ul.appendChild(task);
    input.value = "";
    taskNumber.textContent = listItems.length;
    task.querySelector('button').addEventListener('click', removeTask);
}


form.addEventListener('submit', addTask)

const input1 = document.querySelectorAll('input')[1];
const searchTask = (e) => {
    const searchText = e.target.value.toLowerCase()
    let tasks = [...listItems];
    console.log(tasks);
    tasks = tasks.filter(li => li.textContent.toLowerCase().includes(searchText))
    console.log(tasks);
    // ul.textContent=""
    // tasks.forEach(li => ul.appendChild(li))
}

input1.addEventListener('input', searchTask)
