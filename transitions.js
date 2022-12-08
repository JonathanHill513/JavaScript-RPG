//Successful runaway
function blackScreenDrop(){
    document.getElementById('blackscreen').style.display="block";
    document.getElementById('blackscreen').style.top='-9999px';
    setTimeout(() => {
        document.getElementById('blackscreen').style.top='0px';
        
    }, 500);
    setTimeout(() => {
        document.getElementById('blackscreen').style.display="none";
    }, 2000);
}
