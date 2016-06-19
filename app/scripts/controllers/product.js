'use strict';

angular.module('openlayrFrontendApp')
  .controller('ProductCtrl', function ($location, shoppingCartService, product) {
    var vm = this;
    vm.product = product.data;
    vm.addToShoppingCard = addToShoppingCard;

    function addToShoppingCard(productId) {
      shoppingCartService.addProduct(productId);
      $location.path('/shopping_cart/');
    };

  });
