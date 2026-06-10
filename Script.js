
    function openMenu() {
        document.getElementById("sideMenu").classList.add("open");
    }

    function closeMenu() {
        document.getElementById("sideMenu").classList.remove("open");
    }


    
let quantities = [0, 0, 0];

let prices = [95, 75, 65];

    function changeQty(index, change) {

        quantities[index] = quantities[index] + change;

        if (quantities[index] < 0) {
            quantities[index] = 0;
        }

        document.getElementById("quantity" + index).textContent = quantities[index];

        updateTotal();

        addCart();
    }

    function updateTotal() {

      let total = 0;

        for (let i = 0; 
             i < quantities.length; i=i+1) {
           total = total + quantities[i] * prices[i];
        }

      document.getElementById("total").textContent = "$ " + total;
      document.getElementById("cart-total").textContent = "$ " + total;
    }


function openCart(){
    document.getElementById("cartOverlay").classList.add("show");
}
function closeCart(){
    document.getElementById("cartOverlay").classList.remove("show");
}


let products = [

    {
        name:"10 Course Vegan Degustation",
        price:95,
        image:"assets/dish1.webp"
    },

    {
        name:"Chef's Pick 5 Course",
        price:75,
        image:"assets/dish2.webp"
    },

    {
        name:"Unlimited Yum Cha",
        price:65,
        image:"assets/dish3.webp"
    }

];

function addCart(){

    let cartItems = document.getElementById("cart-items");

    cartItems.innerHTML = "";

    for(let i=0;i<quantities.length;i=i+1){

        if(quantities[i] > 0){

            cartItems.innerHTML += `

            <div class="cart-item">

                <img src="${products[i].image}"alt="${products[i].name}">

                <div class="cart-info">
                    <h2>${products[i].name}</h2>
                    <p>$${products[i].price}</p>
                </div>

                <div class="cart-quantity">

                    <button onclick= "changeQty(${i},1)"> +</button>

                    <span>${quantities[i]} </span>

                    <button onclick="changeQty(${i},-1)">-</button>

                </div>

            </div>
            `;
        }
    }
}

function confirmPayment() {

    const cardName = document.getElementById("cardName").value.trim();
    const cardNumber = document.getElementById("cardNumber").value.trim();
    const cvv = document.getElementById("cvv").value.trim();
    const expiry = document.getElementById("expiry").value.trim();
    const eatDate = document.getElementById("eatDate").value.trim();
    const time = document.getElementById("time").value.trim();
    const people = document.getElementById("people").value.trim();

    const error = document.getElementById("error-message");

    if (
        cardName === "" ||
        cardNumber === "" ||
        cvv === "" ||
        expiry === "" ||
        eatDate === "" ||
        time === "" ||
        people === ""
    ) {
        error.textContent = "Please complete all required information.";
        return;
    }

    error.textContent = "";

    showSuccess();
}

function showSuccess() {
    document.getElementById("successOverlay").classList.add("show");
}

function closeSuccess() {
    document.getElementById("successOverlay").classList.remove("show");
}