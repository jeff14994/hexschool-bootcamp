// 回傳陣列
const myLinks = document.querySelectorAll('a');
// 設定 href 屬性
// 設定 class 屬性
// myLinks[0].setAttribute('href', 'https://yahoo.com.tw');
// myLinks[0].setAttribute('class', 'red');
// myLinks[1].setAttribute('href', 'https://yahoo.com.tw');
// myLinks[1].setAttribute('class', 'red');
myLinks.forEach(element => {
    element.setAttribute('href', 'https://yahoo.com.tw');
    element.setAttribute('class', 'red');
})
console.log(myLinks);
console.log(typeof myLinks);