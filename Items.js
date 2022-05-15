function itemMenuOpen(){
    
    document.getElementById('player-item-menu').style.left='220px';
}
function itemMenuClose(){
    
    document.getElementById('player-item-menu').style.left='-500px';
}
//ITEMS LIMIT
var maxBombs = 5;
var currentBombs = 3;

var maxRope = 5;
var currentRope = 5;

setInterval(currentItemsCheck,500)

function currentItemsCheck(){
document.getElementById('bombcount').innerHTML= `${currentBombs}/${maxBombs}`
document.getElementById('ropecount').innerHTML= `${currentRope}/${maxRope}`
}
