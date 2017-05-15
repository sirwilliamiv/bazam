
// this will be an API endpoint to root api directory for login
bazam.factory('songFactory', function($http){


      //gets local audio file and converts to base64
  function convert(url, callback){
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
    // find:() => {
//posts base64 encoded file to be identified via acrcloud
let identify = (msg) => {
  let stuff = 'bingo'
//
//     $http.post(`http://localhost:3000/api/v1/song/find/${stuff}`)
//   })
// }

    return new Promise ((resolve, reject) => {
       $http.post(`http://localhost:3000/api/v1/song/find/${stuff}`)

      console.log("identify", msg)
      convert(msg,function(base64Data){
        var audioB64 = base64Data;
          $http({
          url:`http://localhost:3000/api/v1/song/find/${msg}`,
          method: "POST",
          data: {
          audio: audioB64
        }
    })
    .success((data) => {
      if (data.status === 200) {
        resolve(data);
      } else {
        $location.path('/login');
      }
    })
    .error((err) => {
      reject(err);
        });
      });
    });




}//end identify

  return { identify } //end return
})
