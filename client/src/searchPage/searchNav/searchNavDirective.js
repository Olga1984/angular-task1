import angular from 'angular';

export default angular.module('searchPage')
    .directive('swtSearchNav', () => (
        {
            templateUrl: 'searchNav.html',
            controller: 'SearchNavController',
            controllerAs: 'searchNav',
            scope: {
                activePage: '<',
                paginatedDocuments: '<',
                handleClick: '<',
            },
        }
    ));
