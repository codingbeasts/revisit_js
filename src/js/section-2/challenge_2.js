/*
    Coding Challenge 2 

John and Mike both play basketball in different teams. In the latest 3 games, John's team scored
89,120 and 103 points, while Mike's team scored 116,94, and 123 points.

1. Calculate the average score for each team.
2. Decide which teams wins in average (highest average score), and print the winner to the 
    console.
3. Then change the score to show different winners don't forget to take into account there might
    be a draw (the same average score).
4. Extra: Mary also plays basketball, and her team scored 97,134 and 105 points. Like before, log
    the average winner to the console.

5. Like before, change the score to generate different winners, keeping in mind there might be a 
    draw.
   */

console.log("\n\n\n\n\t\t\t\t\t Challenge 2");

var average = function (item) {
  var sum = 0;
  item.forEach(function (n) {
    sum += n;
  });
  return sum / item.length;
};

var johnTeam = [89, 120, 103];
var mikeTeam = [116, 94, 123];

console.log("John Team's Average score : " + average(johnTeam));
console.log("Mike Team's Average score : " + average(mikeTeam)); // step 1 completed;

function higher(team1, team2) {
  if (team1 > team2) {
    console.log("John's Teams score higher than Mike's Team");
  } else if (team1 === team2) {
    console.log("Both Team draw");
  } else {
    console.log("Mike's Teams score higher than John's Team");
  } // step 2 completed
}
higher(average(johnTeam), average(mikeTeam));

// johnTeam = [95, 128, 119];
// mikeTeam = [110, 142, 90];

console.log("John Team's Average score : " + average(johnTeam));
console.log("Mike Team's Average score : " + average(mikeTeam)); // step 1 completed;
higher(average(johnTeam), average(mikeTeam)); //challenge 3

maryTeam = [97, 134, 105];
console.log("Mary Team's Average score : " + average(maryTeam));

console.log("\n\n\n\nHigher of 3 teams");

function higher1(team1, team2, team3) {
  if (team1 > team2 && team1 > team3 && team2 !== team3) {
    console.log("John's Team has higher score than Mike and Mary");
  } else if (team1 > team2 && team2 === team3) {
    console.log("John's Team has higher score than Mike and Mary both tie");
  } else if (team1 < team2 && team2 === team3) {
    console.log("John's Team has lesser score than Mike and Mary both tie");
  } else if (team2 > team1 && team2 > team3 && team1 !== team3) {
    console.log("Mike's Team has higher score than John and Mary");
  } else if (team2 > team1 && team1 === team3) {
    console.log("Mike's Team has higher score than John and Mary both tie");
  } else if (team2 < team1 && team1 === team3) {
    console.log("Mike's Team has lesser score than John and Mary both tie");
  } else if (team3 > team1 && team3 > team2 && team1 !== team2) {
    console.log("Mary's Team has higher score than John and Mike");
  } else if (team3 > team1 && team1 === team2) {
    console.log("Mary's Team has higher score than John and Mike both tie");
  } else if (team3 < team1 && team1 === team2) {
    console.log("Mary's Team has lesser score than John and Mike both tie");
  } else {
    console.log("Tie");
  }
}
higher1(average(johnTeam),average(mikeTeam), average(maryTeam));

console.log("John, Mike and Mary Team's Score "+average(johnTeam)+', '+average(mikeTeam)+' and '+average(maryTeam));
