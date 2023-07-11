function Age() {
    var x=prompt("Type first number");
    if(x<18)
    return("You are a minor.");
    else if(x>18 && x<65)
    return("You are an adult.");
    else if(x>65)
    return("You are a senior citizen.");
    }
    var result = Age();
    console.log(result);