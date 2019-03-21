import angular from 'angular';
import { parseFilters } from '../helpers';

export default angular.module('searchPage')
    .controller('SearchPageController', [
        '$translate',
        '$state',
        'documentService',
        'filterPanelService',
        '$transitions',
        function SearchPageController($translate, $state, documentService, filterPanelService, $transitions) {
            this.results = [];
            this.query = $state.params.query;
            this.filters = $state.params.filters;
            this.filtersArr = parseFilters(this.filters);
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
                    const availableFilters = [];
                    this.filtersArr.forEach((filter) => {
                        if (!this.filtersCount[filter]) {
                            return;
                        }
                        availableFilters.push(filter);
                    });
                    const availableFiltersStr = availableFilters.join(',');
                    if (availableFiltersStr && availableFiltersStr !== this.filters) {
                        $state.go('search', {
                            filters: availableFiltersStr,
                        });
                    }
                });
            };
            filterPanelService.getFilters().then((response) => {
                const filterGroups = response.data;
                this.filterGroups = filterGroups;
                searchDocuments(this.query, this.filtersArr, true);
                $transitions.onRetain({
                    retained: 'search',
                }, (transition) => {
                    const params = transition.params();
                    const { query: newQuery, filters: newFilters } = params;
                    if (this.query !== newQuery || this.filters !== newFilters) {
                        this.filters = newFilters;
                        this.filtersArr = parseFilters(this.filters);
                        const requestFiltersCount = this.query !== newQuery;
                        this.query = newQuery;
                        searchDocuments(newQuery, this.filtersArr, requestFiltersCount);
                    }
                });
            });
        }]);
