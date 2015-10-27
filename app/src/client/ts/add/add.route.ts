/// <reference path="../typescriptapp.d.ts" />


module app.add {
    'use strict';

    angular.
        module('app.add').
        config(AddConfig);

    AddConfig.$inject = ['$stateProvider'];
    function AddConfig( $stateProvider: ng.ui.IStateProvider) {

        $stateProvider.
            state("add", {
            url: "/add",
            templateUrl: 'add/add.html',
            controller: function ($scope) {
                $scope.title = 'add';
            }
        });

    }

}