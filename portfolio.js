let content = document.getElementsByTagName("body")[0];
let darkmode = document.getElementsByClassName("darkmode")[0];
darkmode.addEventListener("click", function () {
  content.classList.toggle("dark");
});

document.addEventListener("scroll", function () {
  const scrollPosition = window.scrollY;

  const row1 = document.querySelector(".scrolling-row-1");
  const row2 = document.querySelector(".scrolling-row-2");

  const scrollSpeed = 0.2;
  row1.style.transform = `translateX(${100 - scrollPosition * scrollSpeed}px)`;
  row2.style.transform = `translateX(${scrollPosition * scrollSpeed}px)`;
});

let hover = document.getElementsByClassName("left");
let home = document.getElementsByClassName("home-text");

hover[0].addEventListener("mouseover", function () {
  home[0].style.opacity = 1;
});
hover[1].addEventListener("mouseover", function () {
  home[1].style.opacity = 1;
});
hover[2].addEventListener("mouseover", function () {
  home[2].style.opacity = 1;
});
hover[3].addEventListener("mouseover", function () {
  home[3].style.opacity = 1;
});

hover[0].addEventListener("mouseout", function () {
  home[0].style.opacity = 0;
});
hover[1].addEventListener("mouseout", function () {
  home[1].style.opacity = 0;
});
hover[2].addEventListener("mouseout", function () {
  home[2].style.opacity = 0;
});
hover[3].addEventListener("mouseout", function () {
  home[3].style.opacity = 0;
});

let anima = document.querySelector(".new-card1");
let card1 = document.querySelector(".img1");
let calcy = document.querySelector(".calcy");
let animatedline = document.querySelectorAll(".al");
let al2 = document.querySelector(".animate-line2");
let al3 = document.querySelector(".animate-line3");

anima.addEventListener("mouseenter", function () {
  card1.style.animation = "animation1 1.3s ease-in-out 0.3s 1 normal forwards";
  anima.classList.remove("rev");
  anima.classList.add("modify");
  calcy.style.animation = "text-animation 0.7s ease-in-out 0.3s 1 normal forwards";
  animatedline.forEach((element) => {
    element.style.animation = "animated-lines 0.6s ease-in-out 0.2s forwards";
  });
  al2.style.animationDelay = "0.3s";
  al3.style.animationDelay = "0.4s";
});

anima.addEventListener("mouseleave", function () {
  card1.style.animation = "reverse-animation1 1.3s ease-in-out forwards";

  let animatedline = document.querySelector(".al");
  setTimeout(() => {
    animatedline.style.animation = "reverse-animated-lines 0.6s ease-in-out forwards";
  }, 800);

  setTimeout(() => {
    al2.style.animation = "reverse-animated-lines 0.6s ease-in-out forwards";
  }, 700);

  setTimeout(() => {
    al3.style.animation = "reverse-animated-lines 0.6s ease-in-out forwards";
    calcy.style.animation = "reverse-text-animation 0.7s ease-in-out forwards";
  }, 600);

  setTimeout(() => {
    anima.classList.remove("modify");
    anima.classList.add("rev");
  }, 650);
});


let anima2 = document.querySelector(".new-card2");
let card2 = document.querySelector(".pencil");
let uline = document.querySelector(".notes");
let notebook1 = document.querySelector(".notebook1");
let notebook2 = document.querySelector(".notebook2");
let notebook3 = document.querySelector(".notebook3");
let boy = document.querySelector(".boy");
let scissor = document.querySelector(".scissor");
let scale = document.querySelector(".scale");


anima2.addEventListener("mouseenter", function () {
  card2.style.animation = "pencil-animation 0.85s ease-out forwards"
  uline.classList.remove("non-dly");
  uline.classList.add("dly");
  boy.style.animation = "boy-animation 0.8s ease-out forwards"
  scissor.style.animation = "scissor-animation 0.7s ease-in forwards"
  scale.style.animation = "scale-animation 0.7s ease-in forwards"
  notebook1.style.animation = "notebook1-animation 0.7s ease-in-out 0.1s forwards"
  notebook2.style.animation = "notebook2-animation 0.7s ease-in-out 0.1s forwards"
  notebook3.style.animation = "notebook3-animation 0.7s ease-in-out 0.1s forwards"

});

anima2.addEventListener("mouseleave", function () {
  card2.style.animation = "reverse-pencil-animation 0.82s ease-in forwards";
  let uline = document.querySelector(".notes");
  uline.classList.remove("dly");
  uline.classList.add("non-dly");
  boy.style.animation = "reverse-boy-animation 0.7s ease-in forwards"
  scissor.style.animation = "reverse-scissor-animation 0.9s ease-out forwards"
  scale.style.animation = "reverse-scale-animation 0.9s ease-out forwards"
  setTimeout(() => {
    notebook1.style.animation = "reverse-notebook1-animation 0.7s ease-in-out forwards"
    notebook2.style.animation = "reverse-notebook2-animation 0.7s ease-in-out forwards"
    notebook3.style.animation = "reverse-notebook3-animation 0.7s ease-in-out forwards"
  }, 50);
});