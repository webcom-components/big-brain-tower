function getCalcul(level) {

    //Calcul
    function calculString() {
        var a = Math.floor((Math.random() * 9) + 1);
        var b = Math.floor((Math.random() * 9) + 1);
        var calcul = a + " + " + b;
        return calcul;
    }

    var string = calculString();
    console.log("addition:  " + calculString());

    //Resultat
    function resultatCalcul(calcul) {
        var resultat = eval(calcul);
        return resultat;
    }

    var reponse = resultatCalcul();
    console.log("résultat:  " + resultatCalcul(string));

    //Porpositions réponses
    function propReponses() {
        var prop1 = Math.floor((Math.random() * 99) + 1);
        var prop2 = Math.floor((Math.random() * 99) + 1);
        var prop3 = resultatCalcul(string);

        var tab = [prop1, prop2, prop3];
        return tab;
    }

    console.log("Propositions:  " + propReponses());

    //Time
    function time() {
        var timer = "5";
        return timer;
    }

    console.log("Time:  " + time());

}

console.log(getCalcul());

/*function verifyCalcul(calcul, resultat){
 r = eval(calcul);
 if (r == resultat){
 return true;
 }
 else{
 return false;
 }
 }*/