import angular from 'angular';


export default angular.module('searchPage')
    .controller('FilterPanelController', ['$state', function FilterPanelController($state) {
        this.toggleFilter = (filterId) => {
            const filterIndex = this.activeFilters.findIndex(id => id === filterId);
            const filters = [...this.activeFilters];
            filterIndex === -1
            ? filters.push(filterId)
            : filters.splice(filterIndex, 1);
            $state.go('search', {
                filters: filters.join(','),
                page: '0',
            });
        };
    }]);
