/// <reference path="../typescriptapp.d.ts" />


module app.test {
    'use strict';

    angular.
        module('app.test').
        config(TestConfig);

    TestConfig.$inject = ['$stateProvider'];
    function TestConfig( $stateProvider: ng.ui.IStateProvider) {

        $stateProvider.
        state("test", {
            url: "/test",
            templateUrl: 'test/test.html',
            controller: function ($scope) {
                $scope.title = 'Test';
            }
        });

    }

}