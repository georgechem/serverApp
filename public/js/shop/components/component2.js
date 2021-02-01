
/**
 * Elements read from DOM
 * @type {HTMLElement}
 */
// main Menu Button
let mainMenuButton = document.getElementById('mainMenuButton');
// menu component
let menu = document.getElementById('menu');
// menu - exit button
let mainMenuExitButton = document.getElementById('exitMenuButton');
// caret1 menu button
let caret1 = document.getElementById('caret1');
//----------------------------------------------------------------------------
// submenu1 nav bar
let submenu1 = document.getElementById('submenu1');
let submenu2 = document.getElementById('submenu2');

// links
let link1 = document.getElementById('link1_1');
let link2 = document.getElementById('link1_2');

// content
let content = document.getElementById('content');

// sections
let section1 = document.getElementById('section1');

/*
JS ACTIONS
 */
// open main menu
mainMenuButton.addEventListener('click', function(){
    TweenMax.to(menu, 1, {left:0, backgroundColor:'#111111'});
});
// close main menu
mainMenuExitButton.addEventListener('click', function(){
    /**
     * Perform reverse animations of all links
     * except clicked one
     */
    TweenMax.to(content, 1, {opacity: 0});
    TweenMax.to(section1, 1, {opacity: 0});
    // animate closing menu
    TweenMax.to(menu, 1, {left:'-100%', backgroundColor: '#dddddd'});
    // hide all submenus
    submenu1.classList.add('hidden');
    submenu2.classList.add('hidden');
    // clear all page from content
    content.classList.add('hidden');
    section1.classList.add('hidden');
});
// open/close sub menu
caret1.addEventListener('click', function(){
    // all links in submenu should be hidden
    submenu1.classList.toggle('hidden');
    submenu2.classList.toggle('hidden');
    // add extra animation to Fonts
    TweenMax.to(link1, 1, {fontSize: '2rem'});
    TweenMax.to(link2, 1, {fontSize: '2rem'});
});
// handle link1_1 from sub menu
link1.addEventListener('click', function(){
    // show content which relates to link
    content.classList.remove('hidden');
    /**
     * add extra animation to opacity
     * need to remember to add reversed action to evey
     * place where it will be hidden as content
     */
    TweenMax.to(content, 1, {opacity: 1});
    TweenMax.to(section1, 1, {opacity: 0});
    // close all submenus because user clicked
    submenu1.classList.toggle('hidden');
    submenu2.classList.toggle('hidden');
    // if any content not hidden hide it
    section1.classList.add('hidden');
});
// handle link1_2 from sub menu
link2.addEventListener('click', function(){
    /**
     * Perform reverse animations of all links
     * except clicked one
     */
    TweenMax.to(content, 1, {opacity: 0});
    // Added extra animation for opacity for this link(section1)
    TweenMax.to(section1, 1, {opacity: 1});
    // show section 1 which relates to clicked link
    section1.classList.remove('hidden');
    // close all submenus because user clicked
    submenu1.classList.toggle('hidden');
    submenu2.classList.toggle('hidden');
    // if any content not hidden hide it
    content.classList.add('hidden');

});
