import Product from "../models/products.js";
import makeNetworkCalls from "./api-client.js";

export const ProductOperations = {
    async loadProduct(){
        const pizzas =  await makeNetworkCalls()
        const PizzaArray =  pizzas['Vegetarian']
        const ProductArray = PizzaArray.map((pizza)=>{
            const CurrentPizza = new Product(pizza.id, pizza.name , pizza.menu_description, pizza.price , pizza.assets.product_details_page[0].url)
            return CurrentPizza;
        })
        console.log('product Array is ', ProductArray)
        return ProductArray;
    },

    sortProducts(){

    },

    searchProducts(){

    }
}