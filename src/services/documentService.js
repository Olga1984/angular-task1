import angular from 'angular';
import mockDocuments from '../assets/documents';

const documentModule = angular.module('document');
documentModule.service('documentService', ['$q', function documentService($q) {

    const documents = [];

    function getDocuments() {
        $q.resolve(mockDocuments).then(updatedDocs => documents.push(...updatedDocs));
    }
    return {
        documents,
        getDocuments,
    };
}]);

export default documentModule;
