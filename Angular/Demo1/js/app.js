var app = angular.module('employeeApp', ['firebase']);

app.controller('employeeController', function($scope, $firebaseArray) {

var ref = firebase.database().ref().child('employees');

$scope.employees = $firebaseArray(ref);


$scope.addEmployee = function() {
    $scope.employees.$add({
      Employee: $scope.employee.name,
      Phone number: $scope.employee.num,
      title: $scope.employee.title,
      street: $scope.employee.street,
      City: $scope.employee.city,
      State: $scope.employee.state,
    });
};

// closes employeeController
)};
