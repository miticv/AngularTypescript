/// <reference path="../typescriptapp.d.ts" />


module app.search {
    'use strict';

    angular.
        module('app.search').
        config(SearchConfig);

    SearchConfig.$inject = ['$stateProvider'];
    function SearchConfig( $stateProvider: ng.ui.IStateProvider) {

        $stateProvider.
            state("search", {
            url: "/search",
            templateUrl: 'search/search.html',
            controller: function ($scope) {
                $scope.title = 'search';
            }
        });

    }

}