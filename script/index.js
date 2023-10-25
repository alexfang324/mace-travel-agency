/* basic cross-page javascript */


/* navigation bar javascript below */
let isOpen = false;
const navBar = document.querySelector('.nav-item_special')
const navBarShow = document.querySelector('.nav-list')
const logo = document.querySelector('.logo')
const navContainer = document.querySelector('.nav-container')



function menuToggle(){
if (isOpen){
  
    // navBarShow.style.display = 'block';
    isOpen = false;
    navContainer.classList.remove('show')

} else {
    isOpen = true;
    navContainer.classList.add('show')
    // navBarShow.style.display = 'none';
}
}
navBar.addEventListener('click', function (){
    menuToggle();
})



/* index page javascript below */


/* about page javascript below */


/* our-team page javascript below */


/* login form javascript below */