import angular from 'angular';
import de from '../assets/data/de.json';
import en from '../assets/data/en.json';
import es from '../assets/data/es.json';

export default angular.module('translate')
    .config(['$translateProvider', ($translateProvider) => {
        $translateProvider.translations('en', en);
        $translateProvider.translations('de', de);
        $translateProvider.translations('es', es);
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
        $translateProvider.useCookieStorage();
        $translateProvider.useLocalStorage();
    }]);
