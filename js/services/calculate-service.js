/**
 * Created by MattGlick on 4/1/2015.
 */

(function (angular) {
  'use strict';

  var app = angular.module('calculate-service', []);

  app.factory('calculateService', function () {
    var retirementYear = function total(income, annualExpenses, retirementExpenses, loanAmount, interestRate) {

      // retirement expenses must be 4% of your portfolio to make sure you are only pulling out what you need
      var mimRetirementAmount = retirementExpenses * 25;
      var annualRemaining = income - annualExpenses;

      var inside = 1 - ((interestRate * loanAmount) / (annualRemaining / 12));
      var bottom = Math.log(1 + (interestRate));
      var top = -Math.log(inside);

      console.log(inside)
      console.log(top);
      console.log(bottom);

      var loanYears = top / bottom
      console.log(loanYears);
      return income * annualExpenses;
    };

    return {
      retirementYear: retirementYear
    }
  })
})(window.angular);