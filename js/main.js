const navButton = document.getElementById("navbarMenuButton");
let navLime = document.getElementById("NavLime");
function menuTextSwap(){
  if (navButton.innerHTML == "Menu") {
    navButton.innerHTML = "Close";
    navLime.style.transform = "rotate(90deg) translateY(-.3em)"
  }
  else {
    navButton.innerHTML = "Menu";
    navLime.style.transform = "rotate(0deg) translateY(-.3em)"

  }
  gsap.to(".navbar-toggler", { y: "-0%", duration: 1,});
}

const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
tl.set(".header", { x: "-100vw", duration: 0,});
tl.set(".navbar", { y: "-100vh", duration: 0,});

tl.to(".header", { x: "0%", duration: .5,});
tl.to(".navbar", { y: "0%", duration: .6,});
