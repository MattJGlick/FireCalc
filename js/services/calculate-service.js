/**
 * Created by MattGlick on 4/1/2015.
 */

(function (angular) {
  'use strict';

  var app = angular.module('calculate-service', []);

  app.factory('calculateService', function () {
    var total = function total(income, savingsPercentage) {
      return income * savingsPercentage;
    };

    return {
      total: total
    }
  })
})(window.angular);