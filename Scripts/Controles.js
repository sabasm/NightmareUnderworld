var LEFT = false;
var RIGHT = false;
var JUMP = false
var inAir=false

function controles() {

    if (LEFT) {
        char1.x -= 7;
    }
    if (RIGHT) {
        char1.x += 7;
    }
    if (JUMP) {
        char1.y -= 20;
    }

}

addEventListener('keydown', function (e) {
    if (e.keyCode === 65)
        LEFT = true
    if (e.keyCode === 68)
        RIGHT = true
    if (e.keyCode === 32 && inAir===false && JUMP===false){
        JUMP = true
        inAir=true
        setTimeout(stopJump,50)

           /*se la llama a los 0.1 segundos*/
           }
    })
    function stopJump(){
        
        
        JUMP=false

       }
addEventListener('keyup', function (e) {
    if (e.keyCode === 65)
        LEFT = false
    if (e.keyCode === 68)
        RIGHT = false
    if (e.keyCode === 32){}
})