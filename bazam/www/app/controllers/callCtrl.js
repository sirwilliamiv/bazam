bazam.controller('callCtrl',function($scope, $ionicLoading, songFactory,$window){


const record = new Object;

record.recordSample = () => {
  window.plugins.audioRecorderAPI.record( (cb) => {
    console.log("cb", cb)
    $scope.bazam(cb);
  }, (cb) => {
    console.log("nope!", cb)
  }, 12);
};

  $scope.bazam = (cb)=> {
    record.recordSample()
    console.log('recording!!!')
  }

  $scope.findSong = (cb) => {
    songFactory.identify(cb)
    .then((res) => {
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
