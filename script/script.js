const menuButton = document.getElementById('menu-btn')
const languages = document.querySelectorAll('.languages')

let menuBtn = function() {
    let navBar = document.getElementById('collapse')
    navBar.classList.toggle('setCollapse')
    
}

menuButton.addEventListener('click', menuBtn)
