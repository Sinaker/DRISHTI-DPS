const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorAll('.menu li');
    const selected = dropdown.querySelector('.selected');


    dropdown.addEventListener('click', (e) => {
        select.classList.toggle('select-clicked');
        caret.classList.toggle('caret-rotate');
        menu.classList.toggle('menu-open');
    });

    options.forEach(option => {
        option.addEventListener('click', () => {
            selected.innerText = option.innerText;
            e.stopPropagation();
            select.classList.remove('select-clicked');
            caret.classList.remove('caret-rotate');
            menu.classList.remove('menu-open');
            options.forEach(option => {
                option.classList.remove('active');
            });
            option.classList.add('active');

        });
    });
});
let container=document.querySelector('.container')
let output = document.querySelector('.output');
window.addEventListener('load', () => {
    console.log("Reloaded")
})

let submit = document.querySelector('.submit');
var help = document.querySelector('.container-main');
const input = document.getElementById('prompt');

submit.addEventListener('click', Enter)
function Enter(){
    help.parentNode.removeChild(help);
    output.innerHTML = input.value;
    let item=document.createElement("div");
    item.style.marginTop="10px";
    item.style.background="#3a393d";
    output.append(item);
    item.innerHTML="Result Div: ";
    item.style.cursor="auto"
    input.value="";
}


input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        Enter();
    }
  });