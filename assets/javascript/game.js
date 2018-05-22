//Javascript code for The Psychic Game


//Start declarations

var game = {
    wins: 0,
    losses: 0,
    gLeft: 10,
    alphabet: "abcdefghijklmnopqrstuvwxyz",
    pcGuess: "",
    userGuess: "",
    guesses: "",

    reset: function(){
        this.gLeft = 10;
        this.pcGuess = "";
        this.userGuess = "";
        this.guesses = "";
    },

    updateScreen: function(){
        document.getElementById("wins").innerHTML = "Wins: "+this.wins;
        document.getElementById("losses").innerHTML = "Losses: "+this.losses;
        document.getElementById("gLeft").innerHTML = "Guesses left: "+this.gLeft;
        document.getElementById("guesses").innerHTML = this.guesses;

        //console.log("PC Guess = " + this.pcGuess);
        //console.log("User Guess = " + this.userGuess);
    },

    guess: function(){
        var pos = Math.floor( Math.random() * this.alphabet.length );
        this.pcGuess = this.alphabet.substr(pos, 1);
    },

    play: function(key){
        this.guess();
        console.log("PC - "+this.pcGuess);

        this.userGuess = key.toLowerCase();
        console.log("User - "+this.userGuess);
       
        this.guesses = this.guesses + this.userGuess + ", ";
        if (this.pcGuess === this.userGuess){
            this.wins++;
        }
        else{
            this.losses++;
        }
        this.gLeft--;
    }
};

//Start running

alert("Start playing !");

document.onkeyup = function(ev){
    if (game.gLeft > 0) {
        game.play(ev.key);
        game.updateScreen();
    }
    else {
        alert("Start again!");
        game.reset();
        game.updateScreen();
    }
}