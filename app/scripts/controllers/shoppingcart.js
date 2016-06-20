'use strict';

angular.module('openlayrFrontendApp')
  .controller('ShoppingCartCtrl', function ($location, shoppingCartService, productService, orderService) {
    var vm = this;
    vm.getTotalPrice = getTotalPrice;
    vm.updateShoppingCart = updateShoppingCart;
    vm.orderNow = orderNow;
    vm.shoppingcart = shoppingCartService.getShoppingCart();
    vm.products = [];
    init();

    function init() {
      var productIds = shoppingCartService.getProducts();
      productService.getProductsFromIds(productIds).then(function(successCallback){
        vm.products = successCallback;
      }, function(errorCallback) {
        console.error(errorCallback);
      });
    }

    function updateShoppingCart(){
      shoppingCartService.updateShoppingCart(vm.shoppingcart);
    }

    function getTotalPrice() {
      var initialPrice = 0;
      return vm.products.reduce(function(previousPrice, currentProduct) {
        return previousPrice + parseFloat(currentProduct.price);
      }, initialPrice);
    }

    function orderNow() {
      orderService.createOrder(vm.shoppingcart).then(function(successCallback) {
        alert('Order received with success. Thank you for the trust!');
        shoppingCartService.clearShoppingCart();
        $location.path('/');
      }, function (errorCallback) {
        alert('Something wrong happened.');
      });
    }



  });
