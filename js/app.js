// app module
var demoApp = angular.module('demoApp', []);

// routes
demoApp.config(function ($routeProvider) {

   $routeProvider
    .when('/',
        {
            controller: 'HomeController',
            templateUrl: 'views/home.html'
        })
    .when('/about',
        {
            controller: 'AboutController',
            templateUrl: 'views/about.html'
        })
    .when('/posts',
        {
            controller: 'PostController',
            templateUrl: 'views/posts.html'
        })
    // .when('/ECS',
    //     {
    //         controller: 'ECSController',
    //         templateUrl: 'views/ECS.html'
    //     })
    .when('/sophomore',
        {
            controller: 'SophomoreController',
            templateUrl: 'views/sophomore.html'
        })
    .when('/MMA3',
        {
            controller: 'MMA3Controller',
            templateUrl: 'views/MMA3.html'
        })
    .when('/projects',
        {
            controller: 'ProjectsController',
            templateUrl: 'views/projects.html'
        })
    .when('/resources',
        {
            controller: 'ResourcesController',
            templateUrl: 'views/resources.html'
        })
        .when('/butterflyEffect',
        {
            controller: 'butterflyEffectController',
            templateUrl: 'views/pastProjects/butterflyEffect.html'
        })
        .when('/pixelatedLife',
        {
            controller: 'pixelatedLifeController',
            templateUrl: 'views/pastProjects/pixelatedLife.html'
        })
        .when('/portfolioProject',
        {
            controller: 'portfolioProjectController',
            templateUrl: 'views/pastProjects/portfolioProject.html'
        })
        .when('/backToTheirFuturesProject',
        {
            controller: 'backToTheirFuturesProjectController',
            templateUrl: 'views/pastProjects/backToTheirFutures.html'
        })
        
    .otherwise({ redirectTo: '/' });

});