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
    // 使用 index 編號
    // data-num
    data.forEach((item, index) => {
        str += `<li>${item.content}<input type="button" class="delete" data-num="${index}"value="刪除代辦"></li>`
    });
    // console.log(str);
    list.innerHTML = str;
}
// 新增代辦功能
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
// 刪除代辦功能
list.addEventListener('click', (e) => {
    let target = e.target
    if (target.getAttribute('class') !== 'delete') {
        alert('你目前不是點擊到按鈕');
    return;
    }
    //  取出要刪除的資料
    let num = target.getAttribute('data-num');
    console.log(num);
    // 刪除資料
    data.splice(num, 1);
    // 重新刷新資料
    renderData();
 })
renderData();

