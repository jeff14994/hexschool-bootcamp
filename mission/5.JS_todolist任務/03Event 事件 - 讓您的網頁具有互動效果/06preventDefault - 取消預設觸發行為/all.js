const myLink = document.querySelector('a');

myLink.addEventListener('click', (e) => {
    // 取消 a 標籤功能(不會跳轉網頁)
    e.preventDefault();
    console.log('被點擊到！');
    document.querySelector('h1').textContent = 'Omg!';
})