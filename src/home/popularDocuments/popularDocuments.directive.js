import angular from 'angular';

export default angular.module('home')
    .directive('swtPopularDocuments', () => (
        {
            templateUrl: 'popularDocuments.html',
            restrict: 'E',
            controller: 'PopularDocumentsController',
            controllerAs: 'popular',
        }
    ));
