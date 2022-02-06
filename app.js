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
} else if(relationshipStatus == "no"){
    var userRelationshiop = "the user is not single";
} else {
    alert("invalid");
}
console.log(relationshipStatus);

let Question1 = promt("have you used mytodo before?") ;
if(Question1 == "yes"){
    var user = "the user has used mytodo before";
    alert("thats amazing!");
} else if (Question1 == "no"){
    var user = "the user has not used mytodo before";
    alert("you will enjoy it");
}else{
    alert("invalid")
}

var websiteRate = promt("Do you want to rate the website?");
if(websiteRate == "yes"){
    var userRate = "the user wants to rate";
} else if(websiteRate == "no"){
    var userRate = "the user doesn't want to rate"
}else{
    alert("invalid")
}

let arr = [userRelationshiop, user, userRate];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
