import { ProductOperations } from "../services/product-operations.js";
const pizzaProduct = async ()=>{
const pizza = await ProductOperations.loadProduct()
console.log('controller pizzas are ', pizza);
}
pizzaProduct();