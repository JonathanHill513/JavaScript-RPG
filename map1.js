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

//room1
//facing north
if(fightStart !==true){
setTimeout(mapCheck,10)

function mapCheck(){

//room1
//north
if(xValue==0 &&  yValue==0 && facingValue==0){

document.getElementById('pov').innerHTML = hall;
console.log('bruh');
}
else{
    document.getElementById('pov').innerHTML == '';
}
//east
if(xValue==0 &&  yValue==0 && facingValue==1){

document.getElementById('pov').innerHTML = wall;
console.log('bruh');
}
else{
    document.getElementById('pov').innerHTML == '';
}
//south
if(xValue==0 &&  yValue==0 && facingValue==2){

document.getElementById('pov').innerHTML = deadend;
console.log('bruh');
}
else{
    document.getElementById('pov').innerHTML == '';
}
//west
if(xValue==0 &&  yValue==0 && facingValue==3){

document.getElementById('pov').innerHTML = wall;
console.log('bruh');
}
else{
    document.getElementById('pov').innerHTML == '';
}

//room2
//north
if(xValue==0 &&  yValue==1 && facingValue==0){

document.getElementById('pov').innerHTML = intersection;
console.log('bruh');
}
else{
    document.getElementById('pov').innerHTML == '';
}
//east
if(xValue==0 &&  yValue==1 && facingValue==1){

document.getElementById('pov').innerHTML = intersection;
console.log('bruh');
}
else{
    document.getElementById('pov').innerHTML == '';
}
//south
if(xValue==0 &&  yValue==1 && facingValue==2){

document.getElementById('pov').innerHTML = intersection;
console.log('bruh');
}
else{
    document.getElementById('pov').innerHTML == '';
}
//west
if(xValue==0 &&  yValue==1 && facingValue==3){

document.getElementById('pov').innerHTML = intersection;
console.log('bruh');
}
else{
    document.getElementById('pov').innerHTML == '';
}

//room3
//north
if(xValue==-1 &&  yValue==1 && facingValue==0){

document.getElementById('pov').innerHTML = wall;
console.log('bruh');
}
else{
    document.getElementById('pov').innerHTML == '';
}
//east
if(xValue==-1 &&  yValue==1 && facingValue==1){

document.getElementById('pov').innerHTML = hall;
console.log('bruh');
}
else{
    document.getElementById('pov').innerHTML == '';
}
//south
if(xValue==-1 &&  yValue==1 && facingValue==2){

document.getElementById('pov').innerHTML = deadendopenleft;
console.log('bruh');
}
else{
    document.getElementById('pov').innerHTML == '';
}
//west
if(xValue==-1 &&  yValue==1 && facingValue==3){

document.getElementById('pov').innerHTML = deadendleft;
console.log('bruh');
}
else{
    document.getElementById('pov').innerHTML == '';
}


//room4
//north
if(xValue==-1 &&  yValue==1 && facingValue==0){

document.getElementById('pov').innerHTML = wall;
console.log('bruh');
}
else{
    document.getElementById('pov').innerHTML == '';
}
//east
if(xValue==-1 &&  yValue==1 && facingValue==1){

document.getElementById('pov').innerHTML = hall;
console.log('bruh');
}
else{
    document.getElementById('pov').innerHTML == '';
}
//south
if(xValue==-1 &&  yValue==1 && facingValue==2){

document.getElementById('pov').innerHTML = deadendopenleft;
console.log('bruh');
}
else{
    document.getElementById('pov').innerHTML == '';
}
//west
if(xValue==-1 &&  yValue==0 && facingValue==3){

document.getElementById('pov').innerHTML = deadendleft;
console.log('bruh');
}
else{
    document.getElementById('pov').innerHTML == '';
}
}
//room4
//north
if(xValue==-1 &&  yValue==0 && facingValue==0){

document.getElementById('pov').innerHTML = deadendopenleft;
console.log('bruh');
}
else{
    document.getElementById('pov').innerHTML == '';
}
//east
if(xValue==-1 &&  yValue==0 && facingValue==1){

document.getElementById('pov').innerHTML = wall;
console.log('bruh');
}
else{
    document.getElementById('pov').innerHTML == '';
}
//south
if(xValue==-1 &&  yValue==0 && facingValue==2){

document.getElementById('pov').innerHTML = deadend;
console.log('bruh');
}
else{
    document.getElementById('pov').innerHTML == '';
}
//west
if(xValue==-1 &&  yValue==0 && facingValue==3){

document.getElementById('pov').innerHTML = wall;
console.log('bruh');
}
else{
    document.getElementById('pov').innerHTML == '';
}
}

//MAKE THE IMAGES GET ADDED VIA STRING RATHER THAN IDs FOR MOVEMENT!!!
//JUST A NOTE TO SELF