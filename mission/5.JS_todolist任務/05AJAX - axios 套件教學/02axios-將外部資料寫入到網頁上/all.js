const url = 'https://hexschool.github.io/ajaxHomework/data.json';

axios.get(url)
  .then(function (response) {
    let ary = response.data;
    console.log(ary[0].name);
    const title = document.querySelector('.title');
    title.textContent = ary[0].name;
  });