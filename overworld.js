

// setInterval(getCoords, 500)
// function getCoords(){
// coords = `${xValue},${yValue},${facingValue}`
// console.log(coords);
// }
// 0 is north, 1 is east, 2 is south, 3 is west!!!
//face value resets if = to -1 or 4
// var xValue=0
// var yValue=0
// var facingValue=0

// function playerTurnRight(){

// facingValue ++;
// console.log(`${xValue},${yValue},${facingValue}`);
// if(facingValue>3){
//         facingValue=0;
//         } 
//         if(facingValue<=-1){
//         facingValue =3;
//         }
//         setTimeout(mapCheck,10);    
// }
// function playerTurnLeft(){
// facingValue --;
// console.log(`${xValue},${yValue},${facingValue}`);
// if(facingValue>3){
//         facingValue=0;
//         } 
//         if(facingValue<0){
//         facingValue=3;
//         }    
//         setTimeout(mapCheck,10);    

// }
// function playerMoveUp(){
//         if(facingValue==0){
//         yValue++;
//         }
//         if(facingValue==1){
//         xValue++;
//         }
//         if(facingValue==2){
//         yValue--;
//         }
//         if(facingValue==3){
//         xValue--;
//         }
// console.log(`${xValue},${yValue},${facingValue}`);
//         setTimeout(mapCheck,10);    

// }
// function playerMoveDown(){
//     if(facingValue==0){
//         yValue--;
//         }
//         if(facingValue==1){
//         xValue--;
//         }
//         if(facingValue==2){
//         yValue++;
//         }
//         if(facingValue==3){
//         xValue++;
//         }
// console.log(`${xValue},${yValue},${facingValue}`);
//         setTimeout(mapCheck,10);    

// }

// var chestRespawnX = 338

//Chest Respawn Location
setInterval(() => {
chestRespawnX = (Math.random()*-3000)+3000
}, 10);



//Chest disappearing Function
function chestClear(){
        
document.getElementById('chest').style.display='none';
chestX = chestRespawnX
}

//Chest Reappearing
function chestReset(){
setTimeout(() => {
document.getElementById('chest').style.display='block';
document.getElementById('chest').innerHTML=`<a href="#"><img src="./Sprites/Background/Assets/Chest.png" alt="door" style="top:100px; left: ${chestRespawnX}px;" onmousedown="chestReset()"></a>`
}, 1000);        
}



itemFound = 'none'
itemNum = 0

//Chest Open RNG
function chestMsg(){
itemNum = Math.floor(Math.random()*3)+1

if(itemNum==1){
        itemFound='Rope'
}
if(itemNum==2){
        itemFound='Bomb'
}

document.getElementById('overworld-text').innerHTML="<h2>You picked up<br>"+itemFound+"</h2>";
setTimeout(() => {
document.getElementById('overworld-text').innerHTML=''    
        
}, 1000);    
}

function openChest(){
setTimeout(chestClear, 0);
setTimeout(chestMsg, 0);
}
