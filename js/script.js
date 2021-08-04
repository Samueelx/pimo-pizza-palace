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
    //console.log("point2");
    
    //calculating price of toppings
    if (this.toppings.length == 1) {toppingPrice = 250;}
    else if(this.toppings.length == 2) {toppingPrice *= 2;}
    else if(this.toppings.length == 3) {toppingPrice *= 3;}
    else {toppingPrice *= 4;}

    //price of pizza
    return sizePrice + crustPrice + toppingPrice;
}

function isValid(testValue, min, max) {
    return testValue < min || testValue > max;
}



$(document).ready( function() {
    $('.order').submit( function(event) {
        event.preventDefault();

        let name = $('input#name').val();
        let location = $('input#location').val();

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

        let toppings = [];
        for( let i = 0; i < toppingList.length; i++){
            toppings.push(toppingList[i]);
        }
        //Now, topping is an array of the chosen toppings.


        //Data Validation.
        if (isValid(size, 1, 3)){
            alert("Please enter the appropriate pizza size");
        }
        else if (isValid(toppings.length, 1, 4)) {
            alert("You must select a pizza topping");
        }
        else if ((location = 0)) {
            alert("Please enter your location");
        }
        


        //create the pizza object
        let order = new Pizza(size, crust, toppings);
        //console.log(order.size, order.crust, order.toppings);
        output();
        
        function output() {
            let congratulatoryText = $('<h3></h3>').text(`Thank you, ${name} for choosing us!`);
            let confirm = $('<p></p>').text(`Your Pizza order has been collected and will be deliverer to you in less that 1 hr`);
            let cost = $('<p></p>').text(`Your order will cost you, KSH ${order.calculatePrice()}`);

            $('div#response').append(congratulatoryText);
            $('div#response').append(confirm);
            $('div#response').append(cost);

        }
        
    });
});