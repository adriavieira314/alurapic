angular.module('alurapic').controller('FotosController', ['$scope', '$http', function ($scope, $http) {
    $scope.fotos = [];
    //scope de two way data-binding
    $scope.filtro = '';
    $scope.mensagem = '';

    $http.get('v1/fotos')
    .success(function(fotos) {
        $scope.fotos = fotos;
    })
    .error(function(erro) {
        alert(erro);
    })

    $scope.remover = function(foto) {
        $http.delete('v1/fotos/' + foto._id)
        .success(function() {
            //vai retirar do array
            var indiceDaFoto = $scope.fotos.indexOf(foto);
            $scope.fotos.splice(indiceDaFoto, 1);
            
            $scope.mensagem = 'Foto ' + foto.titulo + ' removida com sucesso!';
        })
        .error(function(erro) {
            console.log(erro);
            $scope.mensagem = 'Não foi possível apagar a foto ' + foto.titulo;
        })
    }
}]);