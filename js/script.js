
let mask = document.querySelector('.mask');
window.addEventListener('load', () =>{
    mask.classList.add('hide');
    setTimeout(() => {
        mask.remove()
    }, 600)
});






document.addEventListener('DOMContentLoaded', function () {
    // запрет выделения
    document.ondragstart = noselect;
    document.onselectstart = noselect;
    // document.oncontextmenu = noselect;
    function noselect() {return false;}
    // конец запреты выделения
    
    let galleryTitle = document.querySelector('.gallery-title__link');

    let popupNum = document.querySelector('.popup-1');
    let galleryBlock = document.querySelectorAll('.gallery-block');
    let popup = document.querySelectorAll('.popup');
    btn = this.querySelectorAll('.close');

    for (let i = 0; i < galleryBlock.length; i++) {
        galleryBlock[i].addEventListener('click', function (e) {
            e.preventDefault();

            for (var j = 0; j < popup.length; j++) {
                popup[j].classList.remove("active");
            };
            popup[i].classList.add('active');
            btn[i].addEventListener('click', function (e) {
                popup[i].classList.remove('active');
            })
        })
    }
    
    const smoothLinks = document.querySelectorAll('a[href^="#"]');
    for (let smoothLink of smoothLinks) {
        smoothLink.addEventListener('click', function (e) {
            e.preventDefault();
            const id = smoothLink.getAttribute('href');

            document.querySelector(id).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
        });
    };
    // function fun1() {
    //     var chbox;
    //     chbox = document.getElementById('one');

    //     if (chbox.checked) {
    //         alert('Выбран');
    //     }
    //     else {
    //         alert('Не выбран');
    //     }
    // }




    const header_link = document.querySelector('.header-list')
    const burger_menu__btn = document.querySelector('.burger-menu_button');
    const burger_menu = document.querySelector('.burger-menu');


    // burger_menu.onclick = function(e){
    //     e.preventDefault();
    //     burger_menu.classList.toggle("burger-menu_active");
    //     console.log(burger_menu)
    //     if(burger_menu.classList.contains("burger-menu_active")){
    //         header_link.style.display = "flex";
    //     }else{
    //         header_link.style.display = "none";
    //     }
    // }

    //--------- Swiper ---------
    // slider
    new Swiper('.image-slider', {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        slidesPerView: 0.8,
        watchOverflow: true,
        spaceBetween: 40,
        centeredSlides: true,
        // initialSlide: 1,
        loop: true,
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            650: {
                slidesPerView: 1,
            },
            750: {
                slidesPerView: 1.25,
            },
        }
    });


    if (document.documentElement.clientWidth < 1200) {
        document.getElementById("about-bg__img").src = "./img/about-bg__lg.png";
        burger_menu.onclick = function (e) {
            e.preventDefault();
            burger_menu.classList.toggle("burger-menu_active");
            console.log(burger_menu)
            if (burger_menu.classList.contains("burger-menu_active")) {
                header_link.style.display = "flex";
            } else {
                header_link.style.display = "none";
            }
        }
    }
    else {
        document.getElementById("about-bg__img").src = "./img/about-img.png";
    };
    
    const btnUp = {
        el: document.querySelector('.btn-up'),
        show() {
          // удалим у кнопки класс btn-up_hide
          this.el.classList.remove('btn-up_hide');
        },
        hide() {
          // добавим к кнопке класс btn-up_hide
          this.el.classList.add('btn-up_hide');
        },
        addEventListener() {
          // при прокрутке содержимого страницы
          window.addEventListener('scroll', () => {
            // определяем величину прокрутки
            const scrollY = window.scrollY || document.documentElement.scrollTop;
            // если страница прокручена больше чем на 400px, то делаем кнопку видимой, иначе скрываем
            scrollY > 400 ? this.show() : this.hide();
          });
          // при нажатии на кнопку .btn-up
          document.querySelector('.btn-up').onclick = () => {
            // переместим в начало страницы
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: 'smooth'
            });
          }
        }
      }
      
      btnUp.addEventListener();
});
const popup = document.querySelector('.popup')
window.addEventListener('resize', (e) => {
    if (document.documentElement.clientWidth < 1200) {
        document.getElementById("about-bg__img").src = "./img/about-bg__lg.png";
        popup.style.display = "none";
    }
    else {
        document.getElementById("about-bg__img").src = "./img/about-img.png";
    };
    if (document.documentElement.clientWidth < 790) {
        popup.style.display = "none";
    }
    else {
        popup.style.display = "flex";
    };
});
// window.addEventListener('resize', (e) => {
//     if (document.documentElement.clientWidth < 790) {
//         popup.style.display = "none";
//     }
//     else {
//         popup.style.display = "flex";
//     };
// });
