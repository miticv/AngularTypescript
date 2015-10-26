/// <reference path="../typescriptapp.d.ts" />
'use strict';

module app.home {

    export class HomeController implements IController {

        private logger: ILogger;



        static $inject = ['logger'];
        constructor(logger: ILogger) {
            var self = this;
            self.logger = logger;

            logger.info("Welcome home", "Info");
        }
    }

}
angular.module('app.home').controller('homeController', app.home.HomeController);