import angular from 'angular';

export default angular.module('searchPage')
    .directive('swtSearchPage', () => (
        {
            templateUrl: 'searchPage.html',
            restrict: 'E',
            controller: 'SearchPageController',
            controllerAs: 'searchPageCtrl',
        }
    ));
