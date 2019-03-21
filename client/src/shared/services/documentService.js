import angular from 'angular';
import { SERVER_URL } from '../../config';

export default angular.module('shared')
    .service('documentService', ['$http', function documentService($http) {
        function getPopularDocuments() {
            return $http.get(`${SERVER_URL}/documents/popular`);
        }
        function searchDocuments(query, filtersArray, countFilters) {
            let filterStr = '';
            let filtersCount = '';
            if (filtersArray) {
                filterStr = filtersArray.reduce((acc, filterId) => (
                    `${acc}&filterId=${filterId}`
                ), '');
            }
            if (countFilters === true) {
                filtersCount = '&filtersCount=true';
            }
            return $http.get(`${SERVER_URL}/documents?search=${query}${filterStr}${filtersCount}`);
        }
        return {
            getPopularDocuments,
            searchDocuments,
        };
    }]);
