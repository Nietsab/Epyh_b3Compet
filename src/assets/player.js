let body = document.querySelector('body');
let img = document.querySelector('.content');
let player = document.querySelector('.player');



function toggle() {
    player.style.display='flex';
    img.style.display='none'
}

function displayOff() {
    player.style.display='none'
    img.style.display='initial'
}