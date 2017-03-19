var app = angular.module('employeeApp', ['firebase']);

app.controller('employeeController', function($scope, $firebaseArray) {

var ref = firebase.database().ref().child('employees');

$scope.employees = $firebaseArray(ref);


$scope.addEmployee = function() {
    $scope.employees.$add({
      name: $scope.employee.name,
      number: $scope.employee.num,
      title: $scope.employee.title,
      street: $scope.employee.street,
      City: $scope.employee.city,
      State: $scope.employee.state
    });
    $scope.employee.name = "";
    $scope.employee.num = "";
    $scope.employee.title = "";
    $scope.employee.street = "";
    $scope.employee.city = "";
    $scope.employee.state = "";
};
// closes employeeController
});
