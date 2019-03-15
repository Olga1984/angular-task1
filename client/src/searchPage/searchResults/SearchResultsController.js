import angular from 'angular';

export default angular.module('searchPage')
    .controller('SearchResultsController', ['$state', '$transitions', function SearchResultsController($state, $transitions) {
        this.activePage = Number($state.params.page) || 0;
        $transitions.onRetain({
            to: 'search',
        }, (transition) => {
            this.activePage = Number(transition.params().page);
        });
    }]);
