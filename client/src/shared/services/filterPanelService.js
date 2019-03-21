import angular from 'angular';
import { SERVER_URL } from '../../config';

export default angular.module('searchPage')
    .service('filterPanelService', ['$http', ($http) => {
        function getFilters() {
            return $http.get(`${SERVER_URL}/filters`);
        }
        return {
            getFilters,
        };
    }]);
