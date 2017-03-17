var app = angular.module('employeeApp', []);

app.controller('employeeController', function($scope, employeeService) {
    $scope.employee = {};
    $scope.dataArr = employeeService.getEmployee();

    $scope.addEmployee = function() {
        employeeService.addEmployee($scope.employee);
        $scope.employee = {};
    }

    $scope.removeEmployee = function(pIndex) {
        employeeService.removeEmployee(pIndex);
    }

});

app.service('employeeService', function() {
    dataArr = [];

    this.getEmployee = function() {
        var str = localStorage.getItem("candyLs");
        dataArr = JSON.parse(str) || dataArr;
        return dataArr;
    }

    this.addEmployee = function(pData) {

        dataArr.push(pData);
        var str = JSON.stringify(dataArr);
        localStorage.setItem("candyLs", str);
    };

    this.removeEmployee = function(pIndex) {
        dataArr.splice(pIndex, 1);
        var str = JSON.stringify(dataArr);
        localStorage.setItem("candyLs", str);
    }
});

var delSel = function() {
    if (document.getElementByClass(dataArr) = checked = true) {
        console.log('working')
    } else {
        console.log('not working')
    };
};
