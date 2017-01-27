// business logic
function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.cost = function() {
  return 1.50 * this.toppings + 5 * this.size
}

//user interface logic
$(document).ready(function() {
  $("form#input").submit(function(event) {
    event.preventDefault();

    var numberOfToppings = ($("input:checkbox[name=toppings]:checked").length);
    var pizzaSize = $("input:radio[name=size]:checked").val();

    var newPizza = new Pizza(numberOfToppings, pizzaSize);

    var price = newPizza.cost();
    var dollar = '$' + price.toFixed(2);

    $("#output").show();
    $("#cost").text(dollar);
  })
});
