const bestPrice = document.getElementById('best-price');
const memoryCost = document.getElementById('extra-memory-cost');
const storageCost = document.getElementById('extra-storage-cost');
const deliveryChrage = document.getElementById('delivery-charge');
const totalPrice = document.getElementById('total-price');
const discountedTotal = document.getElementById('discounted-total');

function updateTotal() {
    const bestCost = parseInt(bestPrice.innerText);
    const memoryPrice = parseInt(memoryCost.innerText);
    const storagePrice = parseInt(storageCost.innerText);
    const deliveryPrice = parseInt(deliveryChrage.innerText);

    const grandTotal = bestCost + memoryPrice + storagePrice + deliveryPrice;

    totalPrice.innerText = grandTotal;

    discountedTotal.innerText = grandTotal;
};


// Basic Memory
document.getElementById('basic-memory').addEventListener('click', function () {
    memoryCost.innerText = '0';
    updateTotal();
});
//Extra Memory
document.getElementById('extra-memory').addEventListener('click', function () {
    memoryCost.innerText = "180";

    updateTotal();

});

// Storage
document.getElementById('basic-storage').addEventListener('click', function () {
    storageCost.innerText = '0';
    updateTotal();
});
// Extra Strorage 512GB
document.getElementById('extra-storage-gb').addEventListener('click', function () {
    storageCost.innerText = "100";
    updateTotal();

});
// Extra Strorage 1TB
document.getElementById('extra-storage-tb').addEventListener('click', function () {
    storageCost.innerText = "180";
    updateTotal();
});

// Free delivery
document.getElementById('free-delivery').addEventListener('click', function () {
    deliveryChrage.innerText = '0';
    updateTotal();
});

//Delivery
document.getElementById('delivery').addEventListener('click', function () {
    deliveryChrage.innerText = "20";
    updateTotal();

});

// PromoCode
document.getElementById('btn-apply').addEventListener('click', function () {
    const input = document.getElementById('promo-code');
    const inputText = input.value;

    if (inputText == 'stevekaku') {
        const totalPriceText = totalPrice.innerText;
        const totalPriceValue = parseFloat(totalPriceText);
        const discount = totalPriceValue - (totalPriceValue * 0.2);

        document.getElementById('discounted-total').innerText = discount;
        input.value = '';
    }

});