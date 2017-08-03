var app = angular.module("app", ['ngRoute']);

app.controller("PrincipalController", function ($scope) {
    
})


app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            template: ''
        })
        .when('/empresa', {
            templateUrl: 'Empresa.html',
            controller: 'EmpresaController'
        })
        .when('/productos', {
            templateUrl: 'Productos.html',
            controller: 'ProductosController'
        })
        .when('/promociones', {
            templateUrl: 'Promociones.html',
            controller: 'PromocionesController'
        })
        .when('/contacto', {
            templateUrl: 'Contacto.html',
            controller: 'ContactoController'
        })
        .when('/pnf', {
            templateUrl: 'pnf.html'
        })
        .otherwise({
            redirecTo: '/'
        })
}])


app.controller("EmpresaController", function ($scope) {
    $scope.descripcion = "Empresa"
})

app.controller("PromocionesController", function ($scope) {
    $scope.descripcion = "Promociones"
})

app.controller("ProductosController", function ($scope) {
    $scope.descripcion = "Productos"
})

app.controller("ContactoController", function ($scope) {
    $scope.descripcion = "Contacto"
})
