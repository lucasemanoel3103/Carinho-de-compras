async function addItem(userCart, item) {
  userCart.push(item);
}

async function deleteItem(userCart, name) {
  const index = userCart.findIndex((item) => item.name === name);

  if (index !== -1) {
    userCart.splice(index, 1);
  }
}

async function removeItem(userCart, index) {
  const deleteIndex = index - 1;
  
  if(index >= 0 && index < userCart.length) {
    userCart.splice(index, 1);
  }
}

async function calculateTotal(userCart) {
  console.log("Shopee cart Total is:"); 
  
  const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
  console.log(`Total: ${result}`);
}

async function displayCart(userCart) {
    console.log("Shopee cart list:");
    userCart.array.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity} x | Subtotal = ${item.subtotal()}`);
    });
}

export { addItem, calculateTotal, deleteItem, removeItem, displayCart };
