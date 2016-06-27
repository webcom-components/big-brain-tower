//---------------------------------- GET CALCUL
function getCalcul(level) {

    //Calcul
    function calculString() {
        var a = Math.floor((Math.random() * 9) + 1);
        var b = Math.floor((Math.random() * 9) + 1);
        var calcul = a + " + " + b;
        return calcul;
    }

    var string = calculString();
    //console.log("addition:  " + string);

    //Resultat
    function resultatCalcul(calcul) {
        var resultat = eval(string);
        return resultat;
    }

    var reponse = resultatCalcul();
    //console.log("résultat:  " + reponse);

    //Porpositions réponses
    function propReponses() {
        var prop1 = Math.floor((Math.random() * 99) + 1);
        var prop2 = Math.floor((Math.random() * 99) + 1);
        var prop3 = resultatCalcul(string);

        var tab = [prop1, prop2, prop3];
        return tab;
    }
    var array = propReponses();
    //console.log("Propositions:  " + propReponses());

    //Time
    function time() {
        var timer = "5";
        return timer;
    }
    var chrono = time();
    //console.log("Time:  " + time());

    return{
        string: string,
        number: reponse,
        array: array,
        object: chrono
    }
}

var x = getCalcul();
console.log(x);

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
var v = verifyCalcul();
console.log(v);

//---------------------------------- PLAYER STATE

function playerState(){
    //Level
    //Lives
    //Iteration

}