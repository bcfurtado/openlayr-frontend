'use strict';

/**
 * @ngdoc function
 * @name openlayrFrontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the openlayrFrontendApp
 */
angular.module('openlayrFrontendApp')
  .controller('MainCtrl', function (productService, categoryService) {
    var vm = this;

    productService.getProducts().then(function successCallback(response) {
      vm.products = response.data;
    }, function errorCallback(response) {
      console.error(response);
    });

    categoryService.getCategories().then(function successCallback(response) {
      vm.categories = response.data;
    }, function errorCallback(response) {
      console.error(response);
    });

  });
