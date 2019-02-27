import angular from 'angular';

const sharedModule = angular.module('shared');
sharedModule.controller('HeaderController', function () {
    this.logo = 'http://bm.img.com.ua/nxs/img/prikol/images/large/0/0/307600.jpg';
});

export default sharedModule;
