window.onload = function () {
  const loginPage = document.getElementById('login-container');
  const bookshelfWrapper = document.querySelector('.bookshelf_wrapper');


  loginPage.classList.add('hidden');

 
  gsap.delayedCall(4, function () {
    gsap.to(bookshelfWrapper, {
      opacity: 0,
      duration: 1,
      onComplete: () => {
        bookshelfWrapper.style.display = 'none';
        document.body.style.transition = "background 1s ease";
        document.body.style.background = "#1a1a1a";

        loginPage.classList.remove('hidden');
        gsap.fromTo(loginPage, { opacity: 0 }, { opacity: 1, duration: 1 });
      }
    });
  });
  
  
  
  
  
  
  let lightmode = localStorage.getItem('lightmode');
  const themeSwitch = document.getElementById('theme-switch');
  
  const enableLightmode = () => {
      document.body.classList.add('lightmode')
      localStorage.setItem('lightmode', 'active')
  }
  
  const disableLightmode = () => {
      document.body.classList.remove('lightmode')
      localStorage.setItem('lightmode', null)
  }
  
  if(lightmode === "active") enableLightmode()
  
  themeSwitch.addEventListener("click",()=>{
      lightmode = localStorage.getItem('lightmode')
      if(lightmode !== "active"){
          enableLightmode()
      }
      else{
          disableLightmode();
      }
  })
};
