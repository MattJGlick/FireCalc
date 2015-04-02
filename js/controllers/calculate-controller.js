/**
 * Created by MattGlick on 4/2/2015.
 */
(function(angular) {
  'use strict';

  var app = angular.module('FireCalc', ['calculate-service']);

  app.controller("CalculateController", ['calculateService', function (calculateService) {
      this.income = 100;
      this.savingsPercentage = 20;
      this.showResult = false;

      this.toggleResult = function toggleResult() {
        this.total = calculateService.total(this.income, this.savingsPercentage);
        this.showResult = true;
      }
  }]);
})(window.angular);