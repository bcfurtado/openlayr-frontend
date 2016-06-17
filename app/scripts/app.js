'use strict';

angular
  .module('openlayrFrontendApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'vm'
      })
      .when('/product/:productId', {
        templateUrl: 'views/product.html',
        controller: 'ProductCtrl',
        controllerAs: 'vm',
        resolve: {
          product: function($route, productService) {
            var productId = $route.current.params.productId;
            return productService.getProduct(productId);
          }
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  });
