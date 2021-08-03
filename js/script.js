function Pizza(size, crust, toppings) {
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
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
        //console.log(toppingList);
        let topping = [];
        for( let i = 0; i < toppingList.length; i++){
            topping.push(toppingList[i]);
        }
        //Now, topping is an array of the chosen toppings.

        //create the pizza object
        let order = new Pizza(size, crust, topping);
        
    });
});