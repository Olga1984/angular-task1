import angular from 'angular';

export default angular.module('shared')
    .directive('swtSearchbar', () => (
        {
            restrict: 'E',
            templateUrl: 'searchbar.html',
            controller: 'SearchbarController',
            controllerAs: 'searchbar',
        }
    ));
