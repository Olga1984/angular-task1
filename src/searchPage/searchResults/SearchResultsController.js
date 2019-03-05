import angular from 'angular';
import { mockDocuments } from '../../assets/documents';

export default angular.module('searchPage')
    .controller('SearchResultsController', function SearchResultsController() {
        const resultsPerPage = 8;
        this.paginatedDocuments = mockDocuments.reduce((acc, item, indx) => {
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
