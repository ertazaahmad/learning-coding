let first, second, third;


// Three random number

let random1 = Math.random();
let random2 = Math.random();
let random3 = Math.random();


// Lets generate the first word

if (random1 <= 0.33) {
    first = "Crazy"
} 
else if (random1 <= 0.66) {
    first ="Amazing"

}
else  {
    first ="Fire"
}



// Lets generate the second word

if (random2 <= 0.33) {
    second = "Engine"
} 
else if (random2 <= 0.66) {
    second ="Food"

}
else  {
    second ="Garments"
}



// Lets generate the third word

if (random3 <= 0.33) {
    third = "Bros"
} 
else if (random3 <= 0.66) {
   third ="Limited"

}
else  {
    third ="Hub"
}


console.log(`${first} ${second} ${third}`);

