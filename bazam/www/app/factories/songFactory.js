// this will be an API endpoint to root api directory for login
bazam.factory('songFactory', function($http) {




  const solvetheproblem = (send64) => {
    // alert("send64"+ send64)
    // const send64 = send64
    let send64Obj = {
      send64: send64
    }

    //INSERT HEROKU URL
    return $http.post(`https://vast-cove-65313.herokuapp.com/api/v1/song/find`, send64Obj)
      .then((data) => {
        // alert("hey")
        // alert(data)
        if (data) {
          alert("super success -->>>     " + data)
          return data
        }
        if (data.status === 201) {
          alert("song not found")

        } else {
          $location.path('/login');
        }
      })
      .catch((err) => {
        // alert('ERRROORRR')
        alert("eerrrrr from post in solvetheproblem" + err)
        return (err);
      });
    // });
  };

const convert = (url) => {
alert("path?--->" + url)
//gets local audio file and converts to base64
  // }
  //
  //    // alert("file conversion")
      // return new Promise((resolve,reject) => {
      //   resolve(url)
      // })
      ///******************************
      return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.responseType = 'blob';
        xhr.onload = function() {
          const reader = new FileReader();
          reader.readAsDataURL(xhr.response)

          reader.onloadend = function() {
            resolve(reader.result)
          }
        };
        xhr.open('GET', url);
        xhr.send();
        // resolve(xhr.response)
      });
      //
      xhr.send();
    } //end convert

  // }) //end  just let url pass thru promise











  return { convert, solvetheproblem } //end return
})













  // }
  // find:() => {
  //posts base64 encoded file to be identified via acrcloud
  // let identify = (msg) => {
  //  return new Promise ((resolve, reject) => {
  //       // alert("inside identify")
  //   // console.log("identify", msg)
  //       convert(msg, solvetheproblem )
  // }//end identify
