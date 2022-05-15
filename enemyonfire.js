// var isEnemyonFire = 0;
// var fireDmg = 10;

// function enemySetOnFire(){
//     var enemyPrevHealth = enemyHealth;
//     console.log(enemyPrevHealth);
//     (enemyHealth-= playerAttackVariable+playerStrength);
//     var enemyHealthDifference = enemyPrevHealth - enemyHealth;
    
//     document.getElementById('enemy').innerHTML="<img id='enemy-hurt' src='skeleton.png' alt='' srcset=''>";

//     setTimeout(() => {
//     console.log('That dealt... '+enemyHealthDifference+' hp');
//     document.getElementById('battlelog').innerHTML+= '<span>Using Fire dealt '+enemyHealthDifference+' damage and Skeleton is on fire!!!</span><br><br>';
//     console.log(enemyHealthDifference);
//     document.getElementById('enemy').innerHTML="<img src='skeleton.png' alt='' srcset=''>";
//     }, 500);
//     document.getElementById('player-entire-menu').style.marginLeft="0px";
//     isEnemyonFire = 1;

//     setTimeout(() => {
//         if(enemyHealth < 0){
//             document.getElementById('battlelog').innerHTML+= '<span><h2>YOU WIN!!!</h2></span><br>';
//             document.getElementById('enemy').innerHTML="<img src='skeleton.png' id='dead' alt='' srcset=''>";
//         }
//     }, 1000);
// if(enemyHealth>=0){
//     setTimeout(enemyAttack, 1000)}
// }

