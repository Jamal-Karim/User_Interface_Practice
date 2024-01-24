
const dropDown1 = document.querySelector(".text1");
const dropDown2 = document.querySelector(".text2");

const dropDown1Text = document.querySelector('.meal');
const dropDown2Text = document.querySelector('.sport');

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

dropDownOptions1.querySelectorAll('li').forEach(element => {
    element.addEventListener('click', event => {
        console.log(event.target.textContent);

        dropDown1Text.textContent = event.target.textContent;
        dropDownOptions1.classList.remove('show');
        menu1Flag = false;
    })
})

dropDownOptions2.querySelectorAll('li').forEach(element => {
    element.addEventListener('click', event => {
        console.log(event.target.textContent);

        dropDown2Text.textContent = event.target.textContent;
        dropDownOptions2.classList.remove('show');
        menu2Flag = false;
    })
})