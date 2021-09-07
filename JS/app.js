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
function basicMemory() {
    memoryCost.innerText = '0';
    updateTotal();
};
//Extra Memory
function extraMemory() {
    memoryCost.innerText = '180';

    updateTotal();

};

// Storage
function basicStorage() {
    storageCost.innerText = '0';
    updateTotal();
};
// Extra Strorage 512GB
function extraStorageGB() {
    storageCost.innerText = '100';
    updateTotal();

};
// Extra Strorage 1TB
function extraStorageTB() {
    storageCost.innerText = '180';
    updateTotal();
};

// Free delivery
function freeDelivery() {
    deliveryChrage.innerText = '0';
    updateTotal();
};

//Delivery
function delivery() {
    deliveryChrage.innerText = '20';
    updateTotal();

};

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