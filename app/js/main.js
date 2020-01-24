document.addEventListener("DOMContentLoaded", ready);

function ready() {
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

    // собираем все якоря; устанавливаем время анимации и количество кадров
  const anchors = [].slice.call(document.querySelectorAll('a.anchor')),
  animationTime = 500,
  framesCount = 75;

  anchors.forEach(function(item) {
    // каждому якорю присваиваем обработчик события
    item.addEventListener('click', function(e) {
    // убираем стандартное поведение
    e.preventDefault();

    // для каждого якоря берем соответствующий ему элемент и определяем его координату Y
    let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top + window.pageYOffset;

    // запускаем интервал, в котором
    let scroller = setInterval(function() {
    // считаем на сколько скроллить за 1 такт
    let scrollBy = coordY / framesCount;

    // если к-во пикселей для скролла за 1 такт больше расстояния до элемента
    // и дно страницы не достигнуто
    if(scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
      // то скроллим на к-во пикселей, которое соответствует одному такту
      window.scrollBy(0, scrollBy);
    } else {
      // иначе добираемся до элемента и выходим из интервала
      window.scrollTo(0, coordY);
      clearInterval(scroller);
    }
    // время интервала равняется частному от времени анимации и к-ва кадров
    }, animationTime / framesCount);
    });
  });

  var mixer = mixitup('.portfolio-mixer', {
    animation: {
        duration: 300
    }
  });

  document.querySelectorAll("form").forEach(form =>
    form.addEventListener("submit", submitHandler)
  );

  window.onscroll = ()=> {
    let scroll = window.pageYOffset;
    document.querySelector('.header__background').style.top = -scroll/4 + 'px';
  }
}

function submitHandler(e) {
  e.preventDefault();
  var form = this.querySelector('button');
  var request = new XMLHttpRequest();
  var th = document.querySelector('.contact__form-thanks');

  request.onreadystatechange = function() { 
    console.log("readyState=", this.readyState, "statis=", this.status);
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
        // success, show this.responseText here
        console.log("SUCCESS", this);
        th.classList.add('contact__form-thanks_active');
        form.setAttribute('disabled', 'disabled');
    }
  }
  
  request.open(this.method, this.action, true);
  request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  
  var data = new FormData(this);
  var dataPost;
  // for (var key of data.keys())
  //   console.log(key, data.get(key));
  data.forEach(function(value, key) {
    dataPost += '&' + key + '=' + value;
  })
  console.log(data);
    
  request.send(dataPost);
}