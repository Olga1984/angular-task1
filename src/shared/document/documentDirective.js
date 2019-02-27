import angular from 'angular';

export default angular.module('shared')
    .directive('swtDocument', function () {
        return {
            restrict: 'E',
            templateUrl: 'document.html',
            scope: {
                showHeadline: '<headline',
                document: '='
            }
        }
    });
