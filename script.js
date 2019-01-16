

const remove = () => {
    event.target.parentNode.remove()
}

document.querySelectorAll("li button").forEach( item => item.addEventListener("click", remove))

