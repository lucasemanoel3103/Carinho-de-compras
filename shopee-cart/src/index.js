import createItem from './services/item.js';
import * as cartService from './services/cart.js';

const myCart = [];
const myWishList = [];

console.log("Welcome to yout shopee cart! "); 

const item1 = await createItem("Fone de ouvido akg", 89.99, 1);
const item2 = await createItem("Fone de ouvido tws", 19.99, 4);

await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

await cartService.deleteItem(myCart, item2.name);

console.log("Shopee cart Total is:"); 
await cartService.calculateTotal(myCart);



