let mainMenuButtonHook = document.getElementById('nav');
mainMenuButtonHook.appendChild(mainMenuButton);

mainMenuButtonHook.appendChild(mainMenu);

mainMenuButton.addEventListener('click', function(){
    TweenMax.to('#menu', 1, {left: 0, backgroundColor: '#111111'});
    mainMenuButton.classList.toggle('hidden');
})




