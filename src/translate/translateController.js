import angular from 'angular';

export default angular.module('translate')
    .controller('TranslateController', ['$translate', function ($translate) {
        this.selectedLanguage = 'en';

        this.changeLanguage = (key) => {
            $translate.use(key);
            this.selectedLanguage = key;
        };
    }]);
