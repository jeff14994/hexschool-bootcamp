const btn = document.querySelector('.btn')
const title = document.querySelector('h1');
let total = 0;
btn.addEventListener('click', (event) => {
    console.log(event.clientX);
    total += 1;
    title.textContent = total;
});