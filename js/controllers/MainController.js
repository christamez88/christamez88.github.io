app.controller('MainController', ['$scope', function($scope) { 
  $scope.title = 'Best Sprint Workouts'; 
  $scope.products = 
[ 
  { 
    name: '16 x 100m', 
    intensity: .85, 
    timesPerWeek: 1, 
    rest: '10-20 seconds',
    cover: 'https://www.google.com/google.jpg' 
  }, 
  { 
    name: 'Program or be Programmed', 
    intensity: .85, 
    timesPerWeek: 1, 
    cover: 'img/program-or-be-programmed.jpg' 
  } 
]
    
}]);

  
  // This filter makes the assumption that the input will be in decimal form (i.e. 17% is 0.17).
app.filter('percentage', ['$filter', function ($filter) {
  return function (input, decimals) {
    return $filter('number')(input * 100, decimals) + '%';
  };
}]);