const swiper = new Swiper('.swiper', {
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


// document.body.classList.add('body-scroll-lock');

const registerForm = document.getElementById('registerForm');
const nameInput = document.getElementById('name');
const passwordInput = document.getElementById('password');
const closeButton = document.getElementById('close');
const formButton = document.getElementById('formButton');
const content = document.getElementById('content');




closeButton.onclick = function () {
    registerForm.style.display = 'none'
    document.body.classList.remove('body-scroll-lock');
}


formButton.onclick = function (e) {
    e.preventDefault();
    if(nameInput.value === 'miss D' && passwordInput.value === 'jarqynym') {
        alert('Welcome, my kotik <3');
        registerForm.style.display = 'none'
        document.body.classList.remove('body-scroll-lock');
        content.classList.remove('none')
    } else {
        alert('OPS, incorrect answer');
    }
};

const links = document.querySelectorAll('a[href*="#"]');
for (let link of links) {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const blockId = link.getAttribute('href').substring(1); // Убираем символ #
        const targetElement = document.getElementById(blockId); // Ищем элемент по ID
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
}





