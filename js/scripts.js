// business logic
function Pizza(tppings, size) {
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.cost = function() {
  return 2 * this.toppings + 5 * this.size
}
