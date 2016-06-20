'use strict';

angular.module('openlayrFrontendApp')
  .service('shoppingCartService', function ($cookies) {
    var service = this;
    service.getShoppingCart = getShoppingCart;
    service.updateShoppingCart = updateShoppingCart;
    service.clearShoppingCart = clearShoppingCart;
    service.addProduct = addProduct;
    service.getProducts = getProducts;

    function getShoppingCart() {
      var shoppingcart = $cookies.getObject('shoppingcart');
      if (!shoppingcart) {
        shoppingcart = {
          products: [],
        }
      }
      return shoppingcart;
    }

    function updateShoppingCart(shoppingcart) {
      $cookies.put('shoppingcart', JSON.stringify(shoppingcart));
    }

    function clearShoppingCart() {
      $cookies.remove('shoppingcart');
    }

    function addProduct(productId) {
      var shoppingcart = getShoppingCart();
      shoppingcart.products.push(productId);
      updateShoppingCart(shoppingcart);
    }

    function getProducts() {
      var shoppingcart = $cookies.getObject('shoppingcart');
      if (shoppingcart && shoppingcart.products) {
        return shoppingcart.products;
      }
      return [];
    }

  });
