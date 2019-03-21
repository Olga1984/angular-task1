import angular from 'angular';

export default angular.module('translate')
    .controller('TranslateController', ['$translate', function ($translate) {
        this.changeLanguage = (key) => {
            $translate.use(key);
        };
    }]);
