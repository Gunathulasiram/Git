var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
	$routeProvider
	.when("/", {
		templateUrl : "responsive.html",
	})
	.when("/basic", {
		templateUrl : "index.html",
	})
		.when("/concepts", {
		templateUrl : "services.html",
	});
});
