
let mainMenuButton = document.getElementById('mainMenuButton');

mainMenuButton.addEventListener('click', function(){
    TweenMax.to('#menu', 1, {left: 0, backgroundColor: '#111111'});
    mainMenuButton.classList.toggle('hidden');
})

let mainMenuExitButtonHook = document.getElementById('exitMenuButton');
mainMenuExitButtonHook.addEventListener('click', function(){
    TweenMax.to('#menu', 1, {left: '-100%', backgroundColor: '#fff' });
    mainMenuButton.classList.toggle('hidden');
});


