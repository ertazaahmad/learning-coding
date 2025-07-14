
// WE USE FUNCTION WHEN WE HAVE TO USE A PIECE OF CODE AT SO MANY PLACES AND ONLT LITTLE BIT CHANGES ARE REQUIRED


function prac(name) {
    console.log(`Hey ${name} you are nice.`)
    console.log(`Hey ${name} you scored 99.`)
    console.log(`Hey ${name} your car is also nice.`)

}
 prac("Aman")  // {here we have called a function and it is necessary}

prac("Arsh")



function sum(a, b) {
    console.log(a + b);
    
}

sum(2, 4)    // here also we have called a function and given the 2 values



//OTHER WAY OF WRITING THIS FUNCTION


function sum2(x, y, z=4) {    //here we have set z as default parameter and fixed its value
    return x + y + z  
}

result1 = sum2(3, 5, 2)     // here we have changd the default value of z  
result2 = sum2(4, 65)
result3 = sum2(30, 23)

console.log(`The sum of these numbers is : ${result1}`);   //in this type sonsole log comes outside curly bracket
console.log(`The sum of these numbers is : ${result2}`);   //in this type sonsole log comes outside curly bracket
console.log(`The sum of these numbers is : ${result3}`);   //in this type sonsole log comes outside curly bracket


// ARROW FUNCTIONS

const func1 = (m)=> {
    console.log("i am an arrow function", m );
    
}

func1(34);
func1(20);
func1(86);