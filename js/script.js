// let navbar=document.getElementsByClassName("navbar")[0];
// const scroll = document.documentElement.scrollTop();


// if(scroll>100){
//     navbar.classList.add("whiteClass");
// }
// else{
//     navbar.classList.remove("whiteClass");
//     navbar.classList.add("transparentClass");
// }






const navbar = document.getElementById('navbar')

// OnScroll event handler
const onScroll = () => {

  // Get scroll value
  const scroll = document.documentElement.scrollTop

  // If scroll value is more than 0 - add class
  if (scroll > 100) {
    navbar.classList.add("whiteClass");
  } else {
    navbar.classList.remove("whiteClass")
  }
}

// Use the function
window.addEventListener('scroll', onScroll)

