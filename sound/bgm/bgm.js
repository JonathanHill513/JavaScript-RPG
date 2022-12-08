
function playSong1(){
    document.getElementById('bgm').innerHTML='<audio src="./sound/bgm/song1.mp3" autoplay hidden loop volume="0.1" controls></audio>'
}
function stopMusic(){
    document.getElementById('bgm').innerHTML=''

}