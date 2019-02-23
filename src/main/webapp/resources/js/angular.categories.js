'use strict';
var app = angular.module('category', [ 'ui.bootstrap' ]);

app.controller('addEditDeleteCategoriesController', function($scope, $http) {
	var element = angular.element('#category_form');

	$scope.doAdd = function() {
		element.modal('show');
	}
	$scope.doEdit = function() {
		element.modal('show');
	}
	$scope.doDelete = function() {
		element.modal('show');
	}
});
app.controller('addEditController', function($scope, $http) {
	$scope.saveCategory = function() {
		if (typeof $scope.name === "undefined") {
			$scope.validation = "Name is requered";
			return;
		}
		if (typeof $scope.translatedName === "undefined") {
			$scope.translatedName = "";
		}
		if (typeof $scope.sortOrder === "undefined") {
			$scope.sortOrder = "0";
		}
		if (typeof $scope.visible === "undefined") {
			$scope.visible = "false";
		}
		var url = 'http://localhost:8080/ebangla/saveCategory/?name=' + $scope.name + '&translatedName=' + $scope.translatedName + '&sortOrder=' + $scope.sortOrder + '&visible=' + $scope.visible;
		$http.post(url).then(function(response) {
			$scope.validation = response.data.message;
		});
	}
});
app.controller('getAllCategoriesController', function($scope, $http) {
	$scope.totalCount = 0; // Total number of items in all pages. initialize as
	$scope.actionCommand = 'firstPage';

	$scope.getAllCategories = function() {
		var url = 'http://localhost:8080/ebangla/categoryList/?actionCommand=' + $scope.actionCommand + '&nameSearch=' + $scope.nameSearch;
		var config = {
			headers : {
				'Content-Type' : 'application/json;charset=utf-8;'
			}
		}

		$http.get(url, config).then(function(response) {
			if (response.data.status == "ok") {
				$scope.categories = response.data;
				$scope.startNumber = response.data.model.startNumber;
				$scope.endNumber = response.data.model.endNumber;
				$scope.totalNumber = response.data.model.totalNumber;
				$scope.btnFirst = response.data.model.hasPrevious;
				$scope.btnPrev = response.data.model.hasPrevious;
				$scope.btnNext = response.data.model.hasNext;
				$scope.btnLast = response.data.model.hasNext;
			} else if (response.data.status == "err") {
				$scope.err = response.data.message;
			}
		}, function(err) {
		});
	}

	// Loading categories list on first time
	$scope.getAllCategories();

	// This method is calling from first button
	$scope.showFirstPage = function() {
		$scope.actionCommand = 'firstPage';
		$scope.getAllCategories();
	};
	// This method is calling from prev button
	$scope.showPrevPage = function() {
		$scope.actionCommand = 'prevPage';
		$scope.getAllCategories();
	};
	// This method is calling from next button
	$scope.showNextPage = function() {
		$scope.actionCommand = 'nextPage';
		$scope.getAllCategories();
	};
	// This method is calling from last button
	$scope.showLastPage = function() {
		$scope.actionCommand = 'lastPage';
		$scope.getAllCategories();
	};
	// This method is calling from search button
	$scope.showSearchResult = function() {
		$scope.actionCommand = 'searchButton';
		$scope.getAllCategories();
	}
});
