/**
 * Created by user on 6/24/2016.
 */
hrApp.controller('OtherController', function ($scope,$rootScope) {
    $scope.title = "Titlu";
    $scope.setTitle = function () {
        $scope.title = 'Random';
    }
});