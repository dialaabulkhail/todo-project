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
    var userRelationshiop = "yes";
} else if(relationshipStatus == "no"){
    var userRelationshiop = "no";
} else {
    alert("invalid");
}
console.log(relationshipStatus);

let Question1 = prompt("have you used mytodo before?") ;
if(Question1 == "yes"){
    var user = "yes";
    alert("thats amazing!");
} else if (Question1 == "no"){
    var user = "no";
    alert("you will enjoy it");
}else{
    alert("invalid")
}

var websiteRate = prompt("Do you want to rate the website?");
if(websiteRate == "yes"){
    var userRate = "yes";
} else if(websiteRate == "no"){
    var userRate = "no"
}else{
    alert("invalid")
}

let arr = [userRelationshiop, user,userRate ];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);   
}

