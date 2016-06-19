'use strict';

angular.module('openlayrFrontendApp')
  .controller('ShoppingCartCtrl', function ($q, shoppingCartService, productService) {
    var vm = this;
    vm.getTotalPrice = getTotalPrice;
    vm.updateShoppingCart = updateShoppingCart;
    vm.shoppingcart = shoppingCartService.getShoppingCart();
    vm.products = [];
    init();

    function init() {
      getProductsPromise().then(function(successCallback){
        vm.products = successCallback;
      }, function(errorCallback) {
        console.error(errorCallback);
      });
    }

    function updateShoppingCart(){
      shoppingCartService.updateShoppingCart(vm.shoppingcart);
    }

    function getProductPromises(productIds){
      return productIds.map( function(productId) {
       return productService.getProduct(productId);
      });
    };

    function getProductsPromise() {
      var deferred = $q.defer()

      var productIds = shoppingCartService.getProducts();
      var productPromisses = getProductPromises(productIds);

      $q.all(productPromisses).then(function(data){
        var products = data.map(function(response){
          return response.data;
        });
        deferred.resolve(products);
      }, function(error) {
        deferred.reject(error);
      });

      return deferred.promise;
    };

    function getTotalPrice() {
      var initialPrice = 0;
      return vm.products.reduce(function(previousPrice, currentProduct) {
        return previousPrice + parseFloat(currentProduct.price);
      }, initialPrice);
    }



  });
