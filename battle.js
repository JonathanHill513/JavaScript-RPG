//Player base stats
var playerMaxHealth = 20
var playerHealth = 20
var playerStrength = 1
var playerSpeed = 10
var playerMaxMana = 10
var playerMana = 10
var playerDamageBonus = 0
var currentXp = 0;
var level = 1;
// var xpReq = 50;

setInterval(() => {
xpReq = (level*level)*50;      
}, 100);
  


//Max Stats
setInterval(() => {
if(playerHealth>=playerMaxHealth){
    playerHealth = playerMaxHealth;
}    
}, 10);


var fightStart = false
setInterval(() => {
    document.getElementById('player-entire-menu').style.display="block"
}, 500);

var currentEnemy = ''
//Enemy stats
var currentEnemyImg =""
var currentEnemyName = ""
var enemyHealthReset = 20
var enemyHealth =20
var enemyStrength = 0
var enemySpeed = 90
var enemyWeakness ="???"
var enemyBio = "Description of enemy here"
var enemyStats =`<br>HP: ${enemyHealth}<br>Strength: ${enemyStrength}<br>Speed: ${enemySpeed}<br>Weakness: ${enemyWeakness}<br> ${enemyBio}`
var currentEnemyHurt = ''
var currentEnemyDead = ''
var postXp = enemyHealth+enemyStrength+enemySpeed;

//Enemy stats

//Enemies

var rat = [
{   ratName : 'Just a Rat',
    ratHealth : 10,
    ratStrength : 1,
    ratSpeed : 40,
    ratWeakness : "Wanders alone too often!",
    ratBio : "A very weak creature when alone. May carry diseases. Be sure to wash your hands after handling!",
    ratImage : "<img src='./Enemy Sprites/rat.png' alt='' srcset=''>",
    ratHurt : "<img id='enemy-hurt' src='./Enemy Sprites/rat.png' alt='' srcset=''>",
    ratDead : "<img src='./Enemy Sprites/rat.png' id='dead' alt='' srcset=''>"}
]
var rat2 = [
{   rat2Name : 'A Kinda Dangerous Rat',
    rat2Health : 15,
    rat2Strength : 3,
    rat2Speed : 85,
    rat2Weakness : "Has a crippling cheese addiction!",
    rat2Bio : "A very weak creature, nah just kidding... this time it's armed and kinda dangerous, don't underestimate it!",
    rat2Image : "<img src='./Enemy Sprites/rat2.png' alt='' srcset=''>",
    rat2Hurt : "<img id='enemy-hurt' src='./Enemy Sprites/rat2.png' alt='' srcset=''>",
    rat2Dead : "<img src='./Enemy Sprites/rat2.png' id='dead' alt='' srcset=''>"}
]
var pudding = [
{   puddingName : 'Gloop of Pudding',
    puddingHealth : 45,
    puddingStrength : 25,
    puddingSpeed : 15,
    puddingWeakness : "Spoons and dessert enthusiasts.",
    puddingBio : "Dislikes picky eaters who refuse to eat anything other than chicken nuggets and soda!",
    puddingImage : "<img src='./Enemy Sprites/puddin.png' alt='' srcset=''>",
    puddingHurt : "<img id='enemy-hurt' src='./Enemy Sprites/puddin.png' alt='' srcset=''>",
    puddingDead : "<img src='./Enemy Sprites/puddin.png' id='dead' alt='' srcset=''>"}
]
var clown = [
{   clownName : 'Absolute Tomfoolery',
    clownHealth : 250,
    clownStrength : 20,
    clownSpeed : 60,
    clownWeakness : "People who are good at video games.",
    clownBio : "Kidnaps and eats people who don't know JavaScript!",
    clownImage : "<img src='./Enemy Sprites/clown.png' alt='' srcset=''>",
    clownHurt : "<img id='enemy-hurt' src='./Enemy Sprites/clown.png' alt='' srcset=''>",
    clownDead : "<img src='./Enemy Sprites/clown.png' id='dead' alt='' srcset=''>"}
]
var skeleton = [
{   skeletonName : 'Skeleton',
    skeletonHealth : 20,
    skeletonStrength : 9,
    skeletonSpeed : 10,
    skeletonWeakness : "Sunlight and working out.",
    skeletonBio : "A weak monster, loves chili dogs.",
    skeletonImage : "<img src='./Enemy Sprites/skeleton.png' alt='' srcset=''>",
    skeletonHurt : "<img id='enemy-hurt' src='./Enemy Sprites/skeleton.png' alt='' srcset=''>",
    skeletonDead : "<img src='./Enemy Sprites/skeleton.png' id='dead' alt='' srcset=''>"}
]
var reaper = [
{    reaperName : 'Reaper',
    reaperHealth : 80,
    reaperStrength : 20,
    reaperSpeed : 80,
    reaperWeakness : "???",
    reaperBio : "A very dangerous monster.",
    reaperImage : "<img src='./Enemy Sprites/reaper.png' alt='' srcset=''>",
    reaperHurt : "<img id='enemy-hurt' src='./Enemy Sprites/reaper.png' alt='' srcset=''>",
    reaperDead : "<img src='./Enemy Sprites/reaper.png' id='dead' alt='' srcset=''>"}
]
var duck = [
{    duckName : 'Giant Duck',
    duckHealth : 999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999,
    duckStrength : 9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999,
    duckSpeed : 999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999,
    duckWeakness : "Nothing, begin to beg for it's mercy!",
    duckBio : "The almighty World Eater itself, kneel in front of it and pray for a miracle because you are not going to even leave a scratch on an absolute unit like this.",
    duckImage : "<img src='./Enemy Sprites/duck.png' alt='' srcset=''>",
    duckHurt : "<img id='enemy-hurt' src='./Enemy Sprites/duck.png' alt='' srcset=''>",
    duckDead : "<img src='./Enemyduck.png' id='dead' alt='' srcset=''>"}
]

