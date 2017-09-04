app.controller('MainController', ['$scope', function($scope) { 
  $scope.title = 'Top Sellers in Books'; 
  $scope.products = 
[ 
  { 
    name: 'The Book of Trees', 
    price: 19, 
    pubdate: new Date('2014', '03', '08'), 
    cover: 'https://www.google.com/google.jpg' 
  }, 
  { 
    name: 'Program or be Programmed', 
    price: 8, 
    pubdate: new Date('2013', '08', '01'), 
    cover: 'img/program-or-be-programmed.jpg' 
  } 
]
}]);