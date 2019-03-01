import angular from 'angular';

export default angular.module('shared')
    .directive('swtSearchbar', () => {
        return {
            restrict: 'E',
            templateUrl: 'searchbar.html',
        }
    });
