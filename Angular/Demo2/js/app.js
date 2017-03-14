var app = angular.module("myApp",["ngRoute"]);

app.config(function($routeProvider){
    $routeProvider
         .when("/list", { 
        controller:"listController",
        templateUrl:"partials/list.html"
    })
            .when("/form", { 
                  controller:"formController",
                 templateUrl:"partials/form.html"
    })
            .when("/details/:songIdx",{
                controller:"Detailcontroller",
                templateUrl:"partials/detail.html"
            })
            .when('/edit/:songIdx',{
              controller : "EditDataController",
                 templateUrl : "partials/form.html"
                 
  })
        .otherwise({
        redirectTo:"/list"
    });
    
})

app.controller('EditDataController', function($scope,songService,$routeParams){
  $scope.song = songService.getSongAt($routeParams.songIdx);

  $scope.submitData = function(){
    songService.updateSongAt($scope.song, $routeParams.songIdx);
    document.location.hash = '#/detail/' + $routeParams.songIdx;
  };
});

app.controller("Detailcontroller",function($scope,$routeParams,songService){
    $scope.songIdx = $routeParams.songIdx;
    $scope.song = songService.getSongAt($routeParams.songIdx);
});


app.controller("formController",function($scope, songService){
     $scope.song = {};

     $scope.addSong = function(){
            songService.addSong($scope.song);
            $scope.song = {};
            document.location.hash = "#/list";
        };
});


app.controller("listController",function($scope, songService){

    $scope.songArray = songService.getSongs();

     $scope.removeSong = function(pIndex){
            songService.removeSong(pIndex);                  
    };

    $scope.editSong = function(pIndex){
        console.log('working');
    };
});



app.service('songService', function(){
    
    var songArray = [];
    
    this.getSongs = function(){
        var str = localStorage.getItem("songLS");
        songArray =  JSON.parse(str) || songArray;
       return songArray; 
    };


    this.getSongAt = function(idx){
        return this.getSongs()[idx];
    }
    
    this.addSong = function(item){
        songArray.push(item);
        var str = JSON.stringify(songArray);
        localStorage.setItem("songLS", str);
    };
    
    this.removeSong = function(pIndex){
        songArray.splice(pIndex, 1);
        var str = JSON.stringify(songArray);
        localStorage.setItem("songLS", str);
       
    }

    this.updateSongAt = function(dInput,idx){
    dataArray.splice(idx,1,dInput);
   }
});

