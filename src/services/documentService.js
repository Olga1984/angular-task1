import angular from 'angular';
import mockDocuments from '../assets/documents';
import mockSidebarItems from '../assets/sidebarItems';

const documentModule = angular.module('document');
documentModule.service('documentService', ['$q', function documentService($q) {

    const documents = [];
    const sidebarItems = [];

    function getDocuments() {
        $q.resolve(mockDocuments).then(updatedDocs => documents.push(...updatedDocs));
    }
    function getSidebarItems() {
        $q.resolve(mockSidebarItems).then(updatedSidebarItems => sidebarItems.push(...updatedSidebarItems));
    }
    return {
        sidebarItems,
        getSidebarItems,
        documents,
        getDocuments,
    };
}]);

export default documentModule;
