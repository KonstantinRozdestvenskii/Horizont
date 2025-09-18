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

function priceToNumber (price) {
    let pricePoint = price.replace(',','.');
    return parseFloat(pricePoint);
}

function priceToString(price) {
    // Преобразуем число в строку с максимальной точностью
    const num = parseFloat(price);

    // Определяем количество цифр в целой части
    const integerPart = Math.floor(Math.abs(num));
    const integerDigits = integerPart.toString().length;

    if (integerDigits >= 7) {
        // Если целая часть >= 7 цифр - отображаем без дробной части
        return integerPart.toString();
    } else if (integerDigits === 6) {
        // Если целая часть 6 цифр - отображаем без дробной части (итого 6 знаков)
        return integerPart.toString();
    } else {
        // Для меньшего количества цифр добавляем дробную часть
        const neededDecimalDigits = 6 - integerDigits;
        return num.toFixed(neededDecimalDigits).replace('.', ',');
    }
}


let currency_button = document.getElementById('currency-button');

currency_button.onclick = function(){

    let currency = currency_button.innerText;
    let prices = document.getElementsByClassName('product-prise');
    let currency_coeff = 1;

    switch (currency) {

        case '$':
            currency_coeff = 0.848;
            currency_button.innerText = '€';
            for (let i = 0; i < prices.length; i++) {
                let price = (prices[i].innerText).slice(1);
                price = parseFloat(priceToNumber(price).toFixed(3));
                let newPrise = priceToString(currency_coeff * price);
                prices[i].innerText = '€' + newPrise;
            }
            return;
        case '€':
            currency_coeff = 98.98;
            currency_button.innerText = '₽';
            for (let i = 0; i < prices.length; i++) {
                let price = (prices[i].innerText).slice(1);
                price = parseFloat(priceToNumber(price).toFixed(3));
                let newPrise = priceToString(currency_coeff * price);
                prices[i].innerText = '₽' + newPrise;
            }
            return;
        case '₽':
            currency_coeff = 0.012;
            currency_button.innerText = '$';
            for (let i = 0; i < prices.length; i++) {
                let price = (prices[i].innerText).slice(1);
                price = parseFloat(priceToNumber(price).toFixed(3));
                let newPrise = priceToString(currency_coeff * price);
                prices[i].innerText = '$' + newPrise;
            }
            return;
        default:
            return;
    }
};

