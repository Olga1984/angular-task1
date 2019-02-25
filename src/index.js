import angular from 'angular';
angular.module('hello', [])
.controller('HelloController', function HelloController() {
    this.sayHi = 'Hello Angular';
})
