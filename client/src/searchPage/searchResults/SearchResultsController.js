import angular from 'angular';

export default angular.module('searchPage')
    .controller('SearchResultsController', ['$state', 'documentService', function SearchResultsController($state, documentService) {
        const { query } = $state.params;
        this.results = [];
        const resultsPerPage = 8;
        documentService.searchDocuments(query).then((documents) => {
            this.paginatedDocuments = documents.reduce((acc, item, indx) => {
                const currentChunk = Math.trunc(indx / resultsPerPage);
                if (!acc[currentChunk]) {
                    acc.push([]);
                }
                acc[currentChunk].push(item);
                return acc;
            }, []);
            [this.results] = this.paginatedDocuments;
            this.changePage = (page) => {
                this.results = this.paginatedDocuments[page];
            };
        });
    }]);
