(function(){

'use strict';



angular.module('myFirstApp',[])

.controller('NameCalcController',function($scope){

    $scope.name="";
    $scope.numericValue = 0;

    $scope.displayNumeric = function(){

        var totalValue  = calculateNumericValueForString($scope.name);
        $scope.numericValue = totalValue;
    };

    function calculateNumericValueForString(st){
          var totalStringValue =  0;
          for(var i = 0; i<st.length; i++){
                totalStringValue += st.charCodeAt(i);
          }
        return totalStringValue;
    }

})

.controller('DIController',DIController)
.controller('ExpressionController',ExpressionController);
  //added for proofing DI from minification
  DIController.$inject = ['$scope','$filter'];

  function DIController($scope,$filter){

        $scope.name="";

        $scope.upper = function(){
          var upCase = $filter('uppercase');
          $scope.name = upCase($scope.name);
        };


  }


   ExpressionController.$inject = ['$scope'];

   function ExpressionController($scope){
     $scope.stateOfBeing="hungry";

     $scope.feedYakov = function(){
        $scope.stateOfBeing="fed";
    }

   }

})();
