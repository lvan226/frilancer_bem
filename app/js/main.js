$(function(){
  let menuBurger = document.querySelector('.menu-burger');
  let menuList = document.querySelector('.menu-list');

  menuBurger.addEventListener('click', () => {
    if(menuList.classList.contains('menu-list_active')) {
      menuList.classList.remove('menu-list_active');
      menuBurger.classList.remove('menu-burger_active');
    }else {
      menuList.classList.add('menu-list_active');
      menuBurger.classList.add('menu-burger_active');
    }
  });
  
});