var json = require('json-file');
var file = json.read('./pageObjects/cart.page.json');

class Cart {

    get buyButton() { return $(file.get('cartPage.selector.buyButton')); }
    get quantity() { return $(file.get('cartPage.selector.quantity')); }
    get thankYouMsg() { return $(file.get('cartPage.selector.thankYouMsg')); }
  }
  
  module.exports = new Cart();