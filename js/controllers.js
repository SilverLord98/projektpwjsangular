/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var portfolioApp = angular.module('portfolioApp',[]); 
portfolioApp.controller('GalleryListCtrl', ['$scope', '$http',  function($scope, $http)
    {
        $http.get('galeria/json/galleries.json').then(function (response) 
        { $scope.galleries=response.data.galleries;
            $scope.sortList = response.data.sortList;
        
} );
        $scope.gallerytitle=[
        {
        'title':'Galleria kotów wersja 2'
        }];
        $scope.orderProp = 'when';
             
 


}]);
portfolioApp.controller('zegarData', function($scope) {
    $scope.today = new Date();
});  

    

    
    
    
  
