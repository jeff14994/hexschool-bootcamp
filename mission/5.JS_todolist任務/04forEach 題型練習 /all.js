let data = [
    {
        Charge:"免費",
        name:"廖洧杰充電站"
    }, 
    {
        Charge: "投幣式",
        name: "小花充電站"
    }, 
    {
        Charge: "投幣式",
        name: "小明充電站"
    }, 
    {
        Charge: "投幣式",
        name: "小天充電站"
    }
];
// DOM 拉出全域變數進行管理
const list = document.querySelector('.list');
// 網頁初始化狀態
function init() {
    let str = '';
    data.forEach((item, index) => {
        let content = `<li>${item.name}, ${item.Charge}</li>`;
        str += content;
        // console.log(str);
    })
    // 取代原本的 html tag
    list.innerHTML = str;
}
// 監聽設計 - 篩選器邏輯 - 免費與投幣式事件
const stationFilter = document.querySelector('.filter');
// console.log(stationFilter);
stationFilter.addEventListener('click', (e) => {
    // console.log(e.target.value);
    // 你點擊按鈕所對應的值
    value = e.target.value;
    //  錯誤處理
    if (value === undefined) {
        console.log('你點擊到空的地方');
        return;
    }
    // console.log(target);
    // 事件監聽搭配 if 流程判斷
    // 點擊免費，即顯示免費資料
    // 點擊投幣，即顯示投幣
    let str = '';
    data.forEach((item, index) => {
        content = `<li>${item.name}, ${item.Charge}</li>`
        // 顯示全部
        if (value == '全部') {
            str += content;
        }
        // 過濾內容 - 顯示部分內容（按照免費、投幣）
        isExist = item.Charge === value;
        if (isExist) {
            str += content;
        }
    })
    list.innerHTML = str;
})

// 資料新增的邏輯
const stationName = document.querySelector('.stationName');
const stationCharge = document.querySelector('.stationCharge');
const btn = document.querySelector('.btn');
// console.log(stationName, stationCharge, btn);
btn.addEventListener('click', (e) => {
    // console.log(e);
    // 取出輸入的內容
    let stationNameValue = stationName.value;
    let stationChargeValue = stationCharge.value;
    // 儲存新增資料
    let obj = {};
    obj.name = stationNameValue;
    obj.Charge = stationChargeValue;
    data.push(obj);
    init();
    // 清空輸入框
    stationName.value = '';
    stationCharge.value = '免費';
});

init();

