import angular from 'angular';

export default angular.module('home')
    .controller('PopularDocumentsController', ['documentService', function PopularDocuments(documentService) {
        this.documents = [];
        documentService.getPopularDocuments()
            .then((res) => {
                this.documents = res.data;
            });
    }]);
