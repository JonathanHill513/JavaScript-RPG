var playerDanger = playerHealth *.25;
function playerCheck(){
    if(playerHealth<=playerDanger+2){
         document.getElementById('player-hp').style.background='blue'
     
     setTimeout(() => {
         document.getElementById('player-hp').style.background='black';
     }, 500);
     } 
     if(playerHealth<=0){
        document.getElementById('player-hp').style.background='red';
     }
 }
 
 setInterval(playerCheck, 1000);

 setInterval(() => {
    document.getElementById('player-entire-menu').style.display="block"
}, 500);

//Menu items display
setInterval(() => {
    document.getElementById('player-hp').innerHTML="<span>HP: "+playerHealth+"</span>";
    document.getElementById('player-mp').innerHTML="<span>MP: "+playerMana+"</span>";
}, 100);