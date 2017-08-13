var app=angular.module("myApp",[]);
app.controller("newsController",function($scope,$http,base_url) {
		$http({
			method:'GET',
			url:base_url+'7d437a5ce92e459ab36527ab469b28da'
		}).then(function(response) {
			$scope.datas=response.data.articles;
			// console.log($scope.datas);
		});
});