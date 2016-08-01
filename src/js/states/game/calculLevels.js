//---------------------------------- shuffle
function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}

//---------------------------------- getRandom
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//---------------------------------- calculString
export function calculString(level) {
    var a, b, operateur, opNumber;

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
        else if (opNumber === 2) {
            operateur = '-';
        }
    }

    else if (level===2) {
        a = getRandom(1, 19);
        b = getRandom(1, 19);
        opNumber = getRandom(1,3);
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

    else if (level >=3 && level <= 9) {
        a = getRandom(10, 29);
        b = getRandom(10, 29);
        opNumber = getRandom(1,4);
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
        a = getRandom(1 * level, 19 * level);
        b = getRandom(1 * level, 19 * level);
        opNumber = getRandom(1,4);
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
//console.log(calculString(20));

var string = calculString();

//---------------------------------- resultatCalcul
export function resultatCalcul(calcul) {
    var resultat = eval(string);
    return resultat;
}

//---------------------------------- propReponses
export function propReponses(reponse) {
    var prop1 =getRandom(1, 99);
    var prop2 = getRandom(1, 99);
    var prop3 = reponse;

    var tab = [prop1, prop2, prop3];
    shuffle(tab);
    return tab;
}

//---------------------------------- time
export function time() {
    var timer = "5";
    return timer;
}

//---------------------------------- GET CALCUL
export function getCalcul(level) {

    //Return ----------------------
    var cs = calculString(level);
    var chrono = time();
    return{
        calculString: cs,
        responseNumber: eval(cs),
        responseArray: propReponses(eval(cs)),
        timer: chrono
    };
}

//Console.log ----------------------
//console.log(getCalcul());

//---------------------------------- VERIFY CALCUL

export function verifyCalcul(resultat, reponse){

    if (resultat == reponse){
        return true;
    }
    else{
        return false;
    }
}