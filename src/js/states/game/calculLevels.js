//---------------------------------- getRandom
function getRandom(min, max) {
    return Math.floor((Math.random() * max) + min);
}

//---------------------------------- calculString
function calculString(level) {
    var a, b, operateur;

    if (level===0) {
        a = getRandom(1, 9);
        b = getRandom(1, 9);
        operateur = '+';
    }

    else if (level===1) {
        a = getRandom(1, 9);
        b = getRandom(1, 9);
        opNumber = getRandom(1,2);
        if (opNumber === 1) {
            operateur = '+';
        }
        else{
            operateur = '-';
        }
    }

    else if (level===2) {
        a = getRandom(10, 19);
        b = getRandom(10, 19);
        opNumber = getRandom(1,2,3);
        if (opNumber === 1) {
            operateur = '+';
        }
        else if (opNumber === 2){
            operateur = '-';
        }
        else if (opNumber === 3){
            operateur = '*';
        }
    }

    else if (level >3 && level <= 9) {
        a = getRandom(10, 19);
        b = getRandom(10, 19);
        opNumber = getRandom(1,2,3,4);
        if (opNumber === 1) {
            operateur = '+';
        }
        else if (opNumber === 2){
            operateur = '-';
        }
        else if (opNumber === 3){
            operateur = '*';
        }
        else if (opNumber === 4){
            operateur = '/';
        }
    }

    else if (level >= 10) {
        a = Math.floor((Math.random() * 29 * level) + 10 * level);
        b = Math.floor((Math.random() * 29 * level) + 10 * level);
        opNumber = getRandom(1,2,3,4);
        if (opNumber === 1) {
            operateur = '+';
        }
        else if (opNumber === 2){
            operateur = '-';
        }
        else if (opNumber === 3){
            operateur = '*';
        }
        else if (opNumber === 4){
            operateur = '/';
        }
    }

    var calcul = a + operateur + b;
    return calcul;
}

var string = calculString();
//console.log("addition:  " + string);

//---------------------------------- resultatCalcul
function resultatCalcul(calcul) {
    var resultat = eval(string);
    return resultat;
}

var reponse = resultatCalcul();
//console.log("résultat:  " + reponse);

//---------------------------------- propReponses
function propReponses(reponse) {
    var prop1 = Math.floor((Math.random() * 99) + 1);
    var prop2 = Math.floor((Math.random() * 99) + 1);
    var prop3 = reponse;

    var tab = [prop1, prop2, prop3];
    return tab;
}
var array = propReponses();
//console.log("Propositions:  " + propReponses());

//---------------------------------- time
function time() {
    var timer = "5";
    return timer;
}

//console.log("Time:  " + time());

//---------------------------------- GET CALCUL
function getCalcul(level) {

    //Return ----------------------
    var cs = calculString();
    var chrono = time();
    return{
        calculString: cs,
        responseNumber: eval(cs),
        responseArray: propReponses(eval(cs)),
        timer: chrono
    };
}

//Console.log ----------------------
console.log(getCalcul());
console.log(getCalcul());

//---------------------------------- VERIFY CALCUL

function verifyCalcul(resultat, reponse){

    if (resultat == reponse){
        return true;
    }
    else{
        return false;
    }
}
//Console.log ----------------------
//var vc = verifyCalcul(gc.responseNumber, eval(gc.calculString));
//console.log(vc);



//---------------------------------- PLAYER STATE (TEMP)

/*function playerState(){

 Iteration ----------------------
 function question(number){
 for (var n=1; n<10; n++){
 number ++;
 }
 if (n>10){
 n= 1;
 }
 return number;
 }
 var ques = question();
 console.log(ques);

 <<<<<<< Updated upstream
 Level ----------------------
 function level(floor){
 floor = 0;
 if (ques == 10){
 floor ++;
 }
 return floor;
 }
 var lvl = level();
 console.log(lvl);

 Life ----------------------
 function lives(){
 var life = 3;
 if (verifyCalcul() === false){
 life --;
 =======
 getCalcul();

 /*function verifyCalcul(string, reponse){
 r = eval(calcul);
 if (r == resultat){
 return true;
 >>>>>>> Stashed changes
 }
 if (life === 0){
 console.log("Game Over");
 }
 <<<<<<< Updated upstream
 return life;
 }
 var lf = lives();
 console.log(lf);

 Return ----------------------
 return{
 questionNumber: ques,
 levelNumber: lvl,
 livesNumber: lf
 };
 }

 Console.log ----------------------
 var ps = playerState();
 console.log(ps);*/