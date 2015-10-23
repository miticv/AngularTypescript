/// <reference path="../_all.ts" />
'use strict';

module app.layout {

    export class LayoutController implements IController {

        getData = function () {
            var self = this;

        }


        static $inject = [];
        constructor() {
            var self = this;

        }
    }

}
angular.module('app.layout').controller('layoutController', app.layout.LayoutController);