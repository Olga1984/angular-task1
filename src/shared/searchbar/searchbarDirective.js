import angular from 'angular';

export default angular.module('shared')
    .directive('swtSearchbar', function() {
        return {
            restrict: 'E',
            templateUrl: 'searchbar.html',
        }
    });
