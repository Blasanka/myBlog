var app = angular.module('app', []);
app.controller('PostCtrl', function ($scope, $http) {
    $scope.posts = [];
    $http.get('posts.json').then(
        function (response) {
            $scope.posts = response.data;
        },
        function (error){
            console.log(error, 'can not get data.');
        }
    );
     
    $scope.tab = 'blog';
      
    $scope.selectTab = function(setTab){
        $scope.tab = setTab;
    };
    
    $scope.isSelected = function(checkTab){
      return $scope.tab === checkTab;
    };
});

app.controller('CommentController', function($scope){
    $scope.comments = {};
    $scope.addComment = function(post){
        $scope.comment.createdOn = Date.now();
        $scope.comments.push($scope.comment);
        $scope.comment ={};
    };
  });

