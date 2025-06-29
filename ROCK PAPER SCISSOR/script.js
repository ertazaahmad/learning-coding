function rps(user, computer) {
    if(user === "rock" && computer === "scissor") return "user";
    if(user === "scissor" && computer === "rock") return "computer";
    if(user === "scissor" && computer === "paper") return "user";
    if(user === "paper" && computer === "scissor") return "computer";
    if(user === "paper" && computer === "rock") return "user";
    if(user === "rock" && computer === "paper") return "computer";
    if(user === computer) return "tie";
    return "invalid input";
    

}

console.log(rps("rock", "rock"));
