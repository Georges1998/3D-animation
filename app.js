const card = document.querySelector(".card");
const container = document.querySelector(".container");

const title = document.querySelector(".info h1");
const fruit = document.querySelector(".fruit img");
const desc = document.querySelector(".info h3");

container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 10;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 10;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

//Animate in
container.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";

  title.style.transform = "translateZ(100px)";
  fruit.style.transform = "translateZ(100px) rotateZ(-15deg)";
  desc.style.transform = "translateZ(100px)";
});
//Animate out
container.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = "rotateY(0deg) rotateX(0deg)";

  title.style.transform = "translateZ(0)";
  fruit.style.transform = "translateZ(0)";
  desc.style.transform = "translateZ(0)";
});
