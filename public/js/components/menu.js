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
    menuButton.classList.toggle('hidden');
    menuObject.classList.toggle('hidden');

}
