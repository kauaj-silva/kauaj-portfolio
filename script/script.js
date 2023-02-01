const menuButton = document.getElementById('menu-btn')

let menuBtn = function() {
    let navBar = document.getElementById('collapse')
    navBar.classList.toggle('setCollapse')
}
menuButton.addEventListener('click', menuBtn)

// Smooth scroll

const links = document.querySelectorAll('.nav-link');
links.forEach(item =>{
    item.addEventListener('click', () => {
        const element = document.getElementById(item.getAttribute("data-link"));
        element.scrollIntoView({behavior:'smooth'})
    })
    
})