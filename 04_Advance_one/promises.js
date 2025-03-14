const promiseOne = new Promise(function (resolve, reject) {
    //Do an async task
    //DB calls,cryptography
    setTimeout(function () {
      console.log("Async task is completed");
      resolve();
    }, 1000);
  });
  
  promiseOne.then(function () {
    console.log("Promise completed");
  });
  
  new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("Async taks 2");
      resolve();
    }, 1000);
  }).then(function () {
    console.log("Asyn 2 resolved");
  });
  
  const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve({ username: "Chai", email: "cahi@example.com" });
    }, 1000);
  });
  
  promiseThree.then(function (user) {
    console.log(user.username);
  });
  
  const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
      let error = false;
      if (!error) {
        resolve({ usename: "Alen", password: "01234" });
      } else {
        reject("ERROR: Something went wrong");
      }
    }, 1000);
  });
  
  promiseFour
    .then((user) => {
      console.log(user);
      return user.usename;
    })
    .then((userName) => {
      console.log(userName);
    })
    .catch(function (err) {
      console.log(`Here is the: ${err}`);
    })
    .finally(() => {
      console.log("finally this will be done on both side ");
    });
  
  const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
      let error = true;
      if (!error) {
        resolve({ username: "Alen", password: "123" });
      } else {
        reject("Error:JS went wrong");
      }
    }, 1000);
  });
  
  // async function consumePromiseFive() {
  //   try {
  //     const response = await promiseFive;
  //     console.log(response);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  
  // consumePromiseFive();
  
  async function getAllUsers() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users/");
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log("E:", error);
    }
  }
  
  getAllUsers();
  
  fetch("https://api.github.com/users/hiteshchoudhary")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => console.log(err));
  