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
  .config(function ($routeProvider, $httpProvider) {
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
      .when('/categories/:categoryId', {
        templateUrl: 'views/category.html',
        controller: 'CategoryCtrl',
        controllerAs: 'vm',
      })
      .when('/shopping_cart/', {
        templateUrl: 'views/shopping_cart.html',
        controller: 'ShoppingCartCtrl',
        controllerAs: 'vm',
      })
      .when('/dashboard/', {
        templateUrl: 'views/dashboard.html',
        controller: 'DashboardCtrl',
        controllerAs: 'vm',
      })
      .otherwise({
        redirectTo: '/'
      });

    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
  });
