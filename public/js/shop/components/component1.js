// menu main button
let mainMenuButton = document.createElement('div');
mainMenuButton.innerHTML = `<i id="mainMenuButton" class="fas fa-bars"></i>`;
// menu exit button
let exitMenuButton = document.createElement('div');
exitMenuButton.classList.add('menu__exitButton');
exitMenuButton.innerHTML = `<i id="exitMenuButton" class="fas fa-times"></i>`;
// menu component
let mainMenu = document.createElement('div');
mainMenu.classList.add('menu');
mainMenu.id = 'menu';
// menu list
let mainMenuList = document.createElement('ul');
mainMenuList.classList.add('menu__list');
// menu item
let mainMenuItem = document.createElement('li');
mainMenuItem.classList.add('menu__list__item');
//menu link
let mainMenuLink = document.createElement('a');
mainMenuLink.classList.add('menu__list__item__link');
mainMenuLink.classList.add('primary');
mainMenuLink.innerHTML = `HOME`;

// add menu list with items to menu componnent
mainMenu.appendChild(mainMenuList.appendChild(mainMenuItem.appendChild(mainMenuLink)));
// add exit button to menu component
mainMenu.appendChild(exitMenuButton);