//Enemy attacks
// var enemyAttacks = [
//     {
//         name:"Fire Ball",
//         damage:3,
//         effect:"Fire",
//         postdamage:"That's hot, ngl"
//     },
//     {
//         name:"Punch",
//         damage:80,
//         effect:"None",
//         postdamage:"That's hot, ngl"
//     },
//     {
//         name:"Kick",
//         damage:3,
//         effect:"None",
//         postdamage:"That's hot, ngl"
//     },
// ]


//Enemy Picker RNG

var currentEnemyNum = 1;
function enemyPick(){

setInterval(() => {
currentEnemyNumAdd = Math.floor(Math.random()*5); 
}, 1);    
currentEnemyNum+=currentEnemyNumAdd
}


function enemyCheck(){
if(currentEnemyNum == 1){
    console.log(currentEnemy);
    currentEnemy = 'Rat';
     currentEnemyImg = rat[0].ratImage;
     currentEnemyName = rat[0].ratName;
     enemyHealthReset = rat[0].ratHealth;
     enemyHealth = rat[0].ratHealth;
     enemyStrength = rat[0].ratStrength;
     enemySpeed = rat[0].ratSpeed;
     enemyWeakness = rat[0].ratWeakness;
     enemyBio = rat[0].ratBio;
     enemyStats =`<br>HP: ${enemyHealth}<br>Strength: ${enemyStrength}<br>Speed: ${enemySpeed}<br>Weakness: ${enemyWeakness}<br> ${enemyBio}`;
     currentEnemyHurt = rat[0].ratHurt;
     currentEnemyDead = rat[0].ratDead;
}
if(currentEnemyNum == 2){
    console.log(currentEnemy);
    currentEnemy = 'Rat2';
     currentEnemyImg = rat2[0].rat2Image;
     currentEnemyName = rat2[0].rat2Name;
     enemyHealthReset = rat2[0].rat2Health;
     enemyHealth = rat2[0].rat2Health;
     enemyStrength = rat2[0].rat2Strength;
     enemySpeed = rat2[0].rat2Speed;
     enemyWeakness = rat2[0].rat2Weakness;
     enemyBio = rat2[0].rat2Bio;
     enemyStats =`<br>HP: ${enemyHealth}<br>Strength: ${enemyStrength}<br>Speed: ${enemySpeed}<br>Weakness: ${enemyWeakness}<br> ${enemyBio}`;
     currentEnemyHurt = rat2[0].rat2Hurt;
     currentEnemyDead = rat2[0].rat2Dead;
}
if(currentEnemyNum == 3){
    console.log(currentEnemy);
    currentEnemy == 'Puddin';
     currentEnemyImg = pudding[0].puddingImage;
     currentEnemyName = pudding[0].puddingName;
     enemyHealthReset = pudding[0].puddingHealth;
     enemyHealth = pudding[0].puddingHealth;
     enemyStrength = pudding[0].puddingStrength;
     enemySpeed = pudding[0].puddingSpeed;
     enemyWeakness = pudding[0].puddingWeakness;
     enemyBio = pudding[0].puddingBio;
     enemyStats =`<br>HP: ${enemyHealth}<br>Strength: ${enemyStrength}<br>Speed: ${enemySpeed}<br>Weakness: ${enemyWeakness}<br> ${enemyBio}`;
     currentEnemyHurt = pudding[0].puddingHurt;
     currentEnemyDead = pudding[0].puddingDead;
}
if(currentEnemyNum == 4){
    console.log(currentEnemy);
    currentEnemy == '';
     currentEnemyImg = clown[0].clownImage;
     currentEnemyName = clown[0].clownName;
     enemyHealthReset = clown[0].clownHealth;
     enemyHealth = clown[0].clownHealth;
     enemyStrength = clown[0].clownStrength;
     enemySpeed = clown[0].clownSpeed;
     enemyWeakness = clown[0].clownWeakness;
     enemyBio = clown[0].clownBio;
     enemyStats =`<br>HP: ${enemyHealth}<br>Strength: ${enemyStrength}<br>Speed: ${enemySpeed}<br>Weakness: ${enemyWeakness}<br> ${enemyBio}`;
     currentEnemyHurt = clown[0].clownHurt;
     currentEnemyDead = clown[0].clownDead;
}
if(currentEnemyNum == 5){
    console.log(currentEnemy);
    currentEnemy = 'Skeleton';
     currentEnemyImg = skeleton[0].skeletonImage;
     currentEnemyName = skeleton[0].skeletonName;
     enemyHealthReset = skeleton[0].skeletonHealth;
     enemyHealth = skeleton[0].skeletonHealth;
     enemyStrength = skeleton[0].skeletonStrength;
     enemySpeed = skeleton[0].skeletonSpeed;
     enemyWeakness = skeleton[0].skeletonWeakness;
     enemyBio = skeleton[0].skeletonBio;
     enemyStats =`<br>HP: ${enemyHealth}<br>Strength: ${enemyStrength}<br>Speed: ${enemySpeed}<br>Weakness: ${enemyWeakness}<br> ${enemyBio}`;
     currentEnemyHurt = skeleton[0].skeletonHurt;
     currentEnemyDead = skeleton[0].skeletonDead;
}
if(currentEnemyNum == 6){
    console.log(currentEnemy);
    currentEnemy = 'Reaper';
     currentEnemyImg = reaper[0].reaperImage;
     currentEnemyName = reaper[0].reaperName;
     enemyHealthReset = reaper[0].reaperHealth;
     enemyHealth = reaper[0].reaperHealth;
     enemyStrength = reaper[0].reaperStrength;
     enemySpeed = reaper[0].reaperSpeed;
     enemyWeakness = reaper[0].reaperWeakness;
     enemyBio = reaper[0].reaperBio;
     enemyStats =`<br>HP: ${enemyHealth}<br>Strength: ${enemyStrength}<br>Speed: ${enemySpeed}<br>Weakness: ${enemyWeakness}<br> ${enemyBio}`;
     currentEnemyHurt = reaper[0].reaperHurt;
     currentEnemyDead = reaper[0].reaperDead;
}
     if(currentEnemyNum==-1){
    console.log(currentEnemy);
    currentEnemy = 'Duck';
     currentEnemyImg = duck[0].duckImage;
     currentEnemyName = duck[0].duckName;
     enemyHealthReset = duck[0].duckHealth;
     enemyHealth = duck[0].duckHealth;
     enemyStrength = duck[0].duckStrength;
     enemySpeed = duck[0].duckSpeed;
     enemyWeakness = duck[0].duckWeakness;
     enemyBio = duck[0].duckBio;
     enemyStats =`<br>HP: ${enemyHealth}<br>Strength: ${enemyStrength}<br>Speed: ${enemySpeed}<br>Weakness: ${enemyWeakness}<br> ${enemyBio}`;
     currentEnemyHurt = duck[0].duckHurt;
     currentEnemyDead = duck[0].duckDead;
}
}



