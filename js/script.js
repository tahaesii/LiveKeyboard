const titleElem = document.querySelector('.title')

document.addEventListener('keyup', function (event) {



    appendValueToDom(event)

    let userEventKey = event.key.toUpperCase()
    let mainKeyElem = document.getElementById(userEventKey)

    mainKeyElem.classList.add('hit')

    mainKeyElem.addEventListener('animationend', function () {
        mainKeyElem.classList.remove('hit')
    })

    console.log(mainKeyElem);
})


function appendValueToDom (event) {
    console.log(event);

    if (event.code === 'Backspace') {
        titleElem.innerHTML = titleElem.innerHTML.slice(0, -1)
        return
    }

    titleElem.innerHTML += event.key

}
