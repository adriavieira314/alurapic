angular.module('alurapic').controller('FotoCadastroController', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {

    //quando vazio e usado um ng-model  na view, o objeto é criado automaticamente
    $scope.foto = {};
    $scope.mensagem = '';

    //com routeParams tenho acesso aos parametros passados na rota
    if ($routeParams.fotoId) {
        //identificando a foto pelo id
        $http.get('/v1/fotos/' + $routeParams.fotoId)
        .success(function(foto) {
            // console.log($routeParams.fotoId);
            $scope.foto = foto;
        })
        .error(function(erro) {
            console.log(erro);
            $scope.mensagem = 'Não foi possível obter a foto';
        })
    }

    $scope.submeter = function() {
        if ($scope.formulario.$valid) {
            //se na URL houver parametros, ela nos leva para a rota de ediçao
            if ($routeParams.fotoId) {
                $http.put('/v1/fotos/' + $scope.foto._id, $scope.foto)
                .success(function() {
                    $scope.mensagem = 'Foto ' + $scope.foto.titulo + ' foi alterada';
                })
                .error(function(erro) {
                    console.log(erro);
                    $scope.mensagem = 'Não foi possível alterar';
                })

            } else {
                //se não, ela nos leva para a rota de cadastro
                $http.post('/fotos', $scope.foto)
                .success(function() {
                    $scope.foto = {};
                    $scope.mensagem = 'Foto adicionada com sucesso!';
                })
                .error(function(erro) {
                    console.log(erro);
                    $scope.mensagem = 'Não foi possível cadastrar a imagem!';
                })
            }
        }
    };

}]);