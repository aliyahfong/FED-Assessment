//list of products
var product = {
    product: [
        {name: "Bergamot",
        brand: "Plant Therapy",
        description: "Bergamot Oil",
        price: "RM 60.00"},

        {name: "Ylang Ylang",
        brand: "Plant Therapy",
        description: "Ylang Ylang Oil",
        price: "RM 50.00"},

        {name: "Rosemary",
        brand: "Plant Therapy",
        description: "Rosemary Oil",
        price: "RM 40.00"},

        {name: "Lemongrass",
        brand: "Plant Therapy",
        description: "Lemongrass Oil",
        price: "RM 50.00"},
        
        {name: "Cinnamon",
        brand: "Plant Therapy",
        description: "Cinnamon Oil",
        price: "RM 50.00"},

        {name: "Peppermint",
        brand: "Plant Therapy",
        description: "Peppermint Oil",
        price: "RM 40.00"},
        
        {name: "Clarity",
        brand: "Plant Therapy",
        description: "Clarity Oil",
        price: "RM 50.00"},
        
        {name: "Balance",
        brand: "Plant Therapy",
        description: "Balance Oil",
        price: "RM 50.00"},

    ]
};

var cartItems = [];
var numberOfOrderButtons = document.querySelectorAll(".order").length;

//displaying objects from index.js (list of products)
function retrieveObject(){
    for (i = 0; i <= product.product.length; i++) {
       document.getElementById("productName" + i).innerHTML =
        product.product[i].name;
        document.getElementById("productPrice" + i).innerHTML =
        product.product[i].price;
}
}

function addtoCart(id){
for (var i = 0; i<numberOfOrderButtons; i++){
    document.querySelectorAll(".order")[id].addEventListener("click", function(){
    
        cartItems.push(product.product[id]);})
        console.log(product.product[id]);
    }
}
//applying to all Order buttons to have event listeners
//Add to cart function
/*var cartItems = [];
var numberOfOrderButtons = document.querySelectorAll(".order").length;

for (var i = 0; i<numberOfOrderButtons; i++){
document.querySelectorAll(".order")[id].addEventListener("click", function addToCart(){

    cartItems.push(product.product[id]);

})
}*/

//clicking on shopping cart
/*document.querySelector(".cart").addEventListener("click", function() {

    alert("shopping cart modal");});*/

//modal test
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
//var btn = document.getElementById("myBtn");
var btn = document.querySelector(".cart");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//slideshow
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}

retrieveObject();
addToCart();