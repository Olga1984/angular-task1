import angular from 'angular';

export default angular.module('searchPage')
    .directive('swtSearchResults', () => (
        {
            controller: 'SearchResultsController',
            controllerAs: 'searchResults',
            templateUrl: 'searchResults.html',
            scope: {
                documents: '<',
            },
        }
    ));
