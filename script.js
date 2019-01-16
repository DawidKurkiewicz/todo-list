let completed = false

const remove = () => {
    event.target.parentNode.remove()
}

const line = () => {
    if (completed === true) {
        completed = false
        event.target.style.textDecoration = "none"
    } else {
        completed = true
        event.target.style.textDecoration = "line-through"
    }
}

document.querySelectorAll("li button").forEach(item => item.addEventListener("click", remove))
document.querySelectorAll("li").forEach(item => item.addEventListener("click", line))
const input = document.querySelector("input")
const ul = document.querySelector("ul")
const li = document.querySelectorAll("li")

const search = (e) => {
const searchText = e.target.value.toLowerCase()
let elements = [...li];
elements = elements.filter(li => li.textContent.toLowerCase().includes(searchText))
}

input.addEventListener("input", search)