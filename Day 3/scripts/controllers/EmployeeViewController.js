hrApp.controller('EmployeeViewController', ['$scope', '$http', '$routeParams', '$location','commonResourcesFactoryBackup',
    function($scope, $http, $routeParams, $location,commonResourcesFactoryBackup) {

        $scope.employee = {};


        // TODO #HR6 get employee by id
        $http.get(commonResourcesFactoryBackup.findOneEmployeeUrl + $routeParams.employeeid)
            .success(function(data,status,header,config){
                $scope.employee = data;
            })
            .error(function(data,status,header,config){
                alert("Error:" + status)
            });


        $scope.back = function() {
            // TODO back to Employee List page
            $location.url('/employeeslist');
        }

    }]);