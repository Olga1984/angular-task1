import angular from 'angular';
import { SERVER_URL } from '../../config';

export default angular.module('shared')
    .service('documentService', ['$http', function documentService($http) {
        function getPopularDocuments() {
            return $http.get(`${SERVER_URL}/documents/popular`);
        }
        function searchDocuments(query, filtersArray) {
            let filterStr = '';
            if (filtersArray) {
                filterStr = filtersArray.reduce((acc, filterId) => (
                    `${acc}&filterId=${filterId}`
                ), '');
            }
            return $http.get(`${SERVER_URL}/documents?search=${query}${filterStr}`);
        }
        return {
            getPopularDocuments,
            searchDocuments,
        };
    }]);
