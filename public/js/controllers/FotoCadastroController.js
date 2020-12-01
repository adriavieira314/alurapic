angular.module('alurapic').controller('FotoCadastroController', ['$scope', '$http', function ($scope, $http) {

    //quando vazio e usado um ng-model  na view, o objeto é criado automaticamente
    $scope.foto = {};
    $scope.mensagem = '';

    $scope.submeter = function() {
        if ($scope.formulario.$valid) {
            $http.post('/v1/fotos', $scope.foto)
            .success(function() {
                $scope.foto = {};
                $scope.mensagem = 'Foto adicionada com sucesso!';
            })
            .error(function(erro) {
                console.log(erro);
                $scope.mensagem = 'Não foi possível cadastrar a imagem!';
            })
        }
    };

}]);