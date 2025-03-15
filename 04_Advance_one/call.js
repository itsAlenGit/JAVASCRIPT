function SetUsername(username) {
    //complex BD calls....
    // console.log(this);
  
    this.username = username;
  }
  
  function createUser(username, email, password) {
    SetUsername.call(this, username); //ynha per function call nhi hua h sirf reffrence gaya h
    this.email = email;
    this.password = password;
  }
  
  const chai = new createUser("Chai", "Chai@12334.gamil.com", "123456");
  console.log(chai);
  