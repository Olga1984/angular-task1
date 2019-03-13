import angular from 'angular';

export default angular.module('core')
    .directive('swtApp', () => (
        {
            templateUrl: 'app.html',
            restrict: 'E',
        }
    ));
