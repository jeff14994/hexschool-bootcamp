let obj = {
    email: 'gg123@gmail.com',
    password: 'gg12',
}
urlSignup = 'https://hexschool-tutorial.herokuapp.com/api/signup';
urlSignin = 'https://hexschool-tutorial.herokuapp.com/api/signin'
function signup() {
    // Signup
    axios.post(urlSignup, obj)
    .then((res) => {
        console.log(res.data);
    })
    .catch((err) => {
        console.log(err.data);
    })
};
function signin() {
    // Signin
    axios.post(urlSignin, obj)
    .then((res) => {
        console.log(res.data);
    })
    .catch((err) => {
        console.log(err.data);
    })
};

// signup();
// signin();