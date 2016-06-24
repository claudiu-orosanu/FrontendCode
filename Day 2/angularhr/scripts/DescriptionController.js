/**
 * Created by user on 6/24/2016.
 */
hrApp.controller('DescriptionController', function($scope,$rootScope) {
    $scope.title = "Two Way Binding Demo";
    $scope.childtemplate = 'templates/childscope.html';
    $scope.descriptionShow = true;
    $scope.resetFirstVariable = function() {
        $scope.firstVariable = undefined;
    };
    $scope.setFirstVariable = function(val) {
        $scope.firstVariable = val;
    };
    $scope.toggleDescriptionShow = function() {
        if($scope.descriptionShow == true)
        $scope.descriptionShow = false;
        else $scope.descriptionShow = true;
    }

});