'use strict';

angular.module('openlayrFrontendApp')
  .service('productService', function ($http) {
    var service = this;
    service.getProducts = getProducts;
    service.getProduct = getProduct;
    service.getProductsFromCategory = getProductsFromCategory;

    function getProducts() {
      return $http.get('/api/products/');
    };

    function getProduct(id) {
      return $http.get('/api/products/' + id);
    };

    function getProductsFromCategory(categoryId) {
      return $http.get('/api/products/?category_id=' + categoryId);
    };
  });
