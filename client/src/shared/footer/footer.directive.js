import angular from 'angular';

export default angular.module('shared')
    .directive('swtFooter', function () {
        return {
            restrict: 'E',
            templateUrl: 'footer.html',
        };
    });
