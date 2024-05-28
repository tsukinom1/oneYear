

// document.body.classList.add('body-scroll-lock');

// const registerForm = document.getElementById('registerForm');
// const nameInput = document.getElementById('name');
// const passwordInput = document.getElementById('password');
// const closeButton = document.getElementById('close');
// const formButton = document.getElementById('formButton');
// const content = document.getElementById('content');
//
//
//
//
// closeButton.onclick = function () {
//     registerForm.style.display = 'none'
//     document.body.classList.remove('body-scroll-lock');
// }
//
//
// formButton.onclick = function (e) {
//     e.preventDefault();
//     if(nameInput.value === 'miss D' && passwordInput.value === 'jarqynym') {
//         alert('Welcome, my kotik <3');
//         registerForm.style.display = 'none'
//         document.body.classList.remove('body-scroll-lock');
//         content.classList.remove('none')
//     } else {
//         alert('OPS, incorrect answer');
//     }
// };



const memoryOneButton = document.getElementById('memoryOneButton');
const memoryOneDescription = document.getElementById('memoryOneDescription');

memoryOneButton.addEventListener('click', (e) => {
    e.preventDefault();
    memoryOneDescription.classList.toggle('none');
});


const memoryTwoButton = document.getElementById('memoryTwoButton');
const memoryTwoDescription = document.getElementById('memoryTwoDescription');

memoryTwoButton.addEventListener('click', (e) => {
    e.preventDefault();
    memoryTwoDescription.classList.toggle('none');
});



const memoryThreeButton = document.getElementById('memoryThreeButton');
const memoryThreeDescription = document.getElementById('memoryThreeDescription');

memoryThreeButton.addEventListener('click', (e) => {
    e.preventDefault();
    memoryThreeDescription.classList.toggle('none');
});

const memoryFourButton = document.getElementById('memoryFourButton');
const memoryFourDescription = document.getElementById('memoryFourDescription');

memoryFourButton.addEventListener('click', (e) => {
    e.preventDefault();
    memoryFourDescription.classList.toggle('none');
});

const memoryFiveButton = document.getElementById('memoryFiveButton');
const memoryFiveDescription = document.getElementById('memoryFiveDescription');
memoryFiveButton.addEventListener('click', (e) => {
    e.preventDefault();
    memoryFiveDescription.classList.toggle('none');
});
const memorySixButton = document.getElementById('memorySixButton');
const memorySixDescription = document.getElementById('memorySixDescription');

memorySixButton.addEventListener('click', (e) => {
    e.preventDefault();
    memorySixDescription.classList.toggle('none');
});

const memorySevenButton = document.getElementById('memorySevenButton');
const memorySevenDescription = document.getElementById('memorySevenDescription');
memorySevenButton.addEventListener('click', (e) => {
    e.preventDefault();
    memorySevenDescription.classList.toggle('none');
});


const memoryEightButton = document.getElementById('memoryEightButton');
const memoryEightDescription = document.getElementById('memoryEightDescription');

memoryEightButton.addEventListener('click', (e) => {
    e.preventDefault();
    memoryEightDescription.classList.toggle('none');
});


const swiper = new Swiper('.swiper', {
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});



