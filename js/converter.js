var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope) {
    $scope.units = ["Area", "Energy", "Frequency", "Length", "Mass", "Pressure", "Speed", "Temperature", "Time", "Digital Storage", "Data Transfer Rate"];
    $scope.mySelectUnit = function (selectedUnit) {
        $scope.num1=0;
        $scope.num2=0;
        // console.log($scope.num2);
        if (selectedUnit == "Area") {
            $scope.param = [{ factor: 1196000, name: "Square Kilometer" },
            { factor: 1.196, name: "Square Meter" },
            { factor: 3098000, name: "Square Mile" },
            { factor: 1, name: "Square Yard" },
            { factor: 1 / 9, name: "Square Foot" },
            { factor: 1 / 1296, name: "Square Inch" },
            { factor: 11960, name: "Hectare" },
            { factor: 4840, name: "Acre" }];
        }
        else if (selectedUnit == "Energy") {
            $scope.param = [{ factor: 1 / 1000, name: "Joule" },
            { factor: 1, name: "Kilojoule" },
            { factor: 1 / 239.006, name: "Gram Calorie" },
            { factor: 4.184, name: "Kilo Calorie" },
            { factor: 3.6, name: "Watt Hours" },
            { factor: 3600, name: "Kilo Watt Hours" }];
        }
        else if (selectedUnit == "Frequency") {
            $scope.param = [{ factor: 1 / 1000, name: "Hertz" },
            { factor: 1, name: "Kilohertz" },
            { factor: 1000, name: "Megahertz" },
            { factor: 1000000, name: "Gigahertz" }];
        }
        else if (selectedUnit == "Length") {
            $scope.param = [{ factor: 100000, name: "Kilometer" },
            { factor: 100, name: "Meter" },
            { factor: 1, name: "Centimeter" },
            { factor: 1 / 10, name: "Millimeter" },
            { factor: 1 / 10000, name: "Micrometer" },
            { factor: 1 / 10000000, name: "Nanometer" }];
        }
        else if (selectedUnit == "Mass") {
            $scope.param = [{ factor: 1000000, name: "Tonne" },
            { factor: 1000, name: "Kilogram" },
            { factor: 1, name: "Gram" },
            { factor: 1 / 1000, name: "Milligram" },
            { factor: 1 / 1000000, name: "Microgram" }];
        }
        else if (selectedUnit == "Pressure") {
            $scope.param = [{ factor: 1, name: "Bar" },
            { factor: 1 / 100000, name: "Pascal" },
            { factor: 1 / 750.062, name: "Torr" }];
        }
        else if (selectedUnit == "Speed") {
            $scope.param = [{ factor: 1 / 2.237, name: "Miles per hour" },
            { factor: 1 / 3.281, name: "Foot per second" },
            { factor: 1, name: "Meter per second" },
            { factor: 1 / 3.6, name: "Kilometer per hour" },
            { factor: 1 / 1.944, name: "knot" }];
        }
        else if (selectedUnit == "Temperature") {
            $scope.param = [{ factor: 11, name: "Celsius" },
            { factor: 22, name: "Fahrenheit" },
            { factor: 33, name: "Kelvin" }];
        }
        else if (selectedUnit == "Time") {
            $scope.param = [{ factor: 1 / 86400, name: "second" },
            { factor: 1 / 1440, name: "Minute" },
            { factor: 1 / 24, name: "Hour" },
            { factor: 1, name: "Day" },
            { factor: 7, name: "Week" },
            { factor: 30.5, name: "Month" },
            { factor: 365, name: "Calender Year" }];
        }
        else if (selectedUnit == "Digital Storage") {
            $scope.param = [{ factor: 1 / 1000000, name: "Byte" },
            { factor: 1 / 8000000, name: "Bit" },
            { factor: 1 / 1000, name: "Kilobyte" },
            { factor: 1, name: "Megabyte" },
            { factor: 1000, name: "Gigabyte" },
            { factor: 1000000, name: "Terabyte" },
            { factor: 1000000000, name: "Petabyte" }];
        }
        else if (selectedUnit == "Data Transfer Rate") {
            $scope.param = [{ factor: 1 / 8000000, name: "Bit per second" },
            { factor: 1 / 1000, name: "Kilobyte per second" },
            { factor: 1, name: "Megabyte per second" },
            { factor: 1000, name: "Gigabyte per second" },
            { factor: 1000000, name: "Terabyte per second" }];
        }
    };
    $scope.final_factor;
    $scope.myCalculation = function (factor1, factor2, num, part) {
        if(part == 1){
            if (num == null) {
                $scope.num2 = null;
            }
            else if (factor1 == 11 && factor2 == 22) {
                $scope.num2 = ((num * 9 / 5) + 32);
            }
            else if (factor1 == 22 && factor2 == 33) {
                $scope.num2 = ((num - 32) * 5 / 9) + 273.15;
            }
            else if (factor1 == 11 && factor2 == 33) {
                $scope.num2 = num + 273.15;
            }
            else if (factor1 == 22 && factor2 == 11) {
                $scope.num2 = ((num - 32) * (5 / 9));
            }
            else if (factor1 == 33 && factor2 == 11) {
                $scope.num2 = num - 273.15;
            }
            else if (factor1 == 33 && factor2 == 22) {
                $scope.num2 = (num - 273.15) * (9 / 5) + 32;
            }
            else {
                final_factor = factor1 / factor2;
                $scope.num2 = num * final_factor;
            }
        }
        else if(part == 2){
            if (num == null) {
                $scope.num1 = null;
            }
            else if (factor1 == 11 && factor2 == 22) {
                $scope.num1 = ((num - 32) * (5 / 9));
            }
            else if (factor1 == 22 && factor2 == 33) {
                $scope.num1 = (num - 273.15) * (9 / 5) + 32;
            }
            else if (factor1 == 11 && factor2 == 33) {
                $scope.num1 = num - 273.15;
            }
            else if (factor1 == 22 && factor2 == 11) {
                $scope.num1 = ((num * 9 / 5) + 32);
            }
            else if (factor1 == 33 && factor2 == 11) {
                $scope.num1 = num + 273.15;
            }
            else if (factor1 == 33 && factor2 == 22) {
                $scope.num1 = ((num - 32) * 5 / 9) + 273.15;
            }
            else {
                final_factor = factor2 / factor1;
                $scope.num1 = num * final_factor;
            }
        }
        // console.log($scope.num2);
    }
});
