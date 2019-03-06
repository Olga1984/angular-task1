import angular from 'angular';

export default angular.module('shared')
    .directive('swtHamburgerMenu', () => (
        {
            restrict: 'E',
            templateUrl: 'hamburgerMenu.html',
            controller: 'HamburgerMenuController',
            controllerAs: 'hamburger',
        }
    ));
