angular.module('app.controllers', [
    'app.directives'
    ]).controller('PostController', ['$scope', '$http', function ($scope, $http) {
        $scope.posts = [];
        $http.get('data/posts.json').then(
            function (response) {
                $scope.posts = response.data;
            },
            function (error){
                console.log(error, 'can not get data.');
            }
        );
    }]).controller('SinglePostController', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
        $http.get('data/posts.json').then(
            function (response) {
                $scope.post = response.data[$routeParams.id];
            },
            function (error) {
                console.log(error);
            }
        );
    }]).controller('PageController', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
        $http.get('data/pages.json').then(
            function (response) {
                $scope.page = response.data[$routeParams.id];
            },
            function (error) {
                console.log(error);
            }
        );
    }]).controller('SubPageController', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
        $http.get('data/subpages.json').then(
            function (response) {
                $scope.subpage = response.data[$routeParams.id];
            },
            function (error) {
                console.log(error);
            }
        );
    }]).controller('CategoriesController', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
        $http.get('data/categories.json').then(
            function (response) {
                $scope.category = response.data[$routeParams.id];
            },
            function (error) {
                console.log(error);
            }
        );
    }]);

app.controller('CommentController', function($scope){
    $scope.comments = {};
    $scope.addComment = function(post){
        $scope.comment.createdOn = Date.now();
        $scope.comments.push($scope.comment);
        $scope.comment ={};
    };
    });

// app.controller('PostCtrl', function ($scope, $http) {
    
     
//     $scope.tab = 'blog';
      
//     $scope.selectTab = function(setTab){
//         $scope.tab = setTab;
//     };
    
//     $scope.isSelected = function(checkTab){
//       return $scope.tab === checkTab;
//     };
// });