import angular from 'angular';
import { SERVER_URL } from '../../config';

export default angular.module('searchPage')
    .service('filterPanelService', ['$http', ($http) => {
        function getFilters() {
            return $http.get(`${SERVER_URL}/filters`);
        }
        function getFiltersCount(query) {
            return $http.get(`${SERVER_URL}/documents?search=${query}&filtersCount=true`);
        }
        return {
            getFilters,
            getFiltersCount,
        };
    }]);
