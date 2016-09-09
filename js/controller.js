'use strict';

function MyController($scope, $routeParams, MyService) {

    // get store and cart from service
    $scope.store = MyService.store;
    $scope.cart = MyService.cart;

    // use routing to pick the selected product
    if ($routeParams.productSku != null) {
        $scope.product = $scope.store.getProduct($routeParams.productSku);
    }
}
