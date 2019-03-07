import angular from 'angular';

export default angular.module('shared')
    .controller('HamburgerMenuController', function HamburgerMenuController() {
        this.active = false;
        this.toggleMenu = () => {
            this.active = !this.active;
        };
        this.navList = [
            {
                text: 'Home',
                state: 'home',
            },
        ];
    });
