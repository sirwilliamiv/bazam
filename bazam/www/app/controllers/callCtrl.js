bazam.controller('callCtrl',function($scope, $ionicLoading, songFactory,$window){


const record = new Object;

record.recordSample = () => {
  console.log("2/5")
  $window.plugins.audioRecorderAPI.record( (cb) => {
    console.log("3/5")
    console.log("cb", cb)
    $scope.findSong(cb);
  }, (cb) => {
    console.log("nope!", cb)
  }, 8);
};

  $scope.bazam = (cb)=> {
    console.log("1/5")
    let things = "stuff"
    // songFactory.identify(things)
    record.recordSample()
    console.log('recording!!!')
  }

  $scope.findSong = (cb) => {
    console.log("4/5")
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
