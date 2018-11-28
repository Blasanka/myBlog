var app = angular.module('app', [
    'ngRoute',
    'app.controllers'
]).config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'views/posts.html',
            controller: 'PostController'
        }).when('/post/:id', {
            templateUrl: 'partials/singlepost.html',
            controller: 'SinglePostController'
        }).when('/page/:id',{
            templateUrl: 'views/page.html',
            controller: 'PageController'
        }).when('/subpage/:id',{
            templateUrl: 'views/subpage.html',
            controller: 'SubPageController'
        }).when('/category/:id',{
            templateUrl: 'views/category.html',
            controller: 'CategoriesController'
        }).otherwise({
            redirectTo: '/'
        });
    }]);

