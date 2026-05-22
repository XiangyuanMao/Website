
    function openMenu() {
        document.getElementById("sideMenu").classList.add("open");
    }

    function closeMenu() {
        document.getElementById("sideMenu").classList.remove("open");
    }
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
    }

    function updateTotal() {

      let total = 0;

        for (let i = 0; 
             i < quantities.length; 
             i=i+1) {
           total = total + quantities[i] * prices[i];
        }

      document.getElementById("total").textContent = "$ " + total;
    }