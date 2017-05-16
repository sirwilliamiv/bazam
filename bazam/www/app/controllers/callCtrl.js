bazam.controller('callCtrl',function($scope, $ionicLoading, songFactory,$window){




const recorder = new Object;

recorder.record = function() {
  alert("recording, before")
  $scope.message1 ="recordingsample,before"
  window.plugins.audioRecorderAPI.record( function(msg) {
    $scope.message1 ="recordingsample 7 seconds"
    // complete
    alert('ok: ' + msg);
  }, function(msg) {
       $scope.message1 ="recording failed"
    // failed
    alert('ko: ' + msg);
  }, 7); // record 7 seconds
}

  $scope.bazam = (cb)=> {
    console.log("1/5")
    $scope.message1 ="starting"
    let things = "stuff"
    alert("starting")
    // songFactory.identify(things)
    recorder.record()
    console.log('recording!!!')
  }

  $scope.findSong = (cb) => {
    console.log("4/5")
    $scope.message1 ="findingSong"
    alert("calling songfactory")
    songFactory.identify(cb)
    .then((res) => {
      console.log("5/5")
      console.log("res return", res)
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
