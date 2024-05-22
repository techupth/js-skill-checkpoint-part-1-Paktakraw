// Question #5
const products = [
  {
    name: "เสื้อยืด",
    price: 10,
    quantity: 2,
  },
  {
    name: "กางเกงยีนส์",
    price: 5,
    quantity: 3,
  },
  {
    name: "เสื้อเชิ้ต",
    price: 10,
    quantity: 5,
  },
];

const promotionCode = "";
// เริ่มเขียนโค้ดตรงนี้
let listPrices = products.map((itemPrice) => {
  return itemPrice.price;
});
console.log(listPrices);
let listquantity = products.map((itemQuantity) => {
  return itemQuantity.quantity;
});
console.log(listquantity);
let listTotalPrice = [];
for (let i = 0; i < listPrices.length; i++) {
  listTotalPrice.push(listPrices[i] * listquantity[i]);
}
console.log(listTotalPrice);
let totalPrice = listTotalPrice.reduce((acc, current) => {
  return acc + current;
}, 0);
console.log(totalPrice);
calculateTotalPrice = (totalPrice, promotionCode) => {
  if (promotionCode.includes("SALE20")) {
    return totalPrice - (totalPrice * 20) / 100;
  } else if (promotionCode.includes("SALE50")) {
    return totalPrice - (totalPrice * 50) / 100;
  } else {
    return totalPrice;
  }
};
console.log(calculateTotalPrice(totalPrice, promotionCode));
