function setPrice(value) {
	price = value;
}

function setDiscount(value) {
	discount = value;
}

function calculateDiscount(originalPrice, discountPercent) {
	return originalPrice - (originalPrice * discountPercent) / 100;
}

function calculate() {
	const result = calculateDiscount(Number(price), Number(discount));

	output = result;
	updateView();
}
