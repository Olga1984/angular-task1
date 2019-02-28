import angular from 'angular';

export default angular.module('shared')
    .directive('swtHeader', function HeaderDirective() {
        return {
            restrict: 'E',
            templateUrl: 'header.html',
        };
    });
