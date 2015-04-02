/**
 * Created by MattGlick on 4/2/2015.
 */
var app = angular.module('FireCalc', []);

app.controller("CalculateController", function () {
    this.income = 100;
    this.savingsPercentage = 20;

    this.total = function total() {
        return this.income * this.savingsPercentage;
    }
});