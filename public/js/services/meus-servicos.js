angular.module('meusServicos', ['ngResource'])
    .factory('recursoFoto', ['$resource', function($resource) {
        //criando o metodo put para ediçao da foto
        return $resource('/v1/fotos/:fotoId', null, {
            'update': {
                method: 'PUT'
            }
        });
    }]);

// É através da função factory que criamos um serviço passando seu nome e uma função que deve retornar um objeto. 
// Em nosso caso, estamos devolvendo $resource já configurado.