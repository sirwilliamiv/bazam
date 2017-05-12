
// this will be an API endpoint to root api directory for login
bazam.factory('songFactory', function($http){


      //gets local audio file and converts to base64
  function convertFileToDataURLviaFileReader(url, callback){
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'blob';
      xhr.onload = function() {
          var reader  = new FileReader();
          reader.onloadend = function () {
              callback(reader.result);
          };
          reader.readAsDataURL(xhr.response);
      };
      xhr.open('GET', url);
      xhr.send();
  }
    find:() => {
//posts base64 encoded file to background process to be identified via acrcloud
let identify = (msg) => {

    return new Promise ((resolve, reject) => {
      convertFileToDataURLviaFileReader(msg,function(base64Data){
        var audioB64 = base64Data;
          $http({
          url:"http://localhost:3000/api/v1/song/find",
          method: "POST",
          data: {
          audio: audioB64
        }
    })
    .success((data) => {
      if (data.msg === 'Success') {
        resolve(data);
      } else {
        $location.path('/fail');
      }
    })
    .error((err) => {
      reject(err);
        });
      });
    });
  };



}//end find

  return { identify } //end return
})
