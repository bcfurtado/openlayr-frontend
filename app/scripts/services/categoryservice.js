'use strict';

angular.module('openlayrFrontendApp')
  .service('categoryService', function ($http) {
      var service = this;
      service.getCategories = getCategories;

      function getCategories() {
          return $http.get('/api/categories/');
      };

  });
