function Pizza(size, crust, toppings) {
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
}

Pizza.prototype.calculatePrice = function() {
    let sizePrice = 600;    //size of the medium sized pizza
    let toppingPrice = 250;
    const crustPrice = 350;
    if(this.size === "large"){
        sizePrice = 1.5 * sizePrice;
    }
    else if (this.size === "small") {
        sizePrice = 0.75 * sizePrice;
    }
    console.log("point2");
    
    //calculating price of toppings
    if (this.toppings.length == 1) {toppingPrice = 250;}
    else if(this.toppings.length == 2) {toppingPrice *= 2;}
    else if(this.toppings.length == 3) {toppingPrice *= 3;}
    else {toppingPrice *= 4;}

    //price of pizza
    return sizePrice + crustPrice + toppingPrice;
}



$(document).ready( function() {
    $('.order').submit( function(event) {
        event.preventDefault();
        let size = "";
        let pizzaSize =  parseInt($('#pizza-size').val());
        if (pizzaSize === 1) size = "large";
        else if(pizzaSize === 2) size = "medium";
        else if(pizzaSize === 3) size = "small";
        else alert("Something went wrong somewhere.");

        let crust = $('#pizza-crust').val();
        
        let toppingList = $('input:checkbox[name = topping]:checked').map( function() {
            return this.value;
        });
        console.log("point1");
        let toppings = [];
        for( let i = 0; i < toppingList.length; i++){
            toppings.push(toppingList[i]);
        }
        console.log(toppings);
        //Now, topping is an array of the chosen toppings.

        //create the pizza object
        let order = new Pizza(size, crust, toppings);
        console.log(order.size, order.crust, order.toppings);
        alert(order.calculatePrice());
        
    });
});