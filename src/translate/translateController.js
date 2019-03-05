import angular from 'angular';

export default angular.module('translate')
    .controller('TranslateController', ['$translate', function ($translate) {
        this.changeLanguage = (key) => {
            $translate.use(key);
            // this.translationData = this.getTranslation(key);
        };
        // this.getTranslation = (language) => {
        //     let languageFilePath = `translation_${language}.json`;
        //     console.log(languageFilePath);
        //     $resource(languageFilePath).get(function (data) {
        //         this.translation = data;
        //     });
        // };
    }]);
