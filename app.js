//Dropdown Menu

//Buttons for dropdown
const dropDown1 = document.querySelector(".text1");
const dropDown2 = document.querySelector(".text2");

//Texts inside dropdown
const dropDown1Text = document.querySelector('.meal');
const dropDown2Text = document.querySelector('.sport');

//List items in each dropdown
const dropDownOptions1 = document.querySelector('.mealOptions');
const dropDownOptions2 = document.querySelector('.sportOptions');

//Flags to check status of dropdown
let menu1Flag = false;
let menu2Flag = false;

//Check for flag then add or remove list elements
dropDown1.addEventListener('click', () => {
    if (!menu1Flag) {
        dropDownOptions1.classList.add('show');
        menu1Flag = true;
    } else {
        dropDownOptions1.classList.remove('show');
        menu1Flag = false;
    }
});

dropDown2.addEventListener('click', () => {
    console.log('menu clicked');
    if (!menu2Flag) {
        dropDownOptions2.classList.add('show');
        menu2Flag = true;
    } else {
        dropDownOptions2.classList.remove('show');
        menu2Flag = false;
    }
});

//Once list element clicked, switch it to that and remove dropdown
dropDownOptions1.querySelectorAll('li').forEach(element => {
    element.addEventListener('click', event => {
        dropDown1Text.textContent = event.target.textContent;
        dropDownOptions1.classList.remove('show');
        menu1Flag = false;
    });
});

dropDownOptions2.querySelectorAll('li').forEach(element => {
    element.addEventListener('click', event => {
        dropDown2Text.textContent = event.target.textContent;
        dropDownOptions2.classList.remove('show');
        menu2Flag = false;
    });
});

//Mobile Menu
const mobileMenuIcon = document.querySelector('.menuIcon');
const menuTab = document.querySelector('.menu');
const cancelBtn = document.querySelector('.cancel');

//Mobile Menu Switching
mobileMenuIcon.addEventListener('click', () => {
    menuTab.classList.add('slideOut');
});

cancelBtn.addEventListener('click', () => {
    menuTab.classList.remove('slideOut');
})