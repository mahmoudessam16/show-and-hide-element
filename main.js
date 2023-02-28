let paragraph = document.querySelector('p');
let btn = document.querySelector('button');

let cssObj = window.getComputedStyle(paragraph, null);
cssObj[103];

btn.addEventListener('click', () => {
    paragraph.classList.toggle(`${cssObj[103]}`);
})
