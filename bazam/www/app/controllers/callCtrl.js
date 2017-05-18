bazam.controller('callCtrl', function($scope, $ionicLoading, songFactory, $window, $http) {




  const recorder = new Object;

  recorder.record = function() {
    // alert("recording, before")
    $scope.message1 = "recordingsample,before"
    window.plugins.audioRecorderAPI.record(function(data) {
      // success
      $scope.findSong(data)
    }, function(data) {
      // failed
      alert('fail: ' + msg);
    }, 5); // record 7 seconds
  }

  $scope.bazam = () => {
    recorder.record()
  }

  $scope.findSong = (data) => {

      songFactory.convert(data)
        .then((base64toPost) => {
          // alert("convert resolve base?"+ base64toPost)
          // up to here works
          return songFactory.solvetheproblem(base64toPost)
            .then((songFound) => {
              // alert("solvetheproblem resolve")
              return $scope.message1 = songFound
            })
            .catch((err) => {
              return alert("songfound err" + err.message + err)
            })
        }).catch((err) => {
          // alert("ERROR IN SONGFACTOR.INDEITFY")
          return alert("last catch in findsong  >  " + err.erorr +"   " + err.message)
        })
    }
    //things go here
    //  $scope.showLoading = function() {
    //    $ionicLoading.show({
    //       template: 'Loading...'
    //    });
    // };

  // $scope.hideLoading = function(){
  //    $ionicLoading.hide();
  // };
  // });
})
