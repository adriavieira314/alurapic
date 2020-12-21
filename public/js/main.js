//entre colchetes devo chamar os modules que minha aplicação vai precisar
angular.module('alurapic', ['minhasDiretivas', 'ngAnimate', 'ngRoute','meusServicos'])
    .config(function($routeProvider, $locationProvider) {

        $locationProvider.html5Mode(true);
        //minha rota principal
        $routeProvider.when('/fotos', {
            templateUrl: 'partials/principal.html',
            controller: 'FotosController'
        });

        $routeProvider.when('/foto/new', {
            templateUrl: 'partials/fotoCadastro.html',
            controller: 'FotoCadastroController'
        });

        $routeProvider.when('/fotos/edit/:fotoId', {
            templateUrl: 'partials/fotoCadastro.html',
            controller: 'FotoCadastroController'
        })

        //caso o usuario digite um endereco que não exista, ele será redirecionado para rota principal
        $routeProvider.otherwise({ redirectTo: '/fotos' });
    });