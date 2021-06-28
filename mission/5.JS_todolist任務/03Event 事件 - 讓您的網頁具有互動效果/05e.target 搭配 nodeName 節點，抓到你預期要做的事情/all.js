const btn = document.querySelector('.btn')
btn.addEventListener('click', (e) => {
    console.log(e.target.nodeName);;
});
const list = document.querySelector('.list')
list.addEventListener('click', (e) => {
    console.log(e.target.nodeName);
    target = e.target.nodeName;
    if (target === "INPUT") {
        console.log('你目前按到按鈕！');
    } else {
        console.log('按到標題');
    }
})