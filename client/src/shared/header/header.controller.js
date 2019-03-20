import angular from 'angular';

const sharedModule = angular.module('shared');
sharedModule.controller('HeaderController', function HeaderController() {
    this.menuActive = false;
    this.toggleMenu = () => {
        this.menuActive = !this.menuActive;
    };
});

export default sharedModule;
