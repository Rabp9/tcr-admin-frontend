'use strict';

/**
 * @ngdoc overview
 * @name tcrAdminFrontendApp
 * @description
 * # tcrAdminFrontendApp
 *
 * Main module of the application.
 */
angular
.module('tcrAdminFrontendApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'ngFileUpload',
    'ui.tinymce',
    'ui.sortable',
    'thatisuday.ng-image-gallery',
    'angularValidator',
    'scrollable-table',
    'ui.router',
    'angular-toArrayFilter'
])
.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
    // $httpProvider.interceptors.push('oAuthHttpInterceptor');
    var mainState = {
        name: 'main',
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main',
        title: 'Home'
    };  
    
    var infosState = {
        name: 'infos',
        url: '/infos',
        templateUrl: 'views/infos.html',
        controller: 'InfosCtrl',
        controllerAs: 'infos',
        title: 'Información General'
    };
    
    var categoriesState = {
        name: 'categories',
        url: '/categories',
        templateUrl: 'views/categories.html',
        controller: 'CategoriesCtrl',
        controllerAs: 'categories',
        title: 'Categorías'
    };
    
    var postsState = {
        name: 'posts',
        url: '/posts',
        templateUrl: 'views/posts.html',
        controller: 'PostsCtrl',
        controllerAs: 'posts',
        title: 'Posts'
    };
    /*
    var clientesState = {
        name: 'clientes',
        url: '/clientes',
        templateUrl: 'views/clientes.html',
        controller: 'ClientesCtrl',
        controllerAs: 'clientes',
        title: 'Clientes'
    };
    
    var serviciosState = {
        name: 'servicios',
        url: '/servicios',
        templateUrl: 'views/servicios.html',
        controller: 'ServiciosCtrl',
        controllerAs: 'servicios',
        title: 'Servicios'
    };
    
    var noticiasState = {
        name: 'noticias',
        url: '/noticias',
        templateUrl: 'views/noticias.html',
        controller: 'NoticiasCtrl',
        controllerAs: 'noticias',
        title: 'Noticias'
    };
    
    var rolesState = {
        name: 'roles',
        url: '/roles',
        templateUrl: 'views/roles.html',
        controller: 'RolesCtrl',
        controllerAs: 'roles',
        title: 'Roles'
    };
        
    var directorioState = {
        name: 'directorio',
        url: '/directorio',
        templateUrl: 'views/directorio.html',
        controller: 'DirectorioCtrl',
        controllerAs: 'directorio',
        title: 'Directorio'
    };
    
    var cabecerasState = {
        name: 'cabeceras',
        url: '/cabeceras',
        templateUrl: 'views/cabeceras.html',
        controller: 'CabecerasCtrl',
        controllerAs: 'cabeceras',
        title: 'Cabeceras'
    };
    */
   
    var usersState = {
        name: 'users',
        url: '/users',
        templateUrl: 'views/users.html',
        controller: 'UsersCtrl',
        controllerAs: 'users',
        title: 'Usuarios'
    };
    
    var usersLoginState = {
        name: 'login',
        url: '/login',
        templateUrl: 'views/users-login.html',
        controller: 'UsersLoginCtrl',
        controllerAs: 'login',
        title: 'Login'
    };
    
    $stateProvider.state(mainState);
    $stateProvider.state(infosState);
    $stateProvider.state(categoriesState);
    $stateProvider.state(postsState);
    /*$stateProvider.state(clientesState);
    $stateProvider.state(serviciosState);
    $stateProvider.state(noticiasState);
    $stateProvider.state(directorioState);
    $stateProvider.state(cabecerasState);
    $stateProvider.state(rolesState);*/
    $stateProvider.state(usersState);
    $stateProvider.state(usersLoginState);
    $urlRouterProvider.when('', '/');
})
.run(function($rootScope, $state, $cookies, $location, $window, envService) {
    angular.module('tcrAdminFrontendApp').path_location = envService.getHost();
    $rootScope.pathLocation = envService.getHost();
    
    $('#dvMessageRoot').removeClass('dvHidden');
    $rootScope.tinymceOptions = {
        toolbar: "undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | table | fontsizeselect | fontselect ",
        fontsize_formats: "8pt 10pt 11pt 12pt 13pt 14pt 15pt 16pt 17pt 18pt 19pt 20pt 21pt 22pt 23pt 24pt 25pt 26pt 27pt 28pt",
        plugins: 'lists autolink textcolor colorpicker link media preview table code',
        language_url : '/scripts/langs_tinymce/es.js'
    };
    $('.nav a').on('click', function(){
        $('.navbar-toggle').click();
    });
    
    $rootScope.$state = $state;
    
    if ($cookies.get('tcr-token')) {
        $rootScope.logged = true;
        $rootScope.user = $cookies.getObject('tcr-user');
    } else {
        $rootScope.logged = false;
    }
    
    $rootScope.$on('$stateChangeStart', 
    function(event, toState, toParams, fromState, fromParams, options) {
        if (fromState.name === '' && toState.name === 'login') {
            $('#topbar-wrapper').addClass('ng-hide');
            $('#wrapper').addClass('inLogin');
            if ($rootScope.user !== undefined) {
                $location.path('/');
            }
        } else if (fromState.name === ''  && toState.name !== 'login') {
            $('#sidebar-wrapper').css('display', 'block');
            $('#wrapper').addClass('toggled');
            if ($rootScope.user === undefined) {
                $('#sidebar-wrapper').css('display', 'none');
                $('#wrapper').removeClass('toggled');
                $location.path('/login');
            }
        } else if (fromState.name !== 'login' && toState.name === 'login') {
            if ($rootScope.user !== undefined) {
                $location.path('/');
            } else {
                $('#sidebar-wrapper').css('display', 'none');
                $('#wrapper').removeClass('toggled');
            }
        } else if (fromState.name === 'login' && toState.name !== 'login') {
            if ($rootScope.user === undefined) {
                $location.path('/login');
            } else {
                $('#topbar-wrapper').removeClass('ng-hide');
                $('#sidebar-wrapper').css('display', 'block');
                $('#wrapper').addClass('toggled');
            }
        }
        if ($rootScope.user !== undefined) {
            if ($rootScope.user.rol.permisos.search(toState.name) >= 0) {
                $rootScope.message_root = null;
            } else {
                if (toState.name !== 'main' && toState.name !== 'login') {
                    event.preventDefault();
                    $rootScope.message_root = {
                        type: 'error',
                        text: 'No tiene permisos'
                    };
                }
            }
        }
    });
    
    $rootScope.$on('$stateChangeSuccess', 
    function(event, toState, toParams, fromState, fromParams){ 
        $rootScope.title = toState.title;
    });

    $rootScope.logout = function() {
        if (confirm('¿Está seguro de cerrar sesión?')) {
            $cookies.remove('tcr-user');
            $cookies.remove('tcr-token');
            $rootScope.user = undefined;
            $('#topbar-wrapper').addClass('ng-hide');
            $('#wrapper').addClass('inLogin');
            $rootScope.message_root = [];
            $location.path('/login');
        }
    };
});