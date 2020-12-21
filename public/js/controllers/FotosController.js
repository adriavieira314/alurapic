angular.module('alurapic').controller('FotosController', ['$scope', 'recursoFoto', function ($scope, recursoFoto) {
    $scope.fotos = [];
    //scope de two way data-binding
    $scope.filtro = '';
    $scope.mensagem = '';

    //faz o que o $http.get faz
    recursoFoto.query(function(fotos) {
        $scope.fotos = fotos;
    }, function(erro) {
        console.log(erro);
    });

    //faz o que o $http.delete faz
    $scope.remover = function(foto) {
        recursoFoto.delete({fotoId: foto._id}, function() {
            //vai retirar do array
            var indiceDaFoto = $scope.fotos.indexOf(foto);
            $scope.fotos.splice(indiceDaFoto, 1);
            
            $scope.mensagem = 'Foto ' + foto.titulo + ' removida com sucesso!';
        }, function(erro) {
            console.log(erro);
            $scope.mensagem = 'Não foi possível apagar a foto ' + foto.titulo;
        })
    }
}]);