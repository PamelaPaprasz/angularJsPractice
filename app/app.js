var myNinjaApp = angular.module('myNinjaApp', ['ngRoute', 'ngAnimate']);

myNinjaApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){

	$locationProvider.html5Mode(true);

	$routeProvider
		.when('/home', {
			templateUrl: 'views/home.html',
			controller: 'NinjaController'
		})
		.when('/contact', {
			templateUrl: 'views/contact.html',
			controller: 'ContactController'
		})
		.when('/contact-success', {
			templateUrl: 'views/contact-success.html',
			controller: 'ContactController'
		})
		.when('/directory', {
			templateUrl: 'views/directory.html',
			controller: 'NinjaController'
		}).otherwise({
			redirectTo: '/home'
		});

}]);

// myNinjaApp.run(function(){


// });

myNinjaApp.directive('randomNinja', [function(){

	return {
		restrict: 'E', 
		scope: {
			ninjas: '=', 
			title: '='
		},
		templateUrl: 'views/random.html',
		transclude: true,
		replace: true,
		controller: function($scope){
			$scope.random = Math.floor(Math.random() * 4);
		}
	};

}]);

myNinjaApp.controller('NinjaController', [ '$scope', '$http', function($scope, $http){


	// $scope.order = "name";
	// $scope.message = "hey";

	$scope.removeNinja = function(ninja){
		var removedNinja = $scope.ninjas.indexOf(ninja);
		$scope.ninjas.splice(removedNinja, 1)
	};

	$scope.addNinja = function(){
		$scope.ninjas.push({
			name: $scope.newninja.name,
			belt: $scope.newninja.belt,
			rate: parseInt($scope.newninja.rate),
			avaliable: true
		});

		$scope.newninja.name = "";
		$scope.newninja.belt= "";
		$scope.newninja.rate = "";
	};

	$scope.removeAll = function(){
		$scope.ninjas = [];
	}

	// $scope.ninjas = [
	// 	{
	// 		name: "bori", 
	// 		belt: "green",
	// 		rate: 50,
	// 		avaliable: false,
	// 		thumb: "content/img/person-human-male-man.jpg"
	// 	},
	// 	{
	// 		name: "rozi",
	// 		belt: "black",
	// 		rate: 30,
	// 		avaliable: true,
	// 		thumb: "content/img/pexels-photo-356147.jpeg"
	// 	},
	// 	{
	// 		name: "mari", 
	// 		belt: "violet",
	// 		rate: 10,
	// 		avaliable: true,
	// 		thumb: "content/img/pexels-photo-418870.jpeg"
	// 	},
	// 	{
	// 		name: "bubu",
	// 		belt: "pink",
	// 		rate: 200,
	// 		avaliable: true,
	// 		thumb: "content/img/pexels-photo-544716.jpeg"
	// 	}
	// ];

	// console.log(angular.toJson($scope.ninjas));


	$http.get('data/ninjas.json').then(function(data){
		$scope.ninjas = data.data;
	});

}]);

myNinjaApp.controller('ContactController', ['$scope', '$location', function($scope, $location){

	$scope.sendMessage = function() {
		$location.path('/contact-success');
	};

}]);
