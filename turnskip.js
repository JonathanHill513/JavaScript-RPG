var skipEnemy = 0
var breakOutValue = 300
var breakOut = enemyHealth + enemyStrength + enemySpeed
var breakOutAttempt = 0

function enemyTurnSkipped(){
    var enemyPrevHealth = enemyHealth;
    console.log(enemyPrevHealth);
    (enemyHealth-= playerAttackVariable+playerStrength);
    var enemyHealthDifference = enemyPrevHealth - enemyHealth;
    
    document.getElementById('enemy').innerHTML="<img id='enemy-hurt' src='skeleton.png' alt='' srcset=''>";

    setTimeout(() => {
    console.log('That dealt... '+enemyHealthDifference+' hp');
    document.getElementById('battlelog').innerHTML+= '<span>Using Rope dealt '+enemyHealthDifference+' damage and Skeleton cannot move!!!</span><br><br>';
    console.log(enemyHealthDifference);
    document.getElementById('enemy').innerHTML="<img src='skeleton.png' alt='' srcset=''>";
    }, 500);
    setTimeout(() => {
    document.getElementById('player-entire-menu').style.marginLeft="0px";        
    }, 500);

    skipEnemy = 1
}
function escapeAttempt(){
    if(skipEnemy==1){
        document.getElementById('battlelog').innerHTML+= '<span>Skeleton is struggling to escape!!!<br><br>';
        breakOutAttempt += breakOut;
    }
    if(breakOutAttempt>breakOutValue){
        document.getElementById('battlelog').innerHTML+= '<span>Skeleton has finally escaped!!!<br><br>';
        skipEnemy=0;
    }
}