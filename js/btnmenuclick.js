(function () {
    let btnWrapper = document.querySelector('.menu-icon-wrapper')
    let btn = document.querySelector('.menu-icon')
    let menu = document.querySelector('.navbar-collapse')

    initClick = () => {
        btn.classList.toggle('menu-icon-active')
        menu.classList.remove('collapsed')
        menu.classList.toggle('collapse')
    }

    btnWrapper.addEventListener("click", initClick)
})()