// this will be an API endpoint to root api directory for login
bazam.factory('userFactory', function($http){
  return {
    login: (user) => {
      // console.log("login in userfactory", user)
      //   $http.post({
      //   'https://localhost:3000/api/v1/user/',
      //   {
      //     name: user.name,
      //     email: user.email,
      //     password: user.password
      //   }
      // }).then( (res) => {
      //   if(res.status === 201){
      //     return { res.data}
      //   } else {
      //     return { msg: "Registration did not happen "}
      //   }

      // })


    },
    register: (user) => {
      console.log("register in userfactory", user)
        $http.post('http://localhost:3000/api/v1/user/new', user)
        .then( (res) => {
        if(res.status === 201){
          return { user: res.data}
        } else {
          return { msg: "Registration did not happen "}
        }
      })

    }
  } //end of return
})
