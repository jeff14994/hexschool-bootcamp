const title = document.querySelector('.title');

title.addEventListener('click', (e) => {
    let target = e.target;
    let nodeName = target.nodeName;
    // console.log(typeof target);
    // console.log(target.textContent);
    // console.log(target.nodeName);
    // console.log(target.getAttribute('class'));
    // if (nodeName !== 'INPUT') {
    //     return;
    // }
    // console.log('你有正確點到 input');
    // console.log(target.getAttribute('value'));
    // 取出 target 的 class
    if (target.getAttribute('class') == 'view') {
        console.log(target.getAttribute('value'));
    }
})