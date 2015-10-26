﻿/// <reference path="../_all.ts" />


module app.test {
    'use strict';

    angular.
        module('app.home').
        config(HomeConfig);

    HomeConfig.$inject = ['$stateProvider'];

    function HomeConfig( $stateProvider: ng.ui.IStateProvider) {

        $stateProvider.
        state("home", {
            url: "/",
            templateUrl: 'home/home.html',
            controller: function ($scope) {
                $scope.title = 'Home';
            }
        });

    }

}