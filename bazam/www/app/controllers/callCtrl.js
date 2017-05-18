bazam.controller('callCtrl', function($scope, $ionicLoading, songFactory, $window, $http) {




  const recorder = new Object;

  recorder.record = function() {
      window.plugins.audioRecorderAPI.record(function(data) {
        // success
        $scope.findSong(data)
          // $scope.arrayBufferToBase64(data)
      }, function(data) {
        // failed
        alert('fail: ' + msg);
      }, 5); // record 7 seconds
    } //end recorder.record

  $scope.bazam = () => {
    recorder.record()

  }



  $scope.findSong = (data) => {

      songFactory.convert(data)
        .then((base64toPost) => {
          // alert("convert resolve base?"+ base64toPost)
          // up to here works
        //   return $scope.message1 = base64toPost
        // }).catch((err) => {
        //   alert(err)
        // })

          return songFactory.solvetheproblem(base64toPost)
            .then((songFound) => {
              // alert("solvetheproblem resolve")
              return $scope.message1 = songFound.data
            })
            .catch((err) => {
              return alert("songfound err" + err.message + err)
            })
        }).catch((err) => {
          // alert("ERROR IN SONGFACTOR.INDEITFY")
          return alert("last catch in findsong  >  " + err.erorr + "   " + err.message)
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
