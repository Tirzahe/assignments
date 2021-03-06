// // Loop through the following array and count how many "computers" there are. Log the final count:
var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"];  
function computerCount(str){
    var arr = officeItems;
    var compCount = 0;
    for (var i = 0; i < arr.length; i++){
        if (arr[i] === str){
            compCount++;
        }
    }
    return compCount; 
}
console.log(computerCount("computer"));

// Loop through the following array and log to the console "old enough" if they are 18 or older, and "not old enough" if they aren't 18.
var peopleWhoWantToSeeMadMaxFuryRoad = [  
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },
    {
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
] 

var arr = peopleWhoWantToSeeMadMaxFuryRoad;
// console.log(arr);
function ageValidator(arr){
  // console.log(arr.length);
  var out = [];
  var gender = "";
    for (var i = 0; i < arr.length; i++){
      if (arr[i].gender === "female"){
        gender = "her";
      } else {
        gender = "him";
      }
      if (arr[i].age >= 18){
        out.push(arr[i].name + " is old enough to see Mad Max, let " + gender + " in.\n");
      } else {
          out.push(arr[i].name + " is not old enough to see Mad Max, don't let " + gender + " in.\n");
      } 
    }
    return out.join("");
}
console.log(ageValidator(arr));