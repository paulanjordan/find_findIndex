// Write a function called `findUserByUsername` which accepts an array of objects, each with a key of username, and a string. 
// The function should return the first object with the key of username that matches the string passed to the function. 
// If the object is not found, return undefined. 
function findUserByUsername(usersArray, username) {
  return usersArray.find(function(value){
    return value.username === username;
  })
}


//Write a function called `removeUser` which accepts an array of objects, each with a key of username, and a string. 
//The function should remove the object from the array. If the object is not found, return undefined.
function removeUser(usersArray, username) {
  let foundIndex = usersArray.findIndex(function(user){
    return user.username === username;
  })
  if(foundIndex === -1) return;
  
  return usersArray.splice(foundIndex,1)[0];
}