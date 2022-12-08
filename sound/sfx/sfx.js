function playVictory(){
    document.getElementById('bgm').innerHTML='';
    document.getElementById('sfx').innerHTML='<audio src="./sound/sfx/victory.mp3" autoplay hidden></audio>';
    setTimeout(() => {
    document.getElementById('sfx').innerHTML='';
        
    }, 3500);
}
function playLightHit(){
    document.getElementById('sfx').innerHTML='<audio src="./sound/sfx/light-hit.wav" autoplay hidden></audio>';
    // setTimeout(() => {
    // document.getElementById('sfx').innerHTML='';
    // }, 1000);
}
function playMedHit(){
    document.getElementById('sfx').innerHTML='<audio src="./sound/sfx/med-hit.wav" autoplay hidden></audio>';
    // setTimeout(() => {
    // document.getElementById('sfx').innerHTML='';
    // }, 5000);
}
function playHeavyHit(){
    document.getElementById('sfx').innerHTML='<audio src="./sound/sfx/heavy-hit.wav" autoplay hidden></audio>';
    // setTimeout(() => {
    // document.getElementById('sfx').innerHTML='';
    // }, 1000);
}
function playExplosion(){
    document.getElementById('sfx').innerHTML='<audio src="./sound/sfx/explosion.wav" autoplay hidden></audio>';
    // setTimeout(() => {
    // document.getElementById('sfx').innerHTML='';
    // }, 1000);
}
function playRunning(){
    document.getElementById('sfx').innerHTML='<audio src="./sound/sfx/running.wav" autoplay hidden></audio>';
    // setTimeout(() => {
    // document.getElementById('sfx').innerHTML='';
    // }, 1000);
}