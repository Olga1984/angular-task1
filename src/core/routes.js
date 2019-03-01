import angular from 'angular';

export default angular.module('core')
    .config(['$routeProvider', '$locationProvider', ($routeProvider, $locationProvider) => {
        $routeProvider
            .when('/', {
                template: '<swt-home></swt-home>',
            })
            .when('/search', {
                template: '<swt-search-page></swt-search-page>',
            });
        $locationProvider.html5Mode(true);
    }]);
