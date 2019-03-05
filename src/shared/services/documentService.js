import angular from 'angular';
import {mockDocuments} from '../../assets/documents';

export default angular.module('shared')
    .service('documentService', ['$q', function documentService($q) {
        const documents = [];
        function getDocuments() {
            return $q.resolve(mockDocuments);
        }
        function searchDocuments(query) {
            return $q.resolve(mockDocuments);
        }
        return {
            documents,
            getDocuments,
            searchDocuments,
        };
    }]);

