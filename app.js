'use strict';

var name = prompt("Plese enter your name");
console.log("the user name is " + name);

var gender = prompt("Please enter your genger, 'male or female'");
console.log("the user gender is " + gender);

var age = prompt("please enter your age");
if(age <= 0) {
    alert( "please enter a valid number");}
   
var confirmation = confirm("Do you want to continue with welcoming messages?");
console.log("confirmation is " + confirmation)

if (gender == 'male'){
    alert("welcome Mr. " + name);}
    else if (gender == 'female'){
        alert("welcome Ms. " + name);}
        else {
            alert("welcome!")
}

///task06
var relationshipStatus = prompt("Are you single? ,answer with(yes/no)");
if(relationshipStatus == "yes"){
    var userRelationshiop = "the user is single";
} else {
    var userRelationshiop = "the user is not single";
}
console.log(relationshipStatus);

let Question1 = confirm("have you used mytodo before?") ;
if(Question1){
    var user = "the user has used mytodo before";
    alert("thats amazing!");
} else{
    var user = "the user has not used mytodo before";
    alert("you will enjoy it");
}

var websiteRate = confirm("Do you want to rate the website?");
if(websiteRate){
    var userRate = "the user wants to rate";
} else{
    var userRate = "the user doesn't want to rate"
}

let arr = [name, gender, age, userRelationshiop, user, userRate];
console.log(arr);
console.log(user);
console.log(userRate);
