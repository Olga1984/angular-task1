import angular from 'angular';

export default angular.module('searchbar')
    .directive('ngSearchbar', function() {
        return {
            templateUrl: 'searchbar.html'
        }
    });
