import angular from 'angular';


export default angular.module('searchPage')
    .controller('FilterPanelController', ['$state', '$transitions', 'filterPanelService', function FilterPanelController($state) {
        this.filters = ($state.params.filters && $state.params.filters.split(',').map(Number)) || [];
        this.toggleFilter = (filterId) => {
            const filterIndex = this.filters.findIndex(id => id === filterId);
            filterIndex === -1 
            ? this.filters.push(filterId)
            : this.filters.splice(filterIndex, 1);
            $state.go('search', {
                filters: this.filters.join(','),
                page: '0',
            });
        };
    }]);
