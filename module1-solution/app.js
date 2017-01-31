(function(){

  'use strict';

   angular.module('LunchCheck',[])

    .controller('LunchCheckController',LunchCheckController);

     LunchCheckController.$inject = ['$scope'];

     function LunchCheckController($scope){

          $scope.items="";
          $scope.message="";
          $scope.status = "";

        $scope.checkItems = function(){

            if($scope.items.length==0){
              $scope.message="Please enter data first";
              $scope.status = "warning";
            }
            else{
              $scope.status = "success";
                 var items = $scope.items.split(",");
                if(items.length>3){
                  $scope.message="Too much!";
                }
                else{
                  $scope.message="Enjoy!";
                }
            }

        }

     };

})();
