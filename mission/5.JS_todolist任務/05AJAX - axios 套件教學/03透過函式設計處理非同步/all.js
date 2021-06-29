const url = 'https://hexschool.github.io/ajaxHomework/data.json';

let ary = [];
axios.get(url)
  .then(function (response) {
  console.log('資料回傳了');
  ary = response.data;
  renderData();
  });

function renderData() {
  console.log(ary);
  const title = document.querySelector('.title');
  title.textContent = ary[0].name;
}
console.log(ary);