import angular from 'angular';

export default angular.module('shared')
    .controller('HamburgerMenuController', function HamburgerMenuController() {
        this.isActive = false;
        this.toggleMenu = () => {
            this.isActive = !this.isActive;
        };
        this.navList = [
            {
                text: 'Home',
                state: 'home',
            },
        ];
    });
