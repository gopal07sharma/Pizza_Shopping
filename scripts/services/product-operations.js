import Product from "../models/products.js";
import makeNetworkCalls from "./api-client.js";

export const ProductOperations = {
    products:[],
    search(PizzaID ,button){
     console.log('button in search  ', button);
     const product = this.products.find(currentProduct=>currentProduct.id==PizzaID)
     console.log('product is ', product);
     button.target.innerText=='Add to cart' ? product.isAddedInCart = false : product.isAddedInCart = true;
     console.log('All product is ', this.products)

    },

    getProductsInCart(){
        const ProductInCart = this.products.filter(product=>product.isAddedInCart)
        return ProductInCart;
    },
    removeProductsFromCart(){
        const CartProducts = ProductOperations.getProductsInCart()
        return CartProducts;

    }
   ,
    async loadProduct(){
        const pizzas =  await makeNetworkCalls()
        const PizzaArray =  pizzas['Vegetarian']
        const ProductArray = PizzaArray.map((pizza)=>{
            const CurrentPizza = new Product(pizza.id, pizza.name , pizza.menu_description, pizza.price , pizza.assets.product_details_page[0].url )
            return CurrentPizza;
        })
        console.log('product Array is ', ProductArray)
        this.products = ProductArray;
        return ProductArray;
    },

    sortProducts(){

    },

    searchProducts(){

    }
}