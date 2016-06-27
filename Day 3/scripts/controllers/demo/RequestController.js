hrApp.controller('RequestController', ['$scope','$http', function($scope,$http){

    $scope.jobList = [];
    $http.get("http://hrapp-zth.rhcloud.com/hrapp/jobs")
        .success(function(data,status,header,config){
        $scope.jobList = data;
        })
        .error(function(data,status,header,config){
            alert("Error:" + status)
        });

//    TODO #10 - make AJAX call


}]);
