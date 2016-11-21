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
                    "Desc": "An easily accessible blog with clean design and functionality.",
                    "img": "./../images/NOD-thumb.png"
                }, {
                    "Title": "Hello Sitter",
                    "Type": "UX Design",
                    "Desc": "I redesigned the welcome screens to a baby sitting app which is now live on the AppStore. The design called for a beautiful and engaging UX that parallels the hello sitter brand.",
                    "img": "../../images/HS-thumb.png"
                }, {
                    "Title": "Pinterest Redux",
                    "Type": "UX Design",
                    "Desc": "With instagram's new look, I decided Pinterest needed a fresh paint job as well. I did a Pinterest Redux which brings Pinterest back into the foreground of social media outlets for clean and sharp UX.",
                    "img": "../../images/Pint-thumb.png"
                }, {
                    "Title": "Reeli: A Video Clip Compiler",
                    "Type": "UX Design",
                    "Desc": "My design project at Epicodus required 39 artboards as well as invision implementation. Reeli is a new take on creating 15 second video clip compilations between friends.",
                    "img": "../../images/Reeli-thumb.png"
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
