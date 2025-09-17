document.getElementById('burger').onclick = function(){
    document.getElementsByClassName('menu-container')[0].style.display = 'block';
}

document.getElementById('close').onclick = function(){
    document.getElementsByClassName('menu-container')[0].style.display = 'none';
}