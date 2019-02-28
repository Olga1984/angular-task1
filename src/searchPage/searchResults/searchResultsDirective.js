import angular from 'angular';

export default angular.module('searchPage')
    .directive('swtSearchResults', () => (
        {
            controller: 'SearchResultsController',
            controllerAs: 'search',
            templateUrl: 'searchResults.html',
        }
    ));
