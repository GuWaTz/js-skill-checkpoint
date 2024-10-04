// Question 4: Shipping Cost Calculator

function calculateShippingCost(order) {
  if (order >= 4000) {
    return "Shipping is free.";
  } else if (order >= 2000) {
    return "Shipping cost is 250 Baht.";
  } else {
    return "Shipping cost is 500 Baht.";
  }
}

// ตัวอย่างการใช้งาน
const order1 = 6000;
const order2 = 3000;
const order3 = 150;

console.log(calculateShippingCost(order1)); // "Shipping is free."
console.log(calculateShippingCost(order2)); // "Shipping cost is 250 Baht."
console.log(calculateShippingCost(order3)); // "Shipping cost is 500 Baht."
