const list = document.querySelector('.list');
let data = [
    {
        'content': '代辦事項',
    },
    {
        'content': '今天記得刷牙',
    }
];
function renderData() {
    
    let str =''
    data.forEach((item) => {
        str += `<li>${item.content}<input type="button" class="delete" value="刪除代辦"></li>`
    });

    console.log(str);
    list.innerHTML = str;
}
renderData();
