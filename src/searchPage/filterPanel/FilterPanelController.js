import angular from 'angular';

export default angular.module('searchPage')
    .controller('FilterPanelController', ['filterPanelService', function FilterPanelController(filterPanelService) {
        this.filteredArticles = filterPanelService.filteredArticles;
    }]);
