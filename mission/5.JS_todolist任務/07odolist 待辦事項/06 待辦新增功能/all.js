const list = document.querySelector('.list');
const txt = document.querySelector('.txt');
const save = document.querySelector('.save');
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
    // console.log(str);
    list.innerHTML = str;
}
save.addEventListener('click', (e) => {
    let value = txt.value;
    // 若為空值，跳警告
    if (!value) {
        alert('請輸入內容！')
        return;
    }
    let obj = {};
    obj.content = value;
    data.push(obj);
    // console.log(data);
    renderData();
    
})
renderData();

