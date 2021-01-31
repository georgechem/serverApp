let divElement = document.createElement('div');
divElement.classList.add('content__box');

let windowDivMain = document.createElement('div');
windowDivMain.id = 'windowMain';
windowDivMain.classList.add('content__box--button');
windowDivMain.innerHTML = `<i id="windowClose" class="fas fa-sign-out-alt"></i>`;

let windowDivContent = document.createElement('div');
windowDivContent.id = 'windowContent';
windowDivContent.classList.add('content__box--content');

let primeNumbers = document.getElementById('a_prime_numbers');
let oAuth = document.getElementById('o_auth');

window.addEventListener('DOMContentLoaded', () => {

    primeNumbers.addEventListener('click', prime_numbers);
    oAuth.addEventListener('click', o_auth);


});

let prime_numbers = function(primeNumbersEvent){
    primeNumbersEvent.preventDefault();
    let content = `<div class="content__box--content">When you close this window will be redirected to given address:</div>`;
    displayContent(this, content);
    let windowClose = document.getElementById('windowClose');
    windowClose.setAttribute('href',this.href);
    windowClose.addEventListener('click', closeWindow);

}
let o_auth = function(oAuthEvent){
    oAuthEvent.preventDefault();
    let content = `<div class="content__box--content">When you close this window will be redirected to given address:</div>`;
    displayContent(this, content);
    let windowClose = document.getElementById('windowClose');
    windowClose.setAttribute('href', this.href);
    windowClose.addEventListener('click', closeWindow);
}
let closeWindow = function(){
    let contentHook = document.getElementById('content');
    contentHook.removeChild(divElement);
    self.location.href = this.getAttribute('href');
    console.log(this.getAttribute('href'));

}

let displayContent = function(element, content){
    let contentHook = document.getElementById('content');
    windowDivContent.innerHTML = `${content} ${element.href}`;

    divElement.appendChild(windowDivMain);
    divElement.appendChild(windowDivContent);
    contentHook.appendChild(divElement);

}
