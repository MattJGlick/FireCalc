/**
 * Created by MattGlick on 4/2/2015.
 */
(function(angular) {
  'use strict';

  var app = angular.module('FireCalc', ['calculate-service']);

  app.controller("CalculateController", ['calculateService', function (calculateService) {
      this.showResult = false;

      this.toggleResult = function toggleResult() {
        this.retirementYear = calculateService.retirementYear(this.income, this.annualExpenses, this.retirementExpenses, this.loanAmount, this.interestRate);
        this.showResult = true;
      }
  }]);
})(window.angular);