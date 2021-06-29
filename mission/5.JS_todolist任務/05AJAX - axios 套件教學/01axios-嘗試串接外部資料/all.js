axios.get('https://hexschool.github.io/ajaxHomework/data.json')
  .then(function (response) {
    console.log(response);
    console.log(response.data);
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);
  });