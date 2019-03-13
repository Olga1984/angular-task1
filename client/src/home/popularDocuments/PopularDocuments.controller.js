import angular from 'angular';
import { mockDocuments } from '../../assets/documents';

export default angular.module('home')
    .controller('PopularDocumentsController', function PopularDocuments() {
        this.documents = mockDocuments;
    });
