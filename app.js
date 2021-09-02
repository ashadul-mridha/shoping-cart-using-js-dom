//function product

function updateProductPrice(isAddItem,product,price){

    let productInput = document.getElementById(product + '-quentity');
    let productInputNum = parseInt(productInput.value);
    let totalProductQuentity = productInputNum;

    if(isAddItem == true){

        totalProductQuentity = productInputNum + 1;

    }else if(isAddItem == false && totalProductQuentity > 0){
        
        totalProductQuentity = productInputNum - 1;

    }
    
    productInput.value = totalProductQuentity;

    //product price
    let productPrice = document.getElementById(product + '-price');
    //update product price
    let totalProductPrice = price * totalProductQuentity;
    productPrice.innerText = totalProductPrice;

    calculateSubTotal();
}

//product quentity

function totalProductQuentity(pruduct){

    let productQuentity = document.getElementById(pruduct + '-quentity');
    productQuentity = parseInt(productQuentity.value);
    return productQuentity;
}

//calculate function total
function calculateSubTotal(){

    let phoneQuentity = totalProductQuentity('phone');
    let caseQuentity = totalProductQuentity('case');
    
    let phoneTotalPrice = phoneQuentity * 1219;
    let caseTotalPrice = caseQuentity * 59;

    const productPriceTotal = phoneTotalPrice + caseTotalPrice;
    const tax = productPriceTotal / 10;
    const subTotal = productPriceTotal + tax;

    document.getElementById('total-price').innerText = productPriceTotal;
    document.getElementById('tax-total').innerText = tax;
    document.getElementById('sub-total').innerText = subTotal;
}

//increase and decrease phone price
document.getElementById('phone-plus').addEventListener('click',function(){
    
    updateProductPrice(true,'phone',1219);
})

document.getElementById('phone-minus').addEventListener('click',function(){
    
    updateProductPrice(false,'phone',1219);
})

//increase and decrease case price
document.getElementById('case-plus').addEventListener('click',function(){
    
    updateProductPrice(true,'case',59);

})

document.getElementById('case-minus').addEventListener('click',function(){
    
    updateProductPrice(false,'case',59);
 
})
