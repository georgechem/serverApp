let mainMenuButton = document.createElement('div');
mainMenuButton.innerHTML = `<i id="mainMenuButton" class="fas fa-bars"></i>`;

let mainMenu = document.createElement('div');
mainMenu.classList.add('menu');
mainMenu.id = 'menu';

let mainMenuList = document.createElement('ul');
mainMenuList.classList.add('menu__list');

let mainMenuItem = document.createElement('li');
mainMenuItem.classList.add('menu__list__item');

let mainMenuLink = document.createElement('a');
mainMenuLink.classList.add('menu__list__item__link');
mainMenuLink.classList.add('primary');
mainMenuLink.innerHTML = `HOME`;

mainMenu.appendChild(mainMenuList.appendChild(mainMenuItem.appendChild(mainMenuLink)));
