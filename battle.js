//Player base stats
var playerHealth = 20
var playerStrength = 1
var playerSpeed = 10
var playerMana = 10
var playerDamageBonus = 0

setInterval(() => {
    document.getElementById('player-entire-menu').style.display="block"
}, 500);

//Enemy stats
var enemyHealth =20
var enemyStrength = 0
var enemySpeed = 5
var enemyWeakness ="???"
var enemyBio = "Description of enemy here"
var enemyStats =`<br>HP: ${enemyHealth}<br>Strength: ${enemyStrength}<br>Speed: ${enemySpeed}<br>Weakness: ${enemyWeakness}<br> ${enemyBio}`

var postXp = enemyHealth+enemyStrength+enemySpeed;


//Enemy attacks
var enemyAttacks = [
    {
        name:"Fire Ball",
        damage:3,
        effect:"Fire",
        postdamage:"That's hot, ngl"
    },
    {
        name:"Punch",
        damage:80,
        effect:"None",
        postdamage:"That's hot, ngl"
    },
    {
        name:"Kick",
        damage:3,
        effect:"None",
        postdamage:"That's hot, ngl"
    },
]



//Battle system

//Player Attacking Phase
function playerAttackReady(){
    document.getElementById('player-entire-menu').style.marginLeft="-1000px";
    document.getElementById('player-item-menu').style.left='-500px';

    setTimeout(playerAttack, 100);
    // setTimeout(enemyAttack, 2000);
}

//Player Attacking With Boomerang
function playerBoomerangReady(){
    playerDamageBonus=10;
    document.getElementById('player-entire-menu').style.marginLeft="-1000px";
    document.getElementById('player-item-menu').style.left='-500px';
    var playerInitDamage = playerStrength;

    playerStrength += playerDamageBonus;
    setTimeout(() => {
    playerStrength=playerInitDamage;
    }, 1000);
    setTimeout(playerAttack, 100);

}
//Player Attacking With BOMB

function playerBombReady(){
if(currentBombs>0){    
    playerDamageBonus=20;
    document.getElementById('player-entire-menu').style.marginLeft="-1000px";
    document.getElementById('player-item-menu').style.left='-500px';
    var playerInitDamage = playerStrength;
    playerStrength += playerDamageBonus;
    setTimeout(() => {
    playerStrength=playerInitDamage;
    }, 1000);
    setTimeout(playerAttack, 100);
    currentBombs--;
}
}
//Using rope
function playerRopeReady(){
    if(currentRope>0){
    playerDamageBonus=0;
    document.getElementById('player-entire-menu').style.marginLeft="-1000px";
    document.getElementById('player-item-menu').style.left='-500px';
    var playerInitDamage = playerStrength;
    playerStrength *= playerDamageBonus;
    setTimeout(() => {
    playerStrength=playerInitDamage;
    }, 1000);
    setTimeout(enemyTurnSkipped, 100);
    currentRope--;
}
}
//Player Checking Enemy
function playerCheckReady(){
    document.getElementById('player-entire-menu').style.marginLeft="-1000px";
    document.getElementById('player-item-menu').style.left='-500px';
    document.getElementById('battlelog').innerHTML+= '<span>Skeleton: '+enemyStats+'</span><br><br>';
    setTimeout(enemyAttack, 1000);

}

//Randomizes players atk damage by adding 
function playerAttackVar(){
 playerAttackVariable = Math.floor(Math.random()*10)+playerStrength    
}

setInterval(playerAttackVar, 10)

//Playing after choosing attack option
function playerAttack(){
    var enemyPrevHealth = enemyHealth;
    console.log(enemyPrevHealth);
    (enemyHealth-= playerAttackVariable+playerStrength);
    var enemyHealthDifference = enemyPrevHealth - enemyHealth;
    
    document.getElementById('enemy').innerHTML="<img id='enemy-hurt' src='skeleton.png' alt='' srcset=''>";

    setTimeout(() => {
    console.log('That dealt... '+enemyHealthDifference+' hp');
    document.getElementById('battlelog').innerHTML+= '<span>You dealt '+enemyHealthDifference+' damage!!!</span><br><br>';
    console.log(enemyHealthDifference);
    document.getElementById('enemy').innerHTML="<img src='skeleton.png' alt='' srcset=''>";
    }, 500);

//Checking if enemy is dead or not
    setTimeout(() => {
        if(enemyHealth < 0){
            document.getElementById('battlelog').innerHTML+= '<span><h2>YOU WIN!!!</h2></span><br>';
            document.getElementById('battlelog').innerHTML+= "<span>You received "+ postXp+" xp</span><br>";            
            document.getElementById('enemy').innerHTML="<img src='skeleton.png' id='dead' alt='' srcset=''>";


        }
    }, 1000);
if(enemyHealth>=0){
    setTimeout(enemyAttack, 1000)}
}


//Randomizes enemy atk damage by adding 
function enemyAttackVar(){
    enemyAttackVariable = Math.floor(Math.random()*10)+1    
   }
setInterval(enemyAttackVar, 10)
//Enemy Attacking phase
function enemyAttack(){
    if(skipEnemy==0){
    var playerPrevHealth= playerHealth;
    playerHealth-= enemyAttackVariable+enemyStrength;
    var playerHealthDifference = playerPrevHealth - playerHealth;
    document.getElementById('battlelog').innerHTML+= '<span>Skeleton dealt '+ playerHealthDifference +' damage!!!</span><br><br>';
    document.getElementById('effects').classList.add('shake');
    setTimeout(() => {
    document.getElementById('effects').classList.remove('shake');    
    }, 500);
    
} 
else{
    setTimeout(escapeAttempt, 500)
}   

    document.getElementById('player-entire-menu').style.marginLeft="0px";
    

//Checking if player is dead or not

if(playerHealth<=0){
    setTimeout(playerDead, 300)};
function playerDead(){
    document.getElementById('battlelog').innerHTML+= '<span><h2>YOU LOSE!!!</h2></span><br><br>';
    document.getElementById('player-entire-menu').style.marginLeft="-1000px";    
}    
}


