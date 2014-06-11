'use strict';

angular.module('projetAngularJsApp')
.controller('SearchCtrl', function ($scope, $http, $location) {
	var urlJSON = 'http://public.opendatasoft.com/api/records/1.0/search?';
	urlJSON += 'dataset=hotels-classes-en-france';

	$scope.currentPage = 0;
	$scope.pageSize = 12;
	$scope.numberOfPages=function(){
		return Math.ceil($scope.filtered.length/$scope.pageSize);
	};

	$scope.hotels = [];
	$scope.stars=[];
	$scope.nostars = [1,2,3,4,5];

	$http.get(urlJSON + '&rows=0').success( function (data) {
		$scope.nbHotel = data.nhits;
		//Limitation du nb de résultats pour fluidité
		$scope.nbHotel=500;
		refresh();
	});

	

	function refresh(){
		$scope.hotels=[];
		var step = 50;
		var requete = urlJSON;
		for (var i = 0; i < $scope.nbHotel; i+=step) {
			requete = urlJSON + '&rows='+step+'&start='+i;

			// Il faudrait faire une focntion avec ce bloc
			$http.get(requete).success( function (data) {
				data.records.forEach( format, data.records);
				$scope.hotels = $scope.hotels.concat(data.records);
			});
		}
	}
	
	function format(element,index){
		this[index] = element.fields;
		this[index].recordid = element.recordid;
		this[index].geometry = element.geometry;
		this[index].classement = element.fields.classement.substring(0,1);
	}

	$scope.goTo = function (id) {
		$location.path('/hotel/' + id);
	};

	$scope.noter = function (note) {
		$scope.stars=[];
		$scope.nostars=[];
		for (var i = 1; i <= 5; i++) {
			if(i<=note){
				$scope.stars.push(i);
			}
			else{
				$scope.nostars.push(i);
			}
		}
		$scope.note = (note===0)?'0':note;
	};

}).filter('startFrom', function() {
	return function(input, start) {
		start = +start; //parse to int
		return input.slice(start);
	};
}).filter('filterStar', function() {
	return function(input, nbStar) {
		if(nbStar===0){
			return input;
		}
		else{
			var tempInput=[];
			angular.forEach(input, function(value, key) {
				if(value.classement==nbStar){
					this.push(value);
				}
			}, tempInput);
			return tempInput;
		}
	};
});