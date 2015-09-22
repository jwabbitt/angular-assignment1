
angular.module('RepsApp', [
  'RepsAppControllers'
]);

angular
  .module('RepsAppControllers', [
    'repsService'
  ])
  .controller('MainCtrl', function (reps) {
    var main = this;
    main.reps = [];

    main.searchByZip = function (zip) {
      reps.allByZip(zip).then(function (data) {
        main.reps = data;
      });
    };
    //Search Senators
    main.searchSensByName = function (senName) {
      reps.sensByName(senName).then(function (data) {
        main.reps = data;
      });
    };

    main.searchSensByState = function (senState) {
      reps.sensByState(senState).then(function (data) {
        main.reps = data;
      });
    };

    //Search Representatives
    main.searchRepsByName = function (repName) {
      reps.repsByName(repName).then(function (data) {
        main.reps = data;
      });
    };

    main.searchRepsByState = function (repState) {
      reps.repsByState(repState).then(function (data) {
        main.reps = data;
      });
    };
  });

angular
  .module('repsService', [])
  .factory('reps', function ($http) {
    var host = 'http://dgm-representatives.herokuapp.com';
    return {
      allByZip: function (zip) {
        return $http
          .get(host + '/all/by-zip/' + zip)
          .then(function(response) {
            return response.data;
          });
      },
      sensByName: function (senName) {
        return $http
          .get(host + '/sens/by-name/' + senName)
          .then(function (response) {
            return response.data;
          });
      },
      sensByState: function (senState) {
        return $http
          .get(host + '/sens/by-state/' + senState)
          .then(function (response) {
            return response.data;
          });
      },
      repsByName: function (repName) {
        return $http
          .get(host + '/reps/by-name/' + repName)
          .then(function (response) {
            return response.data;
          });
      },
      repsByState: function (repState) {
        return $http
          .get(host + '/reps/by-state/' + repState)
          .then(function (response) {
            return response.data;
          });
      }
    };
  });
