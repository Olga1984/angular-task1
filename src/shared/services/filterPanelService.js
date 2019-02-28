import angular from 'angular';
import { mockDocuments } from '../../assets/documents';

const filterPanelModule = angular.module('searchPage');
filterPanelModule.service('filterPanelService', function filterPanelService() {

    const filteredArticles = [];
    let filteredArticlesCount = 0;

    function getFilteredArticles() {
        const cache = {};
        mockDocuments.forEach((elem) => {
            const {
                category
            } = elem;
            if (cache[category]) {
                cache[category].push(elem.value);
            } else {
                cache[category] = [elem.value];
            }
        });
        Object.keys(cache).forEach(function (key) {
            filteredArticlesCount = filteredArticlesCount + cache[key].length;
            filteredArticles.push({
                filteredCategoryName: key,
                filteredGroup: cache[key],
            });
        });
    }
    getFilteredArticles();

    return { 
        filteredArticles,        
    };
});

export default filterPanelModule;
