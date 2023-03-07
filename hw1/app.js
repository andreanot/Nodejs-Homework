const fs = require('fs');

class User {
  constructor(username, password, age, isActive, dateCreated) {
    this.username = username;
    this.password = password;
    this.age = age;
    this.isActive = isActive;
    this.dateCreated = dateCreated;
  }
}

const users = [
    new User('user1' , 'pass1' , 18 , true , new Date()),
    new User('user2' , 'pass2' , 19 , true , new Date()),
    new User('user3' , 'pass3' , 20 , false , new Date()),
    new User('user4' , 'pass4' , 21 , true , new Date()),
    new User('user5' , 'pass5' , 22 , true , new Date()),
    new User('user6' , 'pass6' , 23 , false , new Date()),
    new User('user7' , 'pass7' , 24 , true , new Date()),
    new User('user8' , 'pass8' , 25 , true , new Date()),
    new User('user9' , 'pass9' , 26 , false , new Date()),
    new User('user10' , 'pass10' , 27 , false, new Date()),
];
const usersJSON = JSON.stringify(users);

fs.writeFile('users.json', usersJSON, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Users written to file');
});