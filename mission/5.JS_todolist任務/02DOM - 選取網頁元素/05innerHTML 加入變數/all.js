// ul .list
const list = document.querySelector('.list');
console.log(list);

let myLink = "https://google.com.tw"
// console.log('gg');
let content = `<li><a href=${myLink}>Omg Link</a></li>`;
list.innerHTML = content;