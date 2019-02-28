import angular from 'angular';
import { mockDocuments } from '../../assets/documents';

export default angular.module('searchPage')
    .controller('SearchResultsController', function SearchResultsController() {
        this.results = mockDocuments;
    });
