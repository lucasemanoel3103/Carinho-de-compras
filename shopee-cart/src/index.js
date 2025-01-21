import createItem from './services/item.js';

const cart = [];

console.log("Welcome to yout shopee cart! "); 

const item1 = await createItem("Fone de ouvido akg", 89.99, 1);
const item2 = await createItem("Fone de ouvido tws", 19.99, 4);

console.log(item2.subtotal());
