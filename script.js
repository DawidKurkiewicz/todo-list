

const remove = () => {
    event.target.remove()
}

document.querySelectorAll("li").forEach( item => item.addEventListener("click", remove))

