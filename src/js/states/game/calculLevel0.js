//---------------------------------- GET CALCUL
function getCalcul(level) {

    //Calcul ----------------------
    //Level 0
    function calculString() {
        var a = Math.floor((Math.random() * 9) + 1);
        var b = Math.floor((Math.random() * 9) + 1);
        var calcul = a + " + " + b;
        return calcul;
    }
    //Level 1-3
    /* function calculString() {
     var a = Math.floor((Math.random() * 19) + 5);
     var b = Math.floor((Math.random() * 19) + 5);
     var calcul = a + " + " + b || a + " - " + b ;
     return calcul;
     }
     */
    //Level 4-6
    /* function calculString() {
     var a = Math.floor((Math.random() * 29) + 9);
     var b = Math.floor((Math.random() * 29) + 9);
     var calcul = a + " + " + b || a + " - " + b || a + " * " + b ;
     return calcul;
     }
     */

    var string = calculString();
    //console.log("addition:  " + string);

    //Resultat ----------------------
    function resultatCalcul(calcul) {
        var resultat = eval(string);
        return resultat;
    }

    var reponse = resultatCalcul();
    //console.log("résultat:  " + reponse);

    //Porpositions réponses ----------------------
    function propReponses() {
        var prop1 = Math.floor((Math.random() * 99) + 1);
        var prop2 = Math.floor((Math.random() * 99) + 1);
        var prop3 = resultatCalcul(string);

        var tab = [prop1, prop2, prop3];
        return tab;
    }
    var array = propReponses();
    //console.log("Propositions:  " + propReponses());

    //Time ----------------------
    function time() {
        var timer = "5";
        return timer;
    }
    var chrono = time();
    //console.log("Time:  " + time());

    //Return ----------------------
    return{
        calculString: string,
        responseNumber: reponse,
        responseArray: array,
        timer: chrono
    }
}

//Console.log ----------------------
var gc = getCalcul();
console.log(gc);

//---------------------------------- VERIFY CALCUL

function verifyCalcul(string, reponse){
    r = string;
    if (r == reponse){
        return true;
    }
    else{
        return false;
    }
}
//Console.log ----------------------
var vc = verifyCalcul();
console.log(vc);

//---------------------------------- PLAYER STATE

function playerState(){

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
    var ques = question();
    //console.log(ques);

    //Level ----------------------
    function level(floor){
        floor = 0;
        if (ques = 10){
            floor ++;
        }
        return floor;
    }
    var lvl = level();
    //console.log(lvl);

    //Life ----------------------
    function lives(){
        var life = 3;
        if (verifyCalcul() === false){
            life --;
        }
        if (life === 0){
            console.log("Game Over");
        }
        return life;
    }
    var lf = lives();
    //console.log(lf);

    //Return ----------------------
    return{
        questionNumber: ques,
        levelNumber: lvl,
        livesNumber: lf
    }
}

//Console.log ----------------------
var ps = playerState();
console.log(ps);