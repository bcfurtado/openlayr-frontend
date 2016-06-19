'use strict';

angular.module('openlayrFrontendApp')
  .service('productService', function ($http, $q) {
    var service = this;
    service.getProducts = getProducts;
    service.getProduct = getProduct;
    service.getProductsFromIds = getProductsFromIds;
    service.getProductsFromCategory = getProductsFromCategory;

    function getProducts() {
      return $http.get('/api/products/');
    };

    function getProduct(id) {
      return $http.get('/api/products/' + id);
    };

    function getProductsFromIds(productIds){
      var deferred = $q.defer()

      var productPromisses = productIds.map( function(productId) {
       return getProduct(productId);
      });

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

    function getProductsFromCategory(categoryId) {
      return $http.get('/api/products/?category_id=' + categoryId);
    };
  });
