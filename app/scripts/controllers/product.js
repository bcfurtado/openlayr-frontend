'use strict';

angular.module('openlayrFrontendApp')
  .controller('ProductCtrl', function (product) {
    var vm = this;
    vm.product = product.data;
    // var productId = $routeParams.productId;

    // productService.getProduct(productId).then(function successCallback(response) {
    //   vm.product = response.data;
    // }, function errorCallback(response) {
    //   console.error(response);
    // });

  });
