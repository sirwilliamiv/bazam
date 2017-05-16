
// this will be an API endpoint to root api directory for login
bazam.factory('songFactory', function($http){



// module.exports = { ACR_ACCESS_ACCOUNT, ACR_SECRET_KEY, ACR_HOST }
      //gets local audio file and converts to base64
  function convert(url, callback){

      const xhr = new XMLHttpRequest();
      xhr.responseType = 'blob';
      xhr.onload = function() {
          const reader  = new FileReader();
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



    return new Promise ((resolve, reject) => {
  console.log("identify", msg)
      convert(msg,function(base64Data){
        // let audioB64 = "88999";
        let send64 = base64data

        //INSERT HEROKU URL
          $http.post(`https://vast-cove-65313.herokuapp.com/api/v1/song/find/${send64}`)
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
