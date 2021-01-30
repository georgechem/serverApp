window.addEventListener('DOMContentLoaded', (event) => {
let  menuButton = document.getElementById('menuButton');
let menuClose = document.getElementById('menuClose');

let menuObject = document.getElementById('menuObject');

// listen on menu Button
menuButton.addEventListener('click', function(){
    toggleClass(this, menuObject);
});
// listen on menu Close
    menuClose.addEventListener('click', function(){
        toggleClass(menuObject, menuButton);
    });


});
// responsible for
let toggleClass = function(menuButton,menuObject){

    let opacity = 1.0;
    animateOpacity(menuButton, opacity, menuObject);

}
// responsible for animating opacity property
let animateOpacity = function(menuButton, opacity, menuObject){

    let id = setInterval(function(){
        if(opacity < 0){
            clearInterval(id);
            menuButton.classList.toggle('hidden');
            menuObject.classList.toggle('hidden');

        }
        menuButton.style.opacity = opacity;
        if(opacity < 0){
            menuButton.style.opacity = 1;
        }
        opacity -= 0.03;

    }, 15);


}
