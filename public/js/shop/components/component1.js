// main Menu Button
let mainMenuButton = document.getElementById('mainMenuButton');

// caret1 menu button
let caret1 = document.getElementById('caret1');
// submenu1 nav bar
let submenu1 = document.getElementById('submenu1');

// action - open nav bar & hide main menu button
mainMenuButton.addEventListener('click', function(){
    TweenMax.to('#menu', 1, {left: 0, backgroundColor: '#111111'});
    mainMenuButton.classList.toggle('hidden');
})
// action - close nav bar & show main menu button
let mainMenuExitButtonHook = document.getElementById('exitMenuButton');
mainMenuExitButtonHook.addEventListener('click', function(){
    TweenMax.to('#menu', 1, {left: '-100%', backgroundColor: '#fff' });
    mainMenuButton.classList.toggle('hidden');
    submenu1.classList.add('hidden');
});



// action - open & close sub menu
caret1.addEventListener('click', function(){
    submenu1.classList.toggle('hidden');
});

