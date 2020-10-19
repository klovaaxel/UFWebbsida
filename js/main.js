const navButton = document.getElementById("navbarMenuButton");
function menuTextSwap(){
  if (navButton.innerHTML == "Menu") {
    navButton.innerHTML = "Close";
  }
  else {
    navButton.innerHTML = "Menu";
  }
  gsap.to(".navbar-toggler", { y: "-0%", duration: 1,});
}

const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
tl.set(".header", { x: "-150%", duration: 0,});
tl.set(".navbar", { y: "-300%", duration: 0,});

tl.to(".header", { x: "0%", duration: .5,});
tl.to(".navbar", { y: "0%", duration: .6,});
