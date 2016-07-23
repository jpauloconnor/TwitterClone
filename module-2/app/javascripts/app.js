var app = angular.module('chirpApp', []);
								//$scope links controller to view
								//This will contain all models

app.controller('mainController', function($scope){
	var $scope.posts = [];
	var $scope.newPost = {created_by: '', text: '', created_at: ''};
});

//Binding
	//ng-model for two way data binding - use for user input
	//ng-bind for one way data binding - useful for displaying static data
