const btn = document.querySelector('.btn')
const title = document.querySelector('h1');
let total = 0;
btn.addEventListener('click', (event) => {
    // 確定 queryselector 的標籤
    console.log(btn.nodeName);
    console.log(title.nodeName);
    total += 1;
    title.textContent = total;
});