import angular from 'angular';

const sharedModule = angular.module('shared');
sharedModule.controller('SearchbarController', ['$state', function SearchbarController($state) {
    this.input = $state.params.query || '';
    this.submitForm = ($event) => {
        $event.preventDefault();
        $state.go('search', {
            query: this.input,
        });
    };
    this.clearSearchInput=function(){
        this.input = '';
    }
}]);

export default sharedModule;
