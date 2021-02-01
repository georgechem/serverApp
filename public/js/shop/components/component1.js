// Functions
let animateOpacity = function(){
    TweenMax.to(content, 1.5, {opacity: 1, onStart: toggleHidden});
    this.removeEventListener('click', animateOpacity);
}
let toggleHidden = function() {
    content.classList.toggle('hidden');
}



// main Menu Button
let mainMenuButton = document.getElementById('mainMenuButton');

// caret1 menu button
let caret1 = document.getElementById('caret1');
// submenu1 nav bar
let submenu1 = document.getElementById('submenu1');
let submenu2 = document.getElementById('submenu2');

// links
let link1 = document.getElementById('link1_1');
let link2 = document.getElementById('link1_2');

// content
let content = document.getElementById('content');

// action - open nav bar & hide main menu button
mainMenuButton.addEventListener('click', function(){
    TweenMax.to('#menu', 1, {left: 0, backgroundColor: '#111111'});
    mainMenuButton.classList.toggle('hidden');

    link1.addEventListener('click', animateOpacity);
});
// action - main button rotation
mainMenuButton.addEventListener('mouseenter', function(){

    TweenMax.to(mainMenuButton,.5,{rotation: 90});


});
// action - main button rotation back
mainMenuButton.addEventListener('mouseleave', function(){

    TweenMax.to(mainMenuButton,.5,{rotation: -90});

});
// action - close nav bar & show main menu button
let mainMenuExitButtonHook = document.getElementById('exitMenuButton');
mainMenuExitButtonHook.addEventListener('click', function(){
    TweenMax.to('#menu', 1, {left: '-100%', backgroundColor: '#fff' });
    mainMenuButton.classList.toggle('hidden');
    submenu1.classList.add('hidden');
    submenu2.classList.add('hidden');
    TweenMax.to(content, 1, {opacity: 0, onComplete: toggleHidden});

});

// action - open & close sub menu
caret1.addEventListener('click', function(){
    submenu1.classList.toggle('hidden');
    TweenMax.from(link1, 1, {fontSize: '1.3rem'});
    TweenMax.from(link2, 1, {fontSize: '1.3rem'});
    submenu2.classList.toggle('hidden');
});

link1.addEventListener('click', animateOpacity);



