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

