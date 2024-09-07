/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */
const products = [];

/* Create 3 or more product objects using object literal notation 
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/
//product 1
const Dragon = {
  name: "Chinese Fireball",
  momClass: 5,
  price: 3000,
  quantity: 0,
  productId: 101,
  // image: "https://static.wikia.nocookie.net/harrypotter/images/f/f2/Chinese_Fireball_FBC.png/revision/latest?cb=20161129175906"
  image: "../images/Chinese_Fireball.jpg"
};
//add to products array:
products.push(Dragon);

//product 2
const Doxy = {
  name: "Doxy",
  momClass: 3,
  price: 35,
  quantity: 0,
  productId: 102,
  image: "../images/doxy.jpg"
} ;
//add to products array
products.push(Doxy);

//product 3
const Kelpie = {
  name: "Kelpie",
  momClass: 4,
  price: 420,
  quantity: 0,
  productId: 103,
  image: "../images/kelpie.jpg"
};
//add to products array
products.push(Kelpie);

/* Images provided in /images folder. All images from Unsplash.com
   - cherry.jpg by Mae Mu
   - orange.jpg by Mae Mu
   - strawberry.jpg by Allec Gomes
*/

/* Declare an empty array named cart to hold the items in the cart */
const cart = [];

/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/
function addProductToCart(productId) {
  //find the product
  const product = products.find(function(item){
    if(item.productId === productId){
      return item;
    }
  },productId);

  if (!product) {
    return; // Exit the function if the product is not found
  }

  product.quantity += 1;

  if(!cart.includes(product)){
    cart.push(product);
  }
};

/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/

const increaseQuantity = function(productId){
  const product = products.find(function(item){
    if(item.productId === productId){
      return item;
    }
  },productId);

  if (!product) {
    return; // Exit the function if the product is not found
  }

  product.quantity += 1;
};
/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/

const decreaseQuantity = function(productId){
  const index = cart.findIndex(function(element){
    if(element.productId === productId){
      return element;
    }
  });

  if (index === -1) {
    return; // Exit the function if the product is not found
  }

  const product = cart[index];
  product.quantity -= 1;

  if(product.quantity <= 0){
    product.quantity = 0;
    cart.splice(index,1);
  }

};

/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/

function removeProductFromCart(productId){
  const index = cart.findIndex(function(element){
    if(element.productId === productId){
      return element;
    }
  });

  if (index === -1) {
    return; // Exit the function if the product is not found
  }

  const product = cart[index];
  product.quantity = 0;
  cart.splice(index,1);
}
/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total cost of all products
  - cartTotal should return the total cost of the products in the cart
  Hint: price and quantity can be used to determine total cost
*/

function cartTotal(){
  let sum = 0;

  cart.forEach(function(item){
    sum += item.quantity * item.price;
  })

  return sum;
}
/* Create a function called emptyCart that empties the products from the cart */
function emptyCart(){
  cart.splice(0, cart.length);
}

/* Create a function named pay that takes in an amount as an argument
  - amount is the money paid by customer
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
  Hint: cartTotal function gives us cost of all the products in the cart  
*/

//total amount paid by user
let TotalPaid = 0;
function pay(amount){
  if(amount <= 0){
    //user shouldn't be ablt to pay with negative amount
    //or not pay at all
    return TotalPaid - cartTotal();
  }
  TotalPaid += amount;
  remainder = TotalPaid - cartTotal();

  if(remainder >= 0){
    emptyCart();
    TotalPaid = 0;
  }

  return remainder;
}

/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/


/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
   products,
   cart,
   addProductToCart,
   increaseQuantity,
   decreaseQuantity,
   removeProductFromCart,
   cartTotal,
   pay, 
   emptyCart,
   /* Uncomment the following line if completing the currency converter bonus */
   // currency
}
