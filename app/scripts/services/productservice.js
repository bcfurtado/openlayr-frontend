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

      function getProducts() {
          return $http.get('/api/products/');
      };
  });
