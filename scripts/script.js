document.getElementById('burger').onclick = function(){
    document.getElementsByClassName('menu-container')[0].style.display = 'block';

    document.getElementsByClassName('menu-container')[0].onclick = function(){
        document.getElementsByClassName('menu-container')[0].style.display = 'none';
    };
    document.getElementsByClassName('menu-item')[0].onclick = function(){
        document.getElementsByClassName('menu-container')[0].style.display = 'none';
    };
}

document.getElementById('close').onclick = function(){
    document.getElementsByClassName('menu-container')[0].style.display = 'none';
}

