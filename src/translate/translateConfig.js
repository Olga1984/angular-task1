import angular from 'angular';

export default angular.module('translate')
    .config(['$translateProvider', ($translateProvider) => {
        $translateProvider.translations('en', {
            TITLE: 'tutorials point',
            BUTTON_LANG_EN: 'English',
            BUTTON_LANG_DE: 'German',
            BUTTON_LANG_ES: 'Spanish',
            TOTAL_RESULTS: 'Total results',

        });
        $translateProvider.translations('de', {
            TITLE: 'Tutorials Punkt',
            BUTTON_LANG_EN: 'Englisch',
            BUTTON_LANG_DE: 'Deutsch',
            BUTTON_LANG_ES: 'Spanisch',
            TOTAL_RESULTS: 'Ergebnisse insgesamt',
        });
        $translateProvider.translations('es', {
            TITLE: 'punto tutoriales',
            BUTTON_LANG_EN: 'Ingles',
            BUTTON_LANG_DE: 'Alemn',
            BUTTON_LANG_ES: 'Espanol',
            TOTAL_RESULTS: 'Resultados totales',
        });
        $translateProvider.preferredLanguage('de');
    }]);
