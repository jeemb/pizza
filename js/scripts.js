// business logic
function Pizza(tppings, size) {
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.cost = function() {
  return 2 * this.toppings + 5 * this.size
}

//user interface logic
$(document).ready(function() {
  $("form#input").submit(function(event) {
    event.preventDefault();

    var numberOfToppings = $("#".length);
    var pizzaSize = $("#")

    var newPizza = new Pizza(numberOfToppings, pizzaSize);
    var price = Pizza.cost();

    $("#output").show();
    $("#output").text(price);
  })
});
