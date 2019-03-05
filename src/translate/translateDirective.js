import angular from 'angular';

export default angular.module('translate')
    .directive('swtTranslate', () => (
        {
            templateUrl: 'translate.html',
            restrict: 'E',
            controller: 'TranslateController',
            controllerAs: 'translateCtrl',
        }
    ));