// if(currentEnemyNum>){
//     console.log(currentEnemy);
//     currentEnemy == '';
//      currentEnemyImg = [0].Image;
//      currentEnemyName = [0].Name;
//      enemyHealthReset = [0].Health;
//      enemyHealth = [0].Health;
//      enemyStrength = [0].Strength;
//      enemySpeed = [0].Speed;
//      enemyWeakness = [0].Weakness;
//      enemyBio = [0].Bio;
//      enemyStats =`<br>HP: ${enemyHealth}<br>Strength: ${enemyStrength}<br>Speed: ${enemySpeed}<br>Weakness: ${enemyWeakness}<br> ${enemyBio}`;
//      currentEnemyHurt = [0].Hurt;
//      currentEnemyDead = [0].Dead;
// }

//Scroll down automatically on battlelog
function scrollDown(){
    var objDiv = document.getElementById('battlelog');
    objDiv.scrollTop = objDiv.scrollHeight;
}



//Battle system
function battle(){
    fightStart = true;

    setTimeout(enemyCheck,0);
    setTimeout(enemyPick,1);
    setTimeout(playSong1,1);
    setTimeout(() => {
        document.getElementById('enemy').innerHTML=currentEnemyImg;
        postXp = enemyHealth+enemyStrength+enemySpeed;
        document.getElementById('battlelog').innerHTML+= '<span>'+currentEnemyName+' steps forth, ready for battle...</span><br><br>'    
    }, 3);
    
}
setInterval(() => {
if(fightStart==true){
    document.getElementById('effects').style.display='block';
    document.getElementById('overworld').style.display='none';

    }
    if(fightStart==false){
        document.getElementById('effects').style.display='none';
        document.getElementById('overworld').style.display='block';
    }    

}, 10);

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
    setTimeout(playHeavyHit,6);
    playerStrength += playerDamageBonus;
    setTimeout(() => {
    playerStrength=playerInitDamage;
    }, 1000);
    setTimeout(playerAttack, 0);

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
    setTimeout(playerAttack, 0);
    currentBombs--;
    setTimeout(playExplosion,6)
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
    setTimeout(enemyTurnSkipped, 0);
    currentRope--;
    setTimeout(playLightHit,6);
}
}
//Player Checking Enemy
function playerCheckReady(){
    document.getElementById('player-entire-menu').style.marginLeft="-1000px";
    document.getElementById('player-item-menu').style.left='-500px';
    document.getElementById('battlelog').innerHTML+= '<span>'+currentEnemyName+': '+enemyStats+'</span><br><br>';
    setTimeout(enemyAttack, 1000);
    setTimeout(scrollDown,500)

}

