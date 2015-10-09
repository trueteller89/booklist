'use strict';
var writersApp = angular.module("writersApp", ['ngRoute']);
writersApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
  $routeProvider
      .when('/writers',{
        templateUrl:'partials/writer-list.html',
        controller:'WriterListCtrl'
      })
      .when('/writers/:id',{
        templateUrl:'partials/writer-detail.html',
        controller:'WriterDetailCtrl'
      })
	  .when('/books/:id',{
        templateUrl:'partials/book-detail.html',
        controller:'BookDetailCtrl'
      })
	    .when('/books',{
        templateUrl:'partials/books-list.html',
        controller:'BookListCtrl'
      })
	     .when('/genre',{
        templateUrl:'partials/genre-books-list.html',
        controller:'GenreBookListCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
}]);
writersApp.controller('WriterDetailCtrl', ['$rootScope','$scope', '$http', '$location', '$routeParams', function($rootScope, $scope, $http, $location, $routeParams) {
	for (var i=0;i<$rootScope.writers.length;i++){
	if (Number($routeParams.id)==Number($rootScope.writers[i].id)){
	$scope.writer=$rootScope.writers[i];
	}
	}

 }]);
writersApp.controller('WriterListCtrl', ['$rootScope','$scope', '$http', '$location', '$routeParams', function($rootScope, $scope, $http, $location, $routeParams) {
	for (var i=0;i<$rootScope.writers.length;i++){
	if (Number($routeParams.id)==Number($rootScope.writers[i].id)){
	$scope.writer=$rootScope.writers[i];
	}
	}
 }]);

writersApp.controller('BookDetailCtrl', ['$rootScope','$scope', '$http', '$location', '$routeParams', function($rootScope, $scope, $http, $location, $routeParams) {

	for (var i=0;i<$rootScope.writers.length;i++){
	for (var j=0;j<$rootScope.writers[i].bibliography.length;j++){
	if (Number($routeParams.id)==Number($rootScope.writers[i].bibliography[j].bookId)){
	$scope.book=$rootScope.writers[i].bibliography[j];
	$scope.book.author=$rootScope.writers[i].name;
	$scope.book.authorId=$rootScope.writers[i].id;
	}
	}
	}
	$rootScope.currentGenre=$scope.book.genre;
	 }]);
 writersApp.controller('BookListCtrl', ['$rootScope','$scope', '$http', '$location', '$routeParams', function($rootScope, $scope, $http, $location, $routeParams) {
	 $scope.books=[];
	
	 var k=0;
	for (var i=0;i<$rootScope.writers.length;i++){
	for (var j=0;j<$rootScope.writers[i].bibliography.length;j++){
		k=$scope.books.length;
$scope.books[k]=$rootScope.writers[i].bibliography[j];
$scope.books[k].author=$rootScope.writers[i].name;
$scope.books[k].authorId=$rootScope.writers[i].id;
	}
	}
 }]);
  writersApp.controller('GenreBookListCtrl', ['$rootScope','$scope', '$http', '$location', '$routeParams', function($rootScope, $scope, $http, $location, $routeParams) {
	 $scope.books=[];
	
	 var k=0;
	for (var i=0;i<$rootScope.writers.length;i++){
	for (var j=0;j<$rootScope.writers[i].bibliography.length;j++){
		k=$scope.books.length;
$scope.books[k]=$rootScope.writers[i].bibliography[j];
$scope.books[k].author=$rootScope.writers[i].name;
$scope.books[k].authorId=$rootScope.writers[i].id;
	}
	}
 }]);
writersApp.controller('SetCtrl', ['$rootScope', '$scope','$http', '$location', function($rootScope, $scope, $http, $location) {
  $http.get('info/writers.json').success(function(data, status, headers, config) {
    $rootScope.writers = data;
  });
  }]);
