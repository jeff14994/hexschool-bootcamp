const list = document.querySelector('.box');
list.addEventListener('click', (e) => {
    let target = e.target;
    let nodeName = target.nodeName;
    // console.log(nodeName);
    let class_Attribute = target.getAttribute('class');
    let value = target.getAttribute('value');
    // 使用 class 進行過濾
    // 如果 class 等於 view 再觸發行為
    if (class_Attribute=== "view") {
        console.log(value);
    }
})