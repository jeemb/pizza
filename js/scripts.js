// business logic
function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.cost = function() {
  return 1.50 * this.toppings + 5 * this.size
}

Pizza.prototype.checkFill = function() {
  if (this.toppings < 1) {
  alert("Please select one or more toppings");
  }
}

Pizza.prototype.createEntry = function() {
  return "<li>'Order placed:'" + this.size + "pizza with: " + this.toppings "toppings""</li>"
}

//user interface logic
$(document).ready(function() {
  $("form#input").submit(function(event) {
    event.preventDefault();

    var numberOfToppings = ($("input:checkbox[name=toppings]:checked").length);
    var pizzaSize = $("input:radio[name=size]:checked").val();

    var newPizza = new Pizza(numberOfToppings, pizzaSize);

    newPizza.checkFill();

    var price = newPizza.cost();
    var dollar = '$' + price.toFixed(2);

    $("#output").show();
    $("#cost").text(dollar);
  })
});
