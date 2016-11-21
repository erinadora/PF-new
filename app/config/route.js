export default function(angularModule) {
    angularModule.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
        $urlRouterProvider.otherwise("/");
        $stateProvider
            .state('main', {
                url: '/',
                template: '<lander></lander>',
                data: {
                    pageTitle: 'MAIN'
                }
            })
    }]);
    angularModule.run(['$rootScope', '$state', '$stateParams',
        function($rootScope, $state, $stateParams) {
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;
        }
    ])
}
