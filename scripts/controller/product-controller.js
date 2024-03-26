import { ProductOperations } from "../services/product-operations.js";
const pizzaProduct = async ()=>{
const pizzas = await ProductOperations.loadProduct()
console.log('controller pizzas are ', pizzas);
for(let pizza of pizzas){
    PreparePizzaCard(pizza);
}
}



pizzaProduct();

/*               <div class="col-4">
                    <div class="card" style="width: 18rem;">
                        <img src="..." class="card-img-top" alt="...">
                        <div class="card-body">
                          <h5 class="card-title">Card title</h5>
                          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                      </div>
                  </div>   */
 const AddToCart = (button)=>{
  const products =  ProductOperations.getProductsInCart()
  button.target.innerText == 'Add to cart' ? button.target.innerText ='Remove from cart' : button.target.innerText = 'Add to cart';
  console.log('button is ', button)
  const PizzaID = button.target.getAttribute('product-id')
  console.log("Add to cart working ",PizzaID)
  ProductOperations.search(PizzaID , button)
  PrintBasket()
  ProductOperations.removeProductsFromCart(button)
 }

 const RemoveFromCart = ()=>{
  const ChangedProducts = ProductOperations.removeProductsFromCart();
  console.log('Removed Cart producst is ', ChangedProducts);
 }
 
//  const AddToCart = (button) => {
//   button.target.innerText == 'Add to cart' ? button.target.innerText = 'Remove from cart' : button.target.innerText = 'Add to cart';
//   console.log('button is ', button)
//   const PizzaID = button.target.getAttribute('product-id')
//   console.log("Add to cart working ", PizzaID)
//   ProductOperations.search(PizzaID)
//   PrintBasket()
// }
 const PrintBasket = ()=>{
   RemoveFromCart();
   const products =  ProductOperations.getProductsInCart()
   console.log('products in basket', products)
   const basket = document.querySelector('#basket')
   basket.innerHTML='';
   for(let product of products){
   const li = document.createElement('li')
    li.innerText = `${product.name} ${product.price}`
   basket.appendChild(li);
   }
 }
 

 const PreparePizzaCard = (pizza)=>{
    const ColDiv = document.createElement('div')
    ColDiv.className = 'col-4'
    const CardDiv = document.createElement('div')
    CardDiv.className = 'card'
    CardDiv.style = 'width: 18rem;'
    ColDiv.appendChild(CardDiv);
    const img = document.createElement('img')
    img.src = pizza.url
    img.className = 'card-img-top'
    const CardBody = document.createElement('div');
    CardBody.className = 'card-body';
    CardDiv.appendChild(img);

    CardDiv.appendChild(CardBody);
    const h5 = document.createElement('h5')
    h5.className = 'card-title';
    h5.innerText = pizza.name;
    const pTag = document.createElement('p')
    pTag.className = 'card-text'
    pTag.innerText = pizza.desc
    const button = document.createElement('button')
    button.setAttribute('product-id', pizza.id )
    button.addEventListener('click', AddToCart)
    const priceTag = document.createElement('h5');
    priceTag.innerText = pizza.price
    button.className = 'btn btn-primary'
    button.innerText = 'Add to cart'
    CardBody.appendChild(h5)
    CardBody.appendChild(pTag)
    CardBody.appendChild(priceTag)
    CardBody.appendChild(button)
    const output = document.querySelector('#output')
    output.appendChild(ColDiv);


 }                 
 