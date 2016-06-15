'use strict';

/**
 * @ngdoc service
 * @name openlayrFrontendApp.productService
 * @description
 * # productService
 * Service in the openlayrFrontendApp.
 */
angular.module('openlayrFrontendApp')
  .service('productService', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
      var service = this;
      service.getProducts = getProducts;
      service.getProduct = getProduct;

      function getProducts() {
          return $http.get('/api/products/');
      };

      function getProduct(id) {
          return $http.get('/api/products/' + id);
      }
  });
