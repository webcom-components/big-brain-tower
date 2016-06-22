function getCalcul(level){

    //Calcul
    function calculString(){
        var nbre = Math.floor((Math.random() * 9) + 1);
        var  calcul = nbre + " + " + nbre + " =";
        return calcul;
    }
    console.log(calcul);

    //Resultat
    function resultatCalcul(){
        var resultat = eval(calcul);
        return resultat;
    }
    console.log(resultat);

    //Porpositions réponses
    function propReponses(){
        var prop1 = Math.floor((Math.random() * 99) + 1);
        var prop2 = Math.floor((Math.random() * 99) + 1);
        var prop3 = resultat;

        var tab = [prop1, prop2, prop3];
        var random = tab[Math.floor(Math.random() * tab.length)];
        return random;
    }
    console.log(random);

    //Temps

}