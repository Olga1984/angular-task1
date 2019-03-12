import angular from 'angular';

export default angular.module('core')
    .config(['$stateProvider', '$locationProvider', ($stateProvider, $locationProvider) => {
        $stateProvider
            .state({
                name: 'home',
                url: '/',
                templateUrl: 'homeRoute.html',
            })
            .state({
                name: 'search',
                url: '/search?query',
                templateUrl: 'searchRoute.html',
            });
        $locationProvider.html5Mode(true);
    }]);