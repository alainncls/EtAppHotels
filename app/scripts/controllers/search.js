'use strict';

angular.module('projetAngularJsApp')
.controller('SearchCtrl', function ($scope, $http, $location) {
	var urlJSON = 'http://public.opendatasoft.com/api/records/1.0/search?';
	urlJSON += 'dataset=hotels-classes-en-france';

	$scope.hotels = [];
	$scope.stars=[];
	$scope.nostars = [1,2,3,4,5];

	$scope.results = 12;
	$scope.start = 0;
	refresh();
	$scope.next = ($scope.hotels.length<$scope.results)?'':true;
	$scope.prev = ($scope.start===0)?'':true;

	function refresh(){
		var requete = urlJSON + '&rows='+$scope.results+'&start='+$scope.start;
		if($scope.stars.length!==0){
			requete += '&q=classement:' + $scope.stars.length;
		}
		
		$http.get(requete).success( function (data) {
			$scope.hotels = data.records;
			$scope.hotels.forEach( format, $scope.hotels);
		});
	}

	$scope.prev = function(){
		$scope.start-=$scope.results;
		refresh();
	};

	$scope.next = function(){
		$scope.start+=$scope.results;
		refresh();
	};
	
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
		$scope.note = (note===0)?'':note;
		refresh();
	};
});