
weatherApp.controller('weatherController',function($scope,$http,factoryCities){
  $scope.cities=[];
  $scope.clearList=function(){
     $scope.cities=factoryCities.removeList($scope.cities)
  }
  $scope.submitForm=function(){
    $http.get('http://api.openweathermap.org/data/2.5/weather?q='+$scope.weather.city+'&units=metric&APPID=8d9223b647133c51d397626dcaa319ce').then(function(response){
      $scope.cities.push(response.data)
    })
  }
  
})