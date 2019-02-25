import angular from 'angular';

const documentModule = angular.module('document', []);
documentModule.controller('DocumentController', ['documentService', function DocumentController(documentService) {
    this.documents = documentService.documents;
    documentService.getDocuments();
}]);

export default documentModule;
