"use strict"
angular.module("cvModule",['ngRoute'])
.config(function ($routeProvider){
	$routeProvider
	.when("/home", {
		templateUrl: 'view/home.html',
		controller: 'cvModController'
	})
	.when("/contact", {
		templateUrl: 'view/contact.html'
	})
	.otherwise({
		redirectTo: '/home'
	});
})