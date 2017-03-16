var app = angular.module("shopList",[]);

app.controller("shopL",function($scope,itemService){
	$scope.rRay = {};
	$scope.itemArray = itemService.getItem();

$scope.formSubmit = function(){
		itemService.addItem($scope.rRay);
		$scope.rRay = {};
	}
$scope.deleteItem = function(pIndex){
	itemService.removeItemAt(pIndex);
}


$scope.check = function (){
console.log('wes');

if(document.getElementById("myCheck").checked = true){
	    // this.splice();
}else{	
}


    };

});



	app.service('itemService',function(){
	var dataArray = [];

this.getItem = function(){
	return dataArray;

}

this.addItem = function(sItem){
	dataArray.push(sItem);
}

this.removeItemAt = function(pIndex){
	dataArray.splice(pIndex,1);
	
}

});