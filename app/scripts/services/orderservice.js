'use strict';

angular.module('openlayrFrontendApp')
  .service('orderService', function ($http) {
    var service = this;
    service.createOrder = createOrder;

    function createOrder(order) {
      return $http.post('/api/orders/', order);
    }

  });
