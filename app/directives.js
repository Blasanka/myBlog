angular.module('app.directives', [])
    .directive('sidebar', [function () {
        return {
            restrict: 'E',
            controller: ['$scope', '$http', function ($scope, $http) {
                $http.get('data/pages.json').then(
                    function (response) {
                        $scope.pages = response.data;
                    },
                    function (error){
                        console.log(error, 'can not get pages.');
                    }
                );
                $http.get('data/subpages.json').then(
                    function (response) {
                        $scope.subpages = response.data;
                    },
                    function (error){
                        console.log(error, 'can not get subpages.');
                    }
                );
            }],
            // template: '<h1>Sidebar</h1>',
            templateUrl: 'partials/sidebar.html',
            link: function ($scope, iElm, iAttrs, controller) {

            }
        };
    }])
    .directive('navigationbar', [function () {
        return {
            restrict: 'E',
            controller: ['$scope', '$http', function ($scope, $http) {
                $http.get('data/categories.json').then(
                    function (response) {
                        $scope.categories = response.data;
                    },
                    function (error){
                        console.log(error, 'can not get categories.');
                    }
                );
            }],
            // template: '<h1>Sidebar</h1>',
            templateUrl: 'partials/navigationbar.html',
            link: function ($scope, iElm, iAttrs, controller) {

            }
        };
    }]);