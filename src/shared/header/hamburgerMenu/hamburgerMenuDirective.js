import angular from 'angular';

export default angular.module('shared')
    .directive('swtHamburgerMenu', () => (
        {
            restrict: 'E',
            templateUrl: 'hamburgerMenu.html',
            controller: 'HamburgerMenuController',
            controllerAs: 'hamburger',
            link: ($scope, iElem) => {
                function closeMenu() {
                    if (!$scope.hamburger.active) {
                        return;
                    }
                    $scope.hamburger.toggleMenu();
                    $scope.$digest();
                }
                function stopPropagation(event) {
                    event.stopPropagation();
                }
                document.addEventListener('click', closeMenu);
                iElem.on('click', stopPropagation);
                $scope.$on('$destroy', () => {
                    document.removeEventListener('click', closeMenu);
                    iElem.off('click', stopPropagation);
                });
            },
        }
    ));
