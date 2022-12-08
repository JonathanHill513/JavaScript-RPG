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
document.getElementById('bombcount').innerHTML= `Bombs:<br>${currentBombs}/${maxBombs}`;
document.getElementById('player-overworld-inventory-bombs').innerHTML=`<span>BOMBS: ${currentBombs}/${maxBombs}</span><button onclick="discardBombs()">Discard</button>`;
document.getElementById('player-overworld-inventory-rope').innerHTML=`<span>ROPE: ${currentRope}/${maxRope}</span><button onclick="discardRope()">Discard</button>`;
document.getElementById('ropecount').innerHTML= `${currentRope}/${maxRope}`;
}

function discardBombs(){
currentBombs =0;
document.getElementById('player-overworld-inventory-bombs').style.display='none';
haveBomb = false
}
function discardRope(){
currentRope =0;
document.getElementById('player-overworld-inventory-rope').style.display='none';
haveRope == false
}
var haveBomb = true;
var haveRope = true;

setInterval(inventoryCheckBattle,10)