//Randomizes players atk damage by adding 
function playerAttackVar(){
 playerAttackVariable = Math.floor(Math.random()*10)+playerStrength;
}

setInterval(playerAttackVar, 10)

//Playing after choosing attack option
function playerAttack(){
    var enemyPrevHealth = enemyHealth;
    setTimeout(playMedHit,1);
    console.log(enemyPrevHealth);
    (enemyHealth-= playerAttackVariable+playerStrength);
    var enemyHealthDifference = enemyPrevHealth - enemyHealth;
    
    document.getElementById('enemy').innerHTML=currentEnemyHurt;

    setTimeout(() => {
    console.log('That dealt... '+enemyHealthDifference+' hp to '+currentEnemyName+'');
    document.getElementById('battlelog').innerHTML+= '<span>You dealt '+enemyHealthDifference+' damage to '+currentEnemyName+'!!!</span><br><br>';
    console.log(enemyHealthDifference);
    document.getElementById('enemy').innerHTML=currentEnemyImg;
    }, 500);
    setTimeout(scrollDown,500)


//Check if criteria was met to level up
function xpCheck(){
    if(currentXp>xpReq){
    playerHealth += (level*3);
    playerMaxHealth += (level*3);
    playerStrength += (level*3);
    playerSpeed += (level*3);
    playerMaxMana+= (level*3);
    playerMana+= (level*3);
    level++;

   



    console.log('LEVEL UP!!!')
    setTimeout(stopMusic, 1500)
    setTimeout(playSongLevelUp, 1500)
    setTimeout(() => {
    document.getElementById('battlelog').innerHTML+='<span><br><h2>LEVEL UP!!!</h2></span><span><br>You are now Level '+level+'!!!</span>'    
    }, 1500);
    setTimeout(scrollDown, 1500)

    }
    }

//Checking if enemy is dead or not    
    setTimeout(() => {
        if(enemyHealth < 0){
            document.getElementById('battlelog').innerHTML+= '<span><h2>YOU WIN!!!</h2></span><br>';
            document.getElementById('battlelog').innerHTML+= "<span>You received "+ postXp+" xp</span><br>";          
            document.getElementById('enemy').innerHTML=currentEnemyDead;
            skipEnemy = 0;
            setTimeout(xpCheck,10)
            setTimeout(playVictory,100);
            currentXp += postXp;  
            setTimeout(scrollDown,500)
            if(currentXp>xpReq){   
            setTimeout(stopSound, 0)                
            setTimeout(fightOver, 7000);
   
            }else{
                setTimeout(fightOver, 2000);   
            }
           


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
        setTimeout(playHeavyHit,5);
    var playerPrevHealth= playerHealth;
    playerHealth-= enemyAttackVariable+enemyStrength;
    var playerHealthDifference = playerPrevHealth - playerHealth;
    document.getElementById('battlelog').innerHTML+= '<span>'+currentEnemyName+' dealt '+ playerHealthDifference +' damage!!!</span><br><br>';
    document.getElementById('effects').classList.add('shake');
    setTimeout(() => {
    document.getElementById('effects').classList.remove('shake');    
    }, 500);
    setTimeout(scrollDown,500)
    
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
    setTimeout(scrollDown,500)

    setTimeout(() => {
        document.getElementById('game-container').style.opacity='0%'
    }, 2000);
}    
}


function fightOver(){
    document.getElementById('effects').style.opacity="0px";
    fightStart = false ;  
    enemyHealth = enemyHealthReset;
    document.getElementById('player-entire-menu').style.marginLeft="0px";
    document.getElementById('enemy').innerHTML=currentEnemyImg;
    document.getElementById('battlelog').innerHTML="";
    skipEnemy = 0;
    setTimeout(stopMusic,100);
}