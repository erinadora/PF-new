import lander from './lander.html';
export default function(angularModule) {

    /**
     * Controller:
     */
    angularModule.directive('lander', ['$location', '$window', function($location, $window) {
        return {
            replace: true,
            restrict: 'EA',
            template: lander,
            controller: ['$scope', '$location', '$window', function($scope, $location, $window) {
                $scope.projects = [{
                    "Title": "Natalie Off Duty",
                    "Type": "Web Design",
                    "Desc": "Lorem ipsum dolor sit amet, wisi praesent sem, tempor ornare hendrerit etiam pellentesque, ultricies conubia, diam conubia torquent, venenatis id lacus.",
                    "img": "nod-thumb.png"
                }, {
                    "Title": "Hello Sitter",
                    "Type": "UX Design",
                    "Desc": "Lorem ipsum dolor sit amet, wisi praesent sem, tempor ornare hendrerit etiam pellentesque, ultricies conubia, diam conubia torquent, venenatis id lacus.",
                    "img": "hs-thumb.png"
                }, {
                    "Title": "Pinterest Redux",
                    "Type": "UX Design",
                    "Desc": "Lorem ipsum dolor sit amet, wisi praesent sem, tempor ornare hendrerit etiam pellentesque, ultricies conubia, diam conubia torquent, venenatis id lacus.",
                    "img": "pint-thumb.png"
                }];

                $scope.expanded = false;
                $scope.changeFlex = function(expanded) {
                  $scope.expanded = !$scope.expanded;

                  if($scope.expanded) {
                    $scope.flexwidth1 = 100;
                    $scope.flexwidth2 = 0;
                  } else {
                    $scope.flexwidth1 = 50;
                    $scope.flexwidth2 = 50;
                  }
                }
            }]
        }
    }]);
}
