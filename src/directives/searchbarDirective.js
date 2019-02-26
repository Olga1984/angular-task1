import angular from 'angular';

export default angular.module('searchbar')
    .directive('ngSearchbar', function() {
        return {
            restrict: 'E',
            templateUrl: 'searchbar.html',
        }
    });
