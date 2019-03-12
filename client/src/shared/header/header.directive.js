import angular from 'angular';

export default angular.module('shared')
    .directive('swtHeader', () => (
        {
            restrict: 'E',
            templateUrl: 'header.html',
            controller: 'HeaderController',
            controllerAs: 'header',
        }
    ));
