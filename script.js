
const btn = document.querySelector('.btn');

function boxAnimationExample() {

    const element = document.querySelector('.box');
    let pos = 0;
    const frameIntervalId = setInterval(frame, 10)

    function frame() {
        if (pos == 300) {
            clearInterval(frameIntervalId);
        } else {
            pos++;
            element.style.top = pos + "px";
            element.style.left = pos + "px";
        }
    }

}
btn.addEventListener('click', boxAnimationExample);

