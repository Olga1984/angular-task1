import angular from 'angular';

export default angular.module('core')
    .config(['$stateProvider', '$locationProvider', ($stateProvider, $locationProvider) => {
        $stateProvider
            .state({
                name: 'home',
                url: '/',
                template: '<swt-home></swt-home>',
            })
            .state({
                name: 'search',
                url: '/search?:foo',
                template: '<swt-search-page></swt-search-page>',
            });
        $locationProvider.html5Mode(true);
    }]);
