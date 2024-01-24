
const dropDown1 = document.querySelector(".text1");
const dropDown2 = document.querySelector(".text2");

const dropDownOptions1 = document.querySelector('.mealOptions');
const dropDownOptions2 = document.querySelector('.sportOptions');

let menu1Flag = false;
let menu2Flag = false;

dropDown1.addEventListener('click', () => {
    console.log('menu clicked');
    if(!menu1Flag){
        dropDownOptions1.classList.add('show');
        menu1Flag = true;
    } else {
        dropDownOptions1.classList.remove('show');
        menu1Flag = false;
    }
});

dropDown2.addEventListener('click', () => {
    console.log('menu clicked');
    if(!menu2Flag){
        dropDownOptions2.classList.add('show');
        menu2Flag = true;
    } else {
        dropDownOptions2.classList.remove('show');
        menu2Flag = false;
    }
});
