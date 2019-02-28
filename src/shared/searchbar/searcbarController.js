import angular from 'angular';

const sharedModule = angular.module('shared');
sharedModule.controller('SearchbarController', function () {
    this.input = '';
});

export default sharedModule;