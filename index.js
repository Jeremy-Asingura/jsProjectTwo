let usersAge = prompt("How old are you?");

  if(usersAge < 0){
    console.log("Please enter a valid input(not a negative number)");
  }

  else if (usersAge % 2 === 0){
    alert("Your age is an even number!!");
} 

  else if (usersAge % 2 === 1){
  alert("Your age is odd!!");
} 

   else{
   alert("Please give valid input next time");
}