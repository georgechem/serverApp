function first(counter){
    for (let i = 2; i < counter; i++) {

        let state = counter % i;
        if(state === 0){
            return true;
        }

    }
    return true;

}



window.addEventListener('DOMContentLoaded', (event) => {

    let buttonList = [];
    let generate_bar = setInterval(make_bar, 100);
    let equalizer = document.getElementById('equalizer');
    let counter = 1;
    let factor = 5;
    let red = 255;
    let green = 255;
    let blue = 255;
    function make_bar(){

        counter++;
        red -= factor;
        green -= factor;
        blue -= factor;
        let el = document.createElement('div');
        el.classList.add('box1')
        el.innerText = counter;
        el.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        el. style.color = `rgb(${255-red}, ${255-green}, ${200})`;
        el.style.width = '100px';
        //el.style.backgroundColor = 'white';
        buttonList.push(el);
        (red > 0 && red < 255) ? red : factor = - factor;
        (green > 0) ? green : factor = - factor;
        (blue > 0) ? blue : factor = - factor;


        if (first(counter)){
            equalizer.appendChild(el);
        }

        if (counter > 50000){
            clearInterval(generate_bar);
        }

    }



});
