angular.module('alurapic').controller('FotoCadastroController', ['$scope', function ($scope) {

    //quando vazio e usado um ng-model  na view, o objeto é criado automaticamente
    $scope.foto = {};

    $scope.submeter = function() {
        console.log($scope.foto);
    };

}]);