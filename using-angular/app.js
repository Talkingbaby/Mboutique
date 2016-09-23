var app = angular.module("mApp", []);
app.directive('welcomeDir', function(){
    return {
        restrict: 'E',
        templateUrl: 'welcome-page.html'
    }
});
app.directive('macaronInfoDir', function(){
    return {
        restrict: 'E',
        templateUrl: 'macaron-info.html'
    }
});
app.directive('giftsDir', function(){
    return {
        restrict: 'E',
        templateUrl: 'gifts-page.html'
    }
});
app.directive('contactUsDir', function(){
    return {
        restrict: 'E',
        templateUrl: 'contact-us-page.html'
    }
});
