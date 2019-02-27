import angular from 'angular';

const sharedModule = angular.module('shared');
sharedModule.controller('FooterController', function () {
    this.text = '2019';
});

export default sharedModule;
