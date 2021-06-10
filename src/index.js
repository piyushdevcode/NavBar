const btnMenu = document.querySelector(".menu-icon");
const navItems = document.querySelector(".nav-items");
let toggle = false;
btnMenu.addEventListener(
  "click",
  function() {
    toggle = !toggle;
    if(toggle){                             // FOR Activating Menu
    navItems.classList.remove("menu-off"); 
      // console.log("open-menu", navItems);
    }
    else{                                 // FOR Deactivating Menu
      navItems.classList.add("menu-off"); 
      // console.log("close-menu",navItems);
    }
  });
