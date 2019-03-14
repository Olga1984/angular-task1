import angular from 'angular';

export default angular.module('searchPage')
    .directive('swtSearchNav', () => (
        {
            templateUrl: 'searchNav.html',
            scope: {
                activePage: '<',
                paginatedDocuments: '<',
                handleClick: '<',
            },
        }
    ));
