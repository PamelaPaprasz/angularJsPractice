var myNinjaApp = angular.module('myNinjaApp', []);

// myNinjaApp.config(function(){


// });

// myNinjaApp.run(function(){


// });

myNinjaApp.controller('NinjaController', [ '$scope', function($scope){
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

	$scope.ninjas = [
		{
			name: "bori", 
			belt: "green",
			rate: 50,
			avaliable: false,
			thumb: "content/img/person-human-male-man.jpg"
		},
		{
			name: "rozi",
			belt: "black",
			rate: 30,
			avaliable: true,
			thumb: "content/img/pexels-photo-356147.jpeg"
		},
		{
			name: "mari", 
			belt: "violet",
			rate: 10,
			avaliable: true,
			thumb: "content/img/pexels-photo-418870.jpeg"
		},
		{
			name: "bubu",
			belt: "pink",
			rate: 200,
			avaliable: true,
			thumb:"content/img/pexels-photo-544716.jpeg"
		}
	];

}]);
