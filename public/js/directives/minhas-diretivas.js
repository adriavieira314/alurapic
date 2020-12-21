var app = angular.module('minhasDiretivas', []);

app.directive('meuPainel', function () {
    //toda diretiva tem uma ddo(directive definition object) e devo retorná-la
    var ddo = {};
    //Primeira coisa que devo fazer numa diretiva é informa sua restrição
    //ou seja, como ela pode ser usada, aqui ela pode ser usado como atributo e elemento
    ddo.restrict = "AE";

    //cada diretiva que eu criar vai precisar de um titulo unico, para isso é feito um escopo isolado
    //existe independente do contexto que está inserido.
    ddo.scope = {
        //a propriedade titulo vem da view
        // titulo: '@titulo'
        //quando o nome é o mesmo, pode-se abreviar
        //@ copia o valor que vem da view como string
        titulo: '@'
    }

    //marcaçao HTML da minha diretiva
    ddo.templateUrl = 'js/directives/meu-painel.html' 
    //sempre procura na pasta public ou na sua pasta raiz
    
    //quando uso minha diretiva, o dom a coloca por cima de qualquer outro elemento
    //se eu tiver um elemento na minha view que quero que apareça junto da minha diretiva
    //devo declarar o transclude aqui e na div ou qualquer outro elemento no meu template
    ddo.transclude = true;
   
    return ddo;
});

app.directive('minhaFoto', function() {
    var ddo = {};

    ddo.restrict = "AE";

    ddo.scope = {
        url: '@',
        titulo: '@'
    }

    ddo.templateUrl = 'js/directives/minha-foto.html'

    return ddo; 
});

app.directive('meuBotaoPerigo', function() {
    var ddo = {};

    ddo.restrict = "E";

    ddo.scope = {
        nome: '@',
        acao: '&' //modificador que permite fazer binding para uma referência, exemplo, como uma funcao.
    }

    ddo.template = '<button class="btn btn-danger btn-block" ng-click="acao()">{{nome}}</button>';

    return ddo; 
});

app.directive('meuFocus', function() {
    var ddo= {};

    ddo.restrict = 'A';

    ddo.scope = {
        focado: '=' //modificar que cria uma relação bidirecional, ou seja, FotoController e a diretiva meuFocus trabalharão com a mesma referência para $scope.focado
        //Se focado mudar na diretiva, mudará no controller, se mudar no controller, mudará na diretiva
    };

    ddo.link = function(scope, element) {
        //scope é um escopo de um controller
        scope.$watch('focado', function() {
            //executa toda vez que o valor de focado mudar
            //usar muito o $watch pode haver uma queda de performance
            if (scope.focado) {
                element[0].focus(); //O element é um elemento DOM, porém encapsulado pelo jqLite
                scope.focado = false;
            }
        })
    }

    return ddo;
});