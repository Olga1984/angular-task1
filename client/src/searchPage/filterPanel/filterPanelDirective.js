import angular from 'angular';

export default angular.module('searchPage')
    .directive('swtFilterPanel', () => (
        {
            controller: 'FilterPanelController',
            controllerAs: 'filter',
            templateUrl: 'filterPanel.html',
        }
    ));
