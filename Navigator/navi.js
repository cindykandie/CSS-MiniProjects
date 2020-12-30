let burgerBtn = document.querySelector('#burger')
let navBar = document.querySelector('.nav-links')

burgerBtn.addEventListener('click', function showNavBar() {
    if(burgerBtn.style.zIndex="0"){
    burgerBtn.style.display="inline"
    burgerBtn.style.zIndex="4"
    navBar.classList.add("show-nav")
}else
    navBar.classList.remove("show-nav")

})