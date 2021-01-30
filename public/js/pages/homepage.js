
window.addEventListener('DOMContentLoaded', (event) => {

    let id = setInterval(frame, 25);
    let finish = -254;
    let rot = 0;
    let coffee = document.getElementById('coffee');
    let mug02 = document.createElement('i');
    coffee.appendChild(mug02);

    mug02.setAttribute('class', 'fas fa-mug-hot')
    mug02.setAttribute('id', 'mug02');

    function frame(el){

        rot = rot + 3;
        mug02.style.color = '#ddd';
        mug02.style.fontsize = '35rem';
        mug02.style.marginLeft = '160px';
        mug02.style.transform = `rotate(${finish+rot}deg)`;
        mug02.style.color = `rgb(${255-rot+32},${255-rot+32},${255-rot+32})`;

        let mug_extra = document.createElement('i');
        if (rot % 4 === 0){
            coffee.appendChild(mug_extra);
        }

        mug_extra.setAttribute('class', 'fas fa-mug-hot');
        mug_extra.setAttribute('id', 'mug03');
        mug_extra.style.transform = `rotate(${finish+rot}deg)`;
        mug_extra.style.color = `rgb(${rot},${rot},${rot})`;

        //homepage_redo1.style.fontSize = `${rot/4}px`;
        //mug01.style.marginLeft = `30px`;

        //homepage_redo1.style.marginTop = `${rot}px`;
        if (rot > 254 || rot < 0){
            //rot = 0;
            //(factor === 1) ? factor = -1 : factor = 1;
            clearInterval(id);

        }
    }
});
