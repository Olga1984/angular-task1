import angular from 'angular';
import { mockDocuments } from '../assets/documents';

const documentModule = angular.module('document', []);
documentModule.service('documentService', function documentService() {
    function getDocuments() {
        return Promise.resolve(mockDocuments);
    }
    return {
        getDocuments
    }
});

export default documentModule;
