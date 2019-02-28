import angular from 'angular';

export default angular.module('home')
    .directive('swtHome', () => (
        {
            templateUrl: 'home.html',
            restrict: 'E',
        }
    ));
