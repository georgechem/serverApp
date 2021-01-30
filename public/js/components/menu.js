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

let toggleClass = function(menuButton, menuObject){
    //console.log(menuClose);
    //menuButton.classList.toggle('hidden');

    let opacity = 1.0;
    animateOpacity(menuButton, opacity, menuObject);


    //menuObject.classList.toggle('hidden');

}
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
        opacity -= 0.05;

    }, 30);


}
