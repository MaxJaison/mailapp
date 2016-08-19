angular.module('myApp', [
    'ui.router',
    'sidebar',
    'mails'
])
    .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/inbox');
    $stateProvider.state('inbox', {
        url: '/inbox',
        template: '<mails></mails>'
    })
    .state('sent', {
        url: '/sent',
        template: '<mails></mails>'
    })
});