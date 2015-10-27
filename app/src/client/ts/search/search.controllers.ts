/// <reference path="../typescriptapp.d.ts" />
'use strict';

module app.search {

    export class SearchController implements IController {

        private logger: ILogger;



        static $inject = ['logger'];
        constructor(logger: ILogger) {
            var self = this;
            self.logger = logger;

        }
    }

}
angular.module('app.search').controller('searchController', app.search.SearchController);