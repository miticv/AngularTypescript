/// <reference path="../typescriptapp.d.ts" />
'use strict';

module app.add {

    export class AddController implements IController {

        private logger: ILogger;



        static $inject = ['logger'];
        constructor(logger: ILogger) {
            var self = this;
            self.logger = logger;

        }
    }

}
angular.module('app.add').controller('addController', app.add.AddController);