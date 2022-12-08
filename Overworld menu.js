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
setTimeout(() => {
document.getElementById('player-overworld-stats-hp').innerHTML = `<span>HEALTH: ${playerHealth}</span><br>`;
document.getElementById('player-overworld-stats-mp').innerHTML = `<span>MANA: ${playerMana}</span><br>`;
document.getElementById('player-overworld-stats-level').innerHTML = `<span>LVL: ${level}</span><br>`;
document.getElementById('player-overworld-stats-exp').innerHTML = `<span>EXPERIENCE POINTS: ${currentXp}</span><br>`;

}, 10);
