
window.addEventListener('DOMContentLoaded', (event) => {

    let id = setInterval(frame, 25);
    let rot = 0;
    let factor = 1;
    function frame(el){
        let homepage_redo1 = document.getElementById('homepage_redo1');
        console.log(rot);
        rot = rot + (2*factor);
        homepage_redo1.style.transform = `rotate(${rot}deg)`;
        homepage_redo1.style.color = `rgb(${rot},${rot/2},${rot/2})`;
        homepage_redo1.style.fontSize = `${rot/3}px`;
        if (rot > 355 || rot < 0){
            //rot = 0;
            (factor === 1) ? factor = -1 : factor = 1;
            //clearInterval(id);
        }
    }
});
