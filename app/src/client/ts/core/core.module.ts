/// <reference path="../typescriptapp.d.ts" />

'use strict';
module app {

    angular.module('app.core', [
        /*
         *  Angular Modules
         */
        'ngSanitize',
        'ngAnimate',
        'ui.router',
        'ui.bootstrap',
        /*
         * Our reusable cross app code modules
         */
        'blocks.logger',
        'blocks.exception',
        'blocks.router'
    ]);

}