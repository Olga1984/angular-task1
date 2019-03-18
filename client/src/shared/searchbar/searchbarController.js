import angular from 'angular';

const sharedModule = angular.module('shared');
sharedModule.controller('SearchbarController', ['$state', function SearchbarController($state) {
    this.input = $state.params.query || '';
    this.submitForm = ($event) => {
        $event.preventDefault();
        $state.go('search', {
            query: this.input,
            page: '0',
        });
    };
    this.clearSearchInput = () => {
        this.input = '';
    }
}]);

export default sharedModule;
