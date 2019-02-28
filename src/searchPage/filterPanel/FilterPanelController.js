import angular from 'angular';

export default angular.module('searchPage')
    .controller('FilterPanelController',['filterPanelService',  function FilterPanelController(filterPanelService) {
        this.filteredArticles = filterPanelService.filteredArticles;
        // this.filteredArticles = {
        //     filteredCategoryName: "Journals",
        //     filteredGroup: [
        //         {
        //             headline: "Journals happend",
        //             text: "Something re",
        //         }
        //     ],
        // }
    }]);
