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
            this.query = query;
            this.filters = filters;
            this.filtersCount = {};
            this.paginatedDocuments = [];
            this.filterGroups = [];
            const resultsPerPage = 8;
            const searchDocuments = (query, filters, countFilters) => {
                documentService.searchDocuments(query, filters, countFilters).then((response) => {
                    const { documents, filtersCount } = response.data;
                    this.filtersCount = filtersCount || this.filtersCount;
                    this.results = documents;
                    this.paginatedDocuments = documents.reduce((acc, item, indx) => {
                        const currentChunk = Math.trunc(indx / resultsPerPage);
                        if (!acc[currentChunk]) {
                            acc.push([]);
                        }
                        acc[currentChunk].push(item);
                        return acc;
                    }, []);
                });
            };
            filterPanelService.getFilters().then((response) => {
                const filterGroups = response.data;
                this.filterGroups = filterGroups;
                searchDocuments(query, filtersArr, true);
                $transitions.onRetain({
                    retained: 'search',
                }, (transition) => {
                    const params = transition.params();
                    const { query, filters } = params;
                    if (this.query !== query || this.filters !== filters) {
                        this.filters = filters;
                        const filtersArr = (filters && filters.split(',').map(Number)) || [];
                        const requestFiltersCount = this.query !== query;
                        searchDocuments(query, filtersArr, requestFiltersCount);
                        this.query = query;
                    }
                });
            });
        }]);
