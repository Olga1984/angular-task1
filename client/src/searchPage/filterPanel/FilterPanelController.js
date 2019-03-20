import angular from 'angular';


export default angular.module('searchPage')
    .controller('FilterPanelController', ['$state', '$transitions', 'filterPanelService', function FilterPanelController($state, $transitions, filterPanelService) {
        this.filters = ($state.params.filters && $state.params.filters.split(',').map(Number)) || [];
        let oldQuery = $state.params.query.toLowerCase();
        this.filtersCount = {};
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
        const getFiltersCount = (query) => {
            filterPanelService.getFiltersCount(query).then((res) => {
                const { data } = res;
                this.filtersCount = data;
                const newFilters = [];
                this.filters.forEach((filter) => {
                    if (data[filter]) {
                        newFilters.push(filter);
                    }
                });
                this.filters = newFilters;
                $state.go('search', {
                    filters: this.filters.join(','),
                    page: '0',
                });
            });
        };
        getFiltersCount(oldQuery);
        $transitions.onRetain({
            retained: 'search',
        }, (transition) => {
            const newQuery = transition.params().query.toLowerCase();
            if (oldQuery === newQuery) {
                return;
            }
            oldQuery = newQuery;
            getFiltersCount(newQuery);
        });
    }]);
