const btn = document.querySelector('.btn');
let timeId;
let i = 0;

btn.addEventListener('click', () => {

    // timeId = setTimeout(example, 3000, 'hello');
    timeId = setInterval(example, 2000, 'hello');

})

function example(text) {
    if (i == 5) {
        clearInterval(timeId);
    }
    console.log(`${text}`);
    i++;
}