angular.module('alurapic').controller('FotoCadastroController', ['$scope', 'recursoFoto', '$routeParams', 'cadastroDeFotos', 
function ($scope, recursoFoto, $routeParams, cadastroDeFotos) {

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
            cadastroDeFotos.cadastrar($scope.foto)
            .then(function(dados) {
                $scope.mensagem = dados.mensagem;
                if (dados.inclusao) $scope.foto = {};
            })
            .catch(function(erro) {
                $scope.mensagem = erro.mensagem;
            })
        }
    };

}]);