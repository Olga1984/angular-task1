import angular from 'angular';

export default angular.module('searchPage')
    .controller('SearchPageController', [
        '$translate',
        '$state',
        'documentService',
        'filterPanelService',
        '$transitions',
        function SearchPageController($translate, $state, documentService, filterPanelService, $transitions) {
            const { query, filters } = $state.params;
            const filtersArr = (filters && filters.split(',').map(Number)) || [];
            this.results = [];
            this.activePage = 0;
            this.paginatedDocuments = [];
            this.displayedDocuments = [];
            this.filterGroups = [];
            const resultsPerPage = 8;
            const searchDocuments = (query, filters) => {
                documentService.searchDocuments(query, filters).then((response) => {
                    const documents = response.data;
                    this.results = documents;
                    this.paginatedDocuments = documents.reduce((acc, item, indx) => {
                        const currentChunk = Math.trunc(indx / resultsPerPage);
                        if (!acc[currentChunk]) {
                            acc.push([]);
                        }
                        acc[currentChunk].push(item);
                        return acc;
                    }, []);
                    [this.displayedDocuments] = this.paginatedDocuments;
                    this.activePage = 0;
                    this.changePage = (page) => {
                        this.activePage = page;
                        this.displayedDocuments = this.paginatedDocuments[page];
                    };
                });
            };
            filterPanelService.getFilters().then((response) => {
                const filterGroups = response.data;
                this.filterGroups = filterGroups;
                searchDocuments(query, filtersArr);
                $transitions.onRetain({
                    to: 'search',
                }, (transition) => {
                    const { query, filters} = transition.params();
                    const filtersArr = (filters && filters.split(',').map(Number)) || [];
                    searchDocuments(query, filtersArr);
                });
            });
        }]);
