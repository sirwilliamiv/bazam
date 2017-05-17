// this will be an API endpoint to root api directory for login
bazam.factory('songFactory', function($http) {



    // module.exports = { ACR_ACCESS_ACCOUNT, ACR_SECRET_KEY, ACR_HOST }
    //gets local audio file and converts to base64
    //
    //
    const solvetheproblem = (send64) => {

       // const send64 = send64

      //INSERT HEROKU URL
      $http.post(`https://vast-cove-65313.herokuapp.com/api/v1/song/find/${send64}`, { send64 })
        .then((data) => {
          // alert("hey")
          alert("data things  success post    ->" + data)
          if (data.status === 200) {
            alert("super success " + data)
            return (data);
          }
          if (data.status === 201) {
            alert("song not found")

          } else {
            $location.path('/login');
          }
        })
        .catch((err) => {
          alert('ERRROORRR')
          alert("eerrrrr" + err)
          return (err);
        });
      // });
    };

  const convert = (url) => {
    // alert("file conversion")

    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
      xhr.responseType = 'blob';
      xhr.onload = function() {
          const reader  = new FileReader();
          reader.onloadend = function () {
              reader.result
          };
         resolve( reader.readAsDataURL(xhr.response))
      };
      xhr.open('GET', url);
      xhr.send();
        // resolve(xhr.response)
            });
            //
          xhr.send();
          } //end convert

        // }) //end promise

      // }
      // find:() => {
      //posts base64 encoded file to be identified via acrcloud
      // let identify = (msg) => {
      //  return new Promise ((resolve, reject) => {
      //       // alert("inside identify")
      //   // console.log("identify", msg)
      //       convert(msg, solvetheproblem )
      // }//end identify



    return { convert, solvetheproblem } //end return
  })
