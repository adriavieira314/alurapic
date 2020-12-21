angular.module('alurapic').controller('FotoCadastroController', ['$scope', 'recursoFoto', '$routeParams', function ($scope, recursoFoto, $routeParams) {

    //quando vazio e usado um ng-model  na view, o objeto é criado automaticamente
    $scope.foto = {};
    $scope.mensagem = '';

    //com routeParams tenho acesso aos parametros passados na rota
    if ($routeParams.fotoId) {
        //obtendo a foto e seus dados
        recursoFoto.get({fotoId: $routeParams.fotoId}, function(foto) {
            $scope.foto = foto; 
        }, function(erro) {
            console.log(erro);
            $scope.mensagem = 'Não foi possível obter a foto';
        });
    }

    $scope.submeter = function() {
        if ($scope.formulario.$valid) {
            //se na URL houver parametros, ela nos leva para a rota de ediçao
            if ($routeParams.fotoId) {
                recursoFoto.update({fotoId: $scope.foto._id}, $scope.foto, function() {
                    $scope.mensagem = 'Foto ' + $scope.foto.titulo + ' foi alterada';
                }, function(erro) {
                    console.log(erro);
                    $scope.mensagem = 'Não foi possível alterar';
                });

            } else {
                //se não, ela nos leva para a rota de cadastro
                //save faz uma requisição do tipo POST
                recursoFoto.save($scope.foto, function() {
                    $scope.foto = {};
                    $scope.formulario.$setPristine();
                    $scope.mensagem = 'Foto adicionada com sucesso!';
                }, function(erro) {
                    console.log(erro);
                    $scope.mensagem = 'Não foi possível cadastrar a imagem!';
                });
            }
        }
    };

}]);