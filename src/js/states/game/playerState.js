//-----TEMP !!!!!!!!!!!-----------------------TEMP !!!!!!!!!!!------------------------------- TEMP !!!!!!!!!!!
//---------------------------------- PLAYER STATE (TEMP)

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
    //console.log(question());

    //Level ----------------------
    function level(floor){
        floor = 0;
        if (ques == 10){
            floor ++;
        }
        return floor;
    }
    //console.log(level());

    //Life ----------------------
    function lives() {
        var life = 3;
        if (verifyCalcul() === false) {
            life--;

            getCalcul();

            function checkLife() {
                if (life === 0) {
                    console.log("Game Over");
                }
                return life;
            }
            //console.log(lives());


        }
    }
    //Return ----------------------
    return {
        questionNumber: question(),
        levelNumber: lives(),
        livesNumber: checkLife()
    }
    //console.log(lives());
}
//Console.log ----------------------
console.log(playerState());