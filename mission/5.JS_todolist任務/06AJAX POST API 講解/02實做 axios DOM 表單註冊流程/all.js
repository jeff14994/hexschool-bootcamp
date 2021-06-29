const urlSignup = 'https://hexschool-tutorial.herokuapp.com/api/signup';
const urlSignin = 'https://hexschool-tutorial.herokuapp.com/api/signin'
const btnSignup = document.querySelector('.signup');
const account = document.querySelector('.account');
const password = document.querySelector('.password');
const btnSignin = document.querySelector('.signinBtn');
const signinAccount = document.querySelector('.signinAccount');
const signinPassword = document.querySelector('.signinPassword');
// 測試資料
let obj = {
    email: 'gg1233@gmail.com',
    password: 'gg12',
}
function signup(obj) {
    // Signup
    axios.post(urlSignup, obj)
    .then((res) => {
        // console.log(res.data);
        if (res.data != "帳號註冊成功") {
            // 跳註冊失敗 alert
            alert(res.data.message);
            return;
        };
        // 跳註冊成功 alert
        alert(res.data.message);
    })
    .catch((err) => {
        console.log(err.data);
        // 跳 alert
        alert(err.data.message);
    })
};
function signin() {
    // Signin
    axios.post(urlSignin, obj)
    .then((res) => {
        // console.log(res.data);
        if (res.data != "帳號註冊成功") {
            // 跳註冊失敗 alert
            alert(res.data.message);
            return;
        };
    })
    .catch((err) => {
        console.log(err.data);
    })
};

// 按註冊按鈕
function sendSignup() {
    let userData = {};
        // 抓使用者輸入
        // 輸入不可為空值
        if (!account.value || !password.value) {
            alert('輸入不可為空！');
            return;
        }
        // 儲存輸入
        userData['email'] = account.value;
        userData['password'] = password.value;
        console.log(userData);
        // 發 signup request
        signup(userData);
        // 清空使用者欄位
        account.value = '';
        password.value = '';
}
// 按登入按鈕
function sendSignin() {
    let userData = {};
        // 抓使用者輸入
        // 輸入不可為空值
        if (!signinAccount.value || !signinPassword.value) {
            alert('輸入不可為空！');
            return;
        }
        // 儲存輸入
        userData['email'] = signinAccount.value;
        userData['password'] = signinPassword.value;
        console.log(userData);
        // 發 signup request
        signin(userData);
        // 清空使用者欄位
        signinAccount.value = '';
        signinPassword.value = '';
}
// 監聽觸發事件
btnSignup.addEventListener('click', (e) => {
    sendSignup();
})
btnSignin.addEventListener('click', (e) => [
    sendSignin()
])