

// setInterval(getCoords, 500)
// function getCoords(){
// coords = `${xValue},${yValue},${facingValue}`
// console.log(coords);
// }
// 0 is north, 1 is east, 2 is south, 3 is west!!!
//face value resets if = to -1 or 4
var xValue=0
var yValue=0
var facingValue=0

function playerTurnRight(){

facingValue ++;
console.log(`${xValue},${yValue},${facingValue}`);
if(facingValue>3){
        facingValue=0;
        } 
        if(facingValue<=-1){
        facingValue =3;
        }
        setTimeout(mapCheck,10);    
}
function playerTurnLeft(){
facingValue --;
console.log(`${xValue},${yValue},${facingValue}`);
if(facingValue>3){
        facingValue=0;
        } 
        if(facingValue<0){
        facingValue=3;
        }    
        setTimeout(mapCheck,10);    

}
function playerMoveUp(){
        if(facingValue==0){
        yValue++;
        }
        if(facingValue==1){
        xValue++;
        }
        if(facingValue==2){
        yValue--;
        }
        if(facingValue==3){
        xValue--;
        }
console.log(`${xValue},${yValue},${facingValue}`);
        setTimeout(mapCheck,10);    

}
function playerMoveDown(){
    if(facingValue==0){
        yValue--;
        }
        if(facingValue==1){
        xValue--;
        }
        if(facingValue==2){
        yValue++;
        }
        if(facingValue==3){
        xValue++;
        }
console.log(`${xValue},${yValue},${facingValue}`);
        setTimeout(mapCheck,10);    

}
