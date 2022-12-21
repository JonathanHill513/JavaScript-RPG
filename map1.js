var wall = '<img src="./rooms/wall.png" id="wall">'
var hall = '<img src="./rooms/hall.png" id="hall">'
var deadend = '<img src="./rooms/deadendl.png" id="deadend">'
var intersection = '<img src="./rooms/intersection.png" id="intersection">'
var deadendleft = '<img src="./rooms/deadendleft.png" id="intersection">'
var deadendright = '<img src="./rooms/deadendright.png" id="intersection">'
var deadendopenright = '<img src="./rooms/deadendopenright.png" id="intersection">'
var deadendopenleft = '<img src="./rooms/deadendopenleft.png" id="intersection">'

var fightStart = false;


// if(fightStart==true){
// document.getElementById('effects').style.display='block';
// document.getElementById('overworld').style.display='none';
// }
// if(fightStart==false){
//     document.getElementById('effects').style.display='none';
// }

if(fightStart !==true){
setTimeout(mapCheck,10)
}

//MAKE THE IMAGES GET ADDED VIA STRING RATHER THAN IDs FOR MOVEMENT!!!
//JUST A NOTE TO SELF