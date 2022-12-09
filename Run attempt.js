function run(){
    document.getElementById('battlelog').innerHTML+= '<span>You attempted to run!!!</span><br><br>';
    document.getElementById('player-entire-menu').style.marginLeft="-2000px"; 
    setTimeout(itemMenuClose,0)
    if(playerSpeed>enemySpeed){
        setTimeout(() => {
            document.getElementById('battlelog').innerHTML+= '<span>You escaped!!!</span><br><br>';     
            }, 1000);
            setTimeout(playRunning,10)
            setTimeout(blackScreenDrop,1000)
            setTimeout(fightOver,2600)
    }else{
        setTimeout(() => {
            document.getElementById('battlelog').innerHTML+= "<span>You couldn't escape!!!</span><br><br>";     
            }, 1000);
            setTimeout(enemyAttack, 2000)
    }
    setTimeout(scrollDown,500)
}