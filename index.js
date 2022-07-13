
const animItems = document.querySelectorAll('._anim-items');

if(animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll(params) {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_active');
            } else {
                if (!animItem.classList.contains('_anim-no-hide')) {
                    animItem.classList.remove('_active');
                }
            }
        }
    }
    function offset (el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return {top: rect.top + scrollTop, left: rect.left + screenLeft}
    }

    setTimeout(()=>{
        animOnScroll();
    }, 300)
}

// переключение слайдера

const navigation = document.querySelector('.navigation');
let arrowActive = document.querySelector('._active__arrow');
let circleActive = document.querySelector('._active__circle');


navigation.addEventListener('click', ({target}) => {
    if (!target.closest('.arrow')) {
        return;
    }
    const navContainer = target.closest('.navigation__container');
    const arrowClick = navContainer.lastElementChild.firstElementChild;
    const circleClick = navContainer.firstElementChild;

    circleActive.classList.remove("_active__circle", "_life", "_active");
    arrowActive.classList.remove("_active__arrow");

    circleClick.classList.add("_active__circle", "_life");
    arrowClick.classList.add("_active__arrow");

    circleActive = circleClick;
    arrowActive = arrowClick;
});

// modal window

// const modalWindow = document.querySelector('.modal');

// document.querySelector('footer').addEventListener('click', ({target}) => {
//     if (!target.classList.contains('footer__btn')) {
//         return;
//     }
//     modalWindow.style.display = 'block';
// });

// document.querySelector('.modal').addEventListener('click', ({target}) => {
//     if (!target.classList.contains('modal__close')) {
//         return;
//     }
//     console.log(target);
//     modalWindow.style.display = 'none';
// });