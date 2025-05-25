document.addEventListener("DOMContentLoaded", () => {
  const letters = document.querySelectorAll(".fadeeffect span");
  const loader = document.querySelector(".loader");
  const mainContent = document.querySelector(".main-content");

  const tl = gsap.timeline();

  tl.to(letters, {
    opacity: 1,
    y: -10,
    stagger: 0.1,
    duration: 1,
    ease: "bounce.in"
  })
  .to(letters, {
    opacity: 0,
    y: 20,
    stagger: 0.1,
    duration: 1,
    delay: 1,
    ease: "elastic.out"
  })
  .to(loader, {
    opacity: 0,
    duration: 0.8,
    onComplete: () => {
      loader.style.display = "none";
      document.body.style.overflow = "auto"; 
      mainContent.style.display = "block";

      gsap.from(".navbar, .hero-section", {
        opacity: 0,
        y: 30,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out"
      });
    }
  });
});

const canvas = document.getElementById("stars-canvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function drawStars(count) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < count; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const radius = Math.random() * 1.2;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = "white";
    ctx.fill();
  }
}

resizeCanvas();
drawStars(300);

window.addEventListener("resize", () => {
  resizeCanvas();
  drawStars(300);
});

// Theme toggle
const themeSwitch = document.getElementById('theme-switch');
const body = document.body;

themeSwitch.addEventListener('click', () => {
  body.classList.to('lightmode');
});

// let lightmode = localStorage.getItem('lightmode');
// const themeSwitch = document.getElementById('theme-switch');

// const enableLightmode = () => {
//     document.body.classList.add('lightmode')
//     localStorage.setItem('lightmode', 'active')
// }

// const disableLightmode = () => {
//     document.body.classList.remove('lightmode')
//     localStorage.setItem('lightmode', null)
// }

// if(lightmode === "active") enableLightmode()

// themeSwitch.addEventListener("click",()=>{
//     lightmode = localStorage.getItem('lightmode')
//     if(lightmode !== "active"){
//         enableLightmode()
//     }
//     else{
//         disableLightmode();
//     }
// })