/* 
Function takes in a list 

Outputs list random group assignment

Maximum 100

*/

/* 

[
[], [], []
]

*/


/* 
  List of names --> (array of strings) parameter
  return groups (list)

*/

let names = [
  "nathan",
  "mika",
  "matt",
  "paul",
  "roger",
  "tim",
  "sarah",
  "janet",
  "alfred",
  "leon"
]


let randomAssignment = (list) => {
  let randomList = new Array(list.length);

  for (let i = 0; i < list.length; i++) {
    let random = randomNum(list, randomList);
    randomList[random] = list[i];
  }


  let groupAssignment = [];
  let group = [];

  for (let j = 0; j < randomList.length; j++) {
    if (group.length === 4) {
      groupAssignment.push(group);
      group = [];
    } else {
      if (j === randomList.length-1) {
        groupAssignment.push(group);
      }
    }

    group.push(randomList[j]);
  }

  return groupAssignment;
}

let randomNum = (list, randomList) => {

  let randomNumber = Math.floor(Math.random() * list.length)

  if (randomList[randomNumber]) {
    randomNumber = randomNum(list, randomList);
  }

  return randomNumber;
}

console.log(randomAssignment(names));