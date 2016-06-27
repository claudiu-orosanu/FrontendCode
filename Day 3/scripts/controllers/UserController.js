/**
 * Created by Claudiu on 6/27/2016.
 */
hrApp.controller('UserController',function ($scope,$location,userService) {
    $scope.userList = userService.userList;
    $scope.visible = true;

    $scope.back = function () {
        $location.url('/');
    };
    $scope.reset = function () {
        $scope.Firstname = '';
        $scope.Lastname = '';
        $scope.Id = '';
        $scope.Age = '';
    };
    $scope.save = function () {
        $scope.userList.push({
            firstname: $scope.Firstname,
            lastname: $scope.Lastname,
            id:$scope.Id,
            age: $scope.Age
        });
        alert("User has beed added!");
    };
    $scope.show = function () {
        if($scope.visible == true)
            $scope.visible = false;
        else $scope.visible = true;
    }
});

