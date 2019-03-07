
<!DOCTYPE html>
<html>
<head>
<base href="https://demos.telerik.com/kendo-ui/progressbar/angular">
<style>
html {
	font-size: 14px;
	font-family: Arial, Helvetica, sans-serif;
}
</style>
<title></title>
<link rel="stylesheet"
	href="https://kendo.cdn.telerik.com/2019.1.220/styles/kendo.common-material.min.css" />
<link rel="stylesheet"
	href="https://kendo.cdn.telerik.com/2019.1.220/styles/kendo.material.min.css" />
<link rel="stylesheet"
	href="https://kendo.cdn.telerik.com/2019.1.220/styles/kendo.material.mobile.min.css" />

<script src="https://kendo.cdn.telerik.com/2019.1.220/js/jquery.min.js"></script>
<script src="https://kendo.cdn.telerik.com/2019.1.220/js/angular.min.js"></script>
<script
	src="https://kendo.cdn.telerik.com/2019.1.220/js/kendo.all.min.js"></script>


</head>
<body>
	<div id="example" ng-app="KendoDemos">
		<div class="demo-section k-content" ng-controller="MyCtrl">
			<h4>{{status}}</h4>
			<div kendo-progress-bar="progressBar" k-min="0" k-max="100"
				ng-model="progress" style="width: 100%;"></div>
		</div>
	</div>

	<script>
		angular.module("KendoDemos", [ "kendo.directives" ]).controller("MyCtrl", function($scope, $timeout) {
			$scope.status = "Working...";
			$scope.progress = 0;
			$scope.labels = [ "Installing start menu items", "Registering components", "Having a coffee" ];
			var i = -1;
			function update() {
				$scope.progress += random(0, 10);
				if ($scope.progress > random(70, 90)) {
					$scope.progress = random(5, 50);
					i = (i + 1) % $scope.labels.length;
					$scope.status = $scope.labels[i];
				}
				$timeout(update, 200);
			}
			function random(a, b) {
				return a + Math.floor(Math.random() * (b - a));
			}
			update();
		})
	</script>


</body>
</html>
