// var playerX= 0;
// var playerDirectionFacing = 'right'
// var playerWalking = 0
// var playerSteps = 0
// var chestX= 0
// var fightFound = 0

// //Movement/sprite changes
// window.addEventListener('keydown', (e) => {
//     // switch(e.key){
//     //     case 'w':
//     //     console.log('x= '+playerX+'')
//     // }
//     switch(e.key){
//         case 'd':
 
//         document.getElementById('player-model').innerHTML='<img src="./Sprites/Warrior/playerwalkright.gif" alt="">'

//         if(fightFound=1){
//             playerX-=10
//             chestX-=10
//             playerDirectionFacing = 'right'
//             console.log('x= '+playerX+' player steps= '+playerSteps+'')
//             playerSteps++      
//     }else{break;}

// //Fight start from walking conditions

        
//         // setInterval(playerWalkingCheck,10)
//     }


//     switch(e.key){
  
//         case 'a':
//         document.getElementById('player-model').innerHTML='<img src="./Sprites/Warrior/playerwalkleft.gif" alt="">'

//     if(fightFound=1){
//         playerX+=10
//         chestX+=10
//         playerDirectionFacing = 'left'
//         console.log('x= '+playerX+' player steps= '+playerSteps+'')
//         playerSteps++      
// }else{break;}
             
//     }
   
// })
// // function playerWalkingCheck(){
// // playerWalking = 1
// // setTimeout(() => {
// //     playerWalking = 0
// // }, 500);
// // }

// // function checkPlayerAnimation(){
// // if (playerWalking=0 && playerDirectionFacing=='right'){
// //     document.getElementById('player-model').innerHTML='<img src="./Sprites/Warrior/playerfaceright.png" alt="">'
// // }
// // }

// setInterval(() => {
//     document.getElementById('overworld-map').style.backgroundPositionX=`${playerX}px`
//     document.getElementById('overworld-interactables').style.left=`${playerX}px`
//     document.getElementById('chest').innerHTML=`<a href="#"><img src="./Sprites/Background/Assets/Chest.png" alt="door" style="top:100px; left: ${chestX}px;" onmousedown="openChest()"></a>`
// }, 1);

// //Loop dungeon, check
// setInterval(() => {
// if(playerX>=5001){
//     playerX+=-9999;
//     // chestX+=-9999;

// //Resets chest position if you loop the stage
//     setTimeout(chestReset, 0);
// }    
// if(playerX<=-5001){
//     playerX+=9999;
//     // chestX+=9999;

// //Resets chest position if you loop the stage
//     setTimeout(chestReset, 0);
// }    
// }, 10);





