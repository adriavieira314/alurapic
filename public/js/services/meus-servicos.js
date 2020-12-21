// É através da função factory que criamos um serviço passando seu nome e uma função que deve retornar um objeto. 
// Em nosso caso, estamos devolvendo $resource já configurado.
// Factory é usado quando precisamos usar um mesmo recurso emvários controllers
// A funcao factory deve retornar um objeto

angular.module('meusServicos', ['ngResource'])
    .factory('recursoFoto', ['$resource', function($resource) {
        //criando o metodo put para ediçao da foto pois $resource nao suporta o método PUT
        return $resource('/v1/fotos/:fotoId', null, {
            'update': {
                method: 'PUT'
            }
        });
    }])

    .factory('cadastroDeFotos', ['recursoFoto', '$q', function(recursoFoto, $q) { //servico de cadastro e atualizacao
        //$q retorna uma promise
        var service = {};
        service.cadastrar = function(foto) {
            //resolve(recebe como valor os dados que desejamos acessar chamando a função then)
            //reject(informação de erro que temos acesso através da função catch). Ambos sao funcoes
            return $q(function(resolve, reject) { 
                //ediçao da foto
                if (foto._id) {
                    recursoFoto.update({fotoId: foto._id}, foto, function() {
                        resolve({
                            mensagem: 'Foto ' + foto.titulo + ' atualizada com sucesso',
                            inclusao: false
                        });
                    }, function(erro) {
                        console.log(erro);
                        reject({
                            mensagem: 'Não foi possível atualizar a foto ' + foto.titulo
                        });
                    });
                } else {
                    //cadastro da foto
                    //save faz uma requisição do tipo POST
                    recursoFoto.save(foto, function() {
                        resolve({
                            mensagem: 'Foto ' + foto.titulo + ' cadastrada com sucesso!',
                            inclusao: true
                        });
                    }, function(erro) {
                        console.log(erro);
                        reject({
                            mensagem: 'Não foi possível cadastrar a foto ' + foto.titulo
                        })
                    })
                }
            });
        };

        return service;
    }]);

   