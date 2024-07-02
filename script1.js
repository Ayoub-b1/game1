

const Answer= Math.floor(Math.random() *100 + 1);
let guesses = 0;

document.getElementById("submit").onclick= function(){
    let guess=document.getElementById("guess1").value;
guesses +=1;
    if(guess == Answer){
        document.getElementById("result").innerHTML = "congrats the number is " + Answer + " it took you " + guesses + "guesses";
    }
    else if ( guess < Answer){
        document.getElementById("result").innerHTML = "too small! choose a bigger number"
    }
    else if (guess > Answer){
        document.getElementById("result").innerHTML = "too large! choose a smaller number"
    }

    
}
