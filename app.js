var startBtn = document.getElementById('iniciar');
var endBtn = document.getElementById('parar');
var nulBtn = document.getElementById('zerar');
var seconds = 0;
var minutes = 0;
var isRunning = true;
var nuller = false;
startBtn.addEventListener('click', ()=>{
    isRunning = true
    loop();
});
endBtn.addEventListener('click', ()=>{isRunning = false});
nulBtn.addEventListener('click', ()=>{
    isRunning = false;
    nuller = true;
    });
function loop() {
    if(nuller == true) {
        seconds = 0;
        minutes = 0;
        document.getElementById("min").innerHTML = minutes;
        document.getElementById("timer").innerHTML = seconds;
        nuller = false; 
    }
    if (isRunning == true) {
        setTimeout(()=>{
                if(seconds >= 60) {
                    minutes++;
                    seconds = 0;
                }
                else {
                    seconds++;
                }
            document.getElementById("min").innerHTML = minutes;
            document.getElementById("timer").innerHTML = seconds;   
            requestAnimationFrame(loop);
            
        }, 1000)
    }
    else {
        return;
    }

}
 

