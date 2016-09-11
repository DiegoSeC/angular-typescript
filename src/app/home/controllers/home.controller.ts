namespace App.Home {
    'use strict';

    class HomeController {
        private name: string;
        private students: Array<string>;

        constructor() {
            console.log('Init HomeController');
            
            this.name = 'Diego Seminario';
            this.students = ['Juan', 'Ladislao', 'Kelvin'];
        }
    }

    angular
        .module('app.home')
        .controller('HomeController', HomeController);
}