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

let productButtons = document.getElementsByClassName('product-btn');

for (let i = 0; i < productButtons.length; i++) {
    productButtons[i].onclick = function(e){
        let product = e.target.parentElement.parentElement;
        let productTitle = product.querySelector('.product-title').innerText;
        console.log(productTitle);
        document.getElementById('description').innerText = productTitle;
    };
}

