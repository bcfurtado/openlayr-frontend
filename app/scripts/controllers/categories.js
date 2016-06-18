'use strict';

angular.module('openlayrFrontendApp')
  .controller('CategoryCtrl', function ($route, categoryService, productService) {
    var vm = this;
    var categoryId = $route.current.params.categoryId;

    categoryService.getCategory(categoryId).then(function successCallback(response) {
      vm.category = response.data;
    }, function errorCallback(response) {
      console.error(response);
    });


    productService.getProductsFromCategory(categoryId).then(function successCallback(response) {
      vm.products = response.data;
    }, function errorCallback(response) {
      console.error(response);
    });

  });
