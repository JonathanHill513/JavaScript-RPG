function openOverWorldMenu(){
document.getElementById('player-overworld-menu').style.left='0px';
}
function closeOverWorldMenu(){
document.getElementById('player-overworld-menu').style.left='-300px';
}

function openOverWorldStats(){
    document.getElementById('player-overworld-stats').style.left='0px'; 
}
function closeOverWorldStats(){
    document.getElementById('player-overworld-stats').style.left='-1000px'; 
}
function openOverWorldInv(){
    document.getElementById('player-overworld-inventory').style.left='0px'; 
}
function closeOverWorldInv(){
    document.getElementById('player-overworld-inventory').style.left='-1000px'; 
}
function openOverWorldEquip(){
    document.getElementById('player-overworld-equip').style.left='0px'; 
}
function closeOverWorldEquip(){
    document.getElementById('player-overworld-equip').style.left='-1000px'; 
}
setInterval(() => {
document.getElementById('player-overworld-stats-hp').innerHTML = `<span>HEALTH: ${playerHealth}/${playerMaxHealth}</span><br>`;
document.getElementById('player-overworld-stats-mp').innerHTML = `<span>MANA: ${playerMana}/${playerMaxMana}</span><br>`;
document.getElementById('player-overworld-stats-level').innerHTML = `<span>LVL: ${level}</span><br>`;
document.getElementById('player-overworld-stats-strength').innerHTML = `<span>STRENGTH: ${playerStrength}</span><br>`;
document.getElementById('player-overworld-stats-speed').innerHTML = `<span>SPEED: ${playerSpeed}</span><br>`;
document.getElementById('player-overworld-stats-exp').innerHTML = `<span>EXPERIENCE: ${currentXp}</span><br>`;

}, 100);
