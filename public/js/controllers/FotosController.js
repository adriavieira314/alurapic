angular.module('alurapic').controller('FotosController', ['$scope', '$http', function ($scope, $http) {
    $scope.fotos = [];
    //scope de two way data-binding
    $scope.filtro = '';

    $http.get('v1/fotos')
    .success(function(fotos) {
        $scope.fotos = fotos;
    })
    .error(function(erro) {
        alert(erro);
    })
}]);