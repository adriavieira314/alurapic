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