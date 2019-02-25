import angular from 'angular';

const documentModule = angular.module('document', []);
documentModule.controller('DocumentController', ['documentService', function DocumentController(documentService) {
    this.documents = documentService.documents;
    documentService.getDocuments();

    this.filteredArticles = documentService.filteredArticles;
    this.filteredArticlesCount = documentService.filteredArticlesCount;
}]);

export default documentModule;
