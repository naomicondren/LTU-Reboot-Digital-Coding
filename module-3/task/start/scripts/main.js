console.log('Hello');

// Single line comment 

/* 

Multiple line comment 

*/ 

var productName = 'Tinned Beans';
let price = '0.40';
const quantity = 1;
var inStock = true;
let discountAmount = 0;



function showProductName(){
    //code goes here
    console.log(productName)
}

showProductName();

function totalPrice(productPrice,productQuantity){
    console.log(productPrice * productQuantity);
}

totalPrice(10,5);

// function checkAvailability(productInStock){
// console.log(productInStock);
// }

// checkAvailability(productInStock){
// console.log(productInStock);
// }

// var checkAvailability = (productInStock) => {
// console.log(productInStock);
// }

var checkAvailability = productInStock => console.log(productInStock);

checkAvailability(12);

var number = 25

function checkNumber(number){
    if(number < 10){
        return number + ' is less than 10';
    } else if(number < 20){
        return number + ' is less than 20 but more than 10';
    } else if(number < 30){
        return number + ' is less than 30 but more than 20'; 
    } else {
        return number + ' is not less than 30';
    }
}

console.log(checkNumber(8));
console.log(checkNumber(23));
console.log(checkNumber(13));
console.log(checkNumber(15));
console.log(checkNumber(22));
console.log(checkNumber(48));

function drinkOrder(drink,size){
     let strMessage = 'You have ordered a ' + size;
     let blnValidation = true;
     if(drink != 'cola' && drink != 'orange' && drink != 'lemon'){
         blnValidation = false;
         strMessage = 'You have tried to order a drink we do not sell';
    }
    if(size != 'small' && size != 'medium' && size != 'large'){
         blnValidation = false 
         strMessage = 'You have tried to order a size we do not sell';
    } 
    if(blnValidation){
        switch(drink){
            case 'cola':
                strMessage += ' Coca-Cola';
                break;
            case 'orange':
                strMessage += ' Tango'
                break;
            case 'lemon':
                strMessage += ' Schweppes';
                break;
        }
    }
     console.log(strMessage);
}

drinkOrder('cola','small');
drinkOrder('orange','medium');
drinkOrder('lemon','large');

function calculator(number1,number2,operator){
    let sum;
    let blnValidated = true;
    if(isNaN(number1)){
        blnValidated = false
        sum = 'Number1 is not a valid number';
    }
    if(isNaN(number2)){
        blnValidated = false
        sum = 'Number2 is not a valid number';
    }
    if(blnValidated){
        switch(operator){
            case'+':
                    sum = number1 + number2;
            break;
            case '-':
                    sum = number1 - number2;
            break;
            case '*':
                    sum = number1 * number2;
            break;
            case '/':
                sum = number1 / number2;
            break;    
            case '%':
                    sum = number1 % number2;
            break;
        }
    }
    console.log(sum);
}
calculator(10,5,'+');
calculator(10,5,'-');
calculator(10,5,'*');
calculator(10,5,'/');
calculator(10,5,'%');
calculator('naomi',5,'%');
calculator(10,'condren','%');

let arrItems = [
    productName,
    price,
    quantity,
    inStock,
    discountAmount,
];

console.log(arrItems);

let firstItem = arrItems[0]
let lastItem = arrItems[4]

console.log(firstItem);
console.log(lastItem);

objItems = {

    productName:'Tinned Beans',
    price:'0.40',
    quantity:1,
    inStock:true,
    discountAmount:0
    }

    console.log(objItems);

    console.log(objItems.productName);
    console.log(objItems['quantity']);