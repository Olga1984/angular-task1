import angular from 'angular';

export default angular.module('searchPage')
    .directive('swtFilterPanel', () => (
        {
            controller: 'FilterPanelController',
            controllerAs: 'filterPanel',
            templateUrl: 'filterPanel.html',
            scope: {
                filterGroups: '<',
                filtersCount: '<',
                activeFilters: '<',
            },
            bindToController: true,
        }
    ));
