const btn = document.querySelector('.btn');
const title = document.querySelector('h1');

// 監聽事件: 觸發事件， callback function
let total = 0
btn.addEventListener('click', function(e){
    // console.log(e);
    // MouseEvent
    // console.log(typeof e);
    console.log('被點擊了！');
    total += 1;
    title.textContent = '按鈕已被點擊！' + '點擊次數： ' + total;
})