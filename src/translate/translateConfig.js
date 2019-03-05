import angular from 'angular';

export default angular.module('translate')
    .config(['$translateProvider', ($translateProvider) => {
        $translateProvider.preferredLanguage('en');
        $translateProvider.registerAvailableLanguageKeys(['en', 'de', 'es'], {
            'en-*': 'en',
            'de-*': 'de',
            'es-*': 'es',
        });
        $translateProvider.useStaticFilesLoader({
            prefix: 'data/',
            suffix: '.json',
        });
        $translateProvider.useSanitizeValueStrategy('sanitize');
    }]);
