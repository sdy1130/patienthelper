const app = angular.module('webApp', []);

app.controller('loginController', function($scope, $http, $window) {

    $scope.login = function(){
        console.log("request for page!");
        
        const url = '/login/' + $scope.email;
        console.log(url);

        if($scope.email == "1002421140"){
            location.href = '/patient.html';
            //$http.get(url);
        }
        else if($scope.email == "1002108587"){
            location.href = '/patient_table.html';
            //$http.get(url);
        }
        else{
            $window.alert("Wrong ID or Password!");
        }


    }

});
