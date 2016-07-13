//Iteration ----------------------
function question(number){
    for (var n=1; n<10; n++){
        number ++;
    }
    if (n>10){
        n= 1;
    }
    return number;
}
var ques = question(1);
console.log("question "+question(1));

//Level ----------------------
function level(floor){
    floor = 0;
    if (ques === 10){
        floor ++;
    }
    return floor;
}
console.log("level "+level(1));

//Life ----------------------
function lives(nbreLife) {
    nbreLife = 3;
    if (verifyCalcul() === false) {
        nbreLife--;
        getCalcul();
    }

    else if (nbreLife === 0) {
        console.log("Game Over");
    }
    return nbreLife;
}
console.log("lives "+lives(1));


//playerState ----------------------
function playerState(){
    var qn = question(1);
    var ln = level(1);
    var lvs = lives();
    return {
        questionNumber: qn,
        levelNumber: ln,
        lives: lvs
    };
}

//Console.log ----------------------
console.log("player state = "+playerState());