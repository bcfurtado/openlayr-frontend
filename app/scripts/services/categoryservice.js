'use strict';

angular.module('openlayrFrontendApp')
  .service('categoryService', function ($http) {
    var service = this;
    service.getCategories = getCategories;
    service.getCategory = getCategory;

    function getCategories() {
      return $http.get('/api/categories/');
    };

    function getCategory(categoryId) {
      return $http.get('/api/categories/' + categoryId + '/');
    };

  });
