angular.module('alurapic').controller('FotosController', ['$scope', '$http', function ($scope, $http) {
    $scope.fotos = [];

    $http.get('v1/fotos')
    .success(function(fotos) {
        $scope.fotos = fotos;
    })
    .error(function(erro) {
        alert(erro);
    })
}]);