// var duree1 = 3000;
//
// setTimeout(devise_spawn, 500);
//
// function devise_spawn(){
//   document.querySelector(".devise").style.opacity = "100%";
//   setTimeout(devise_disspawn, duree1);
// }
//
// function devise_disspawn(){
//   document.querySelector(".devise").style.opacity = "0%";
// }


var menu_state = "close";

function menu(){
  if(menu_state == "open"){
    document.querySelector(".nav").classList.remove("nav-height");
    document.querySelector(".open_menu").style.display = "block";
    document.querySelector(".close_menu").style.display = "none";
    menu_state = "close";
  }else{
      document.querySelector(".nav").classList.add("nav-height");
      document.querySelector(".open_menu").style.display = "none";
      document.querySelector(".close_menu").style.display = "block";
      menu_state = "open";
  }
}
