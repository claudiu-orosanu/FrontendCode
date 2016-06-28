/**
 * Created by user on 6/28/2016.
 */
hrApp.controller('FormsController',function ($scope) {
    $scope.submitted = function () {
        if($scope.myForm.input.$valid == true)
            alert('Submitted!')
    }
})