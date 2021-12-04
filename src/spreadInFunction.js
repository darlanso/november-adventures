function makeSandwich(bread, cheese, sauce) {
  return `Your sandwich with ${bread} bread, ${cheese} cheese and ${sauce} is done!`;
}

const ingredients = ['white', 'cheddar', 'barbecue'];

console.log(makeSandwich(...ingredients));
