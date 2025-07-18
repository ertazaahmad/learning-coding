let a = prompt("Enter a first number")
let b = prompt("Enter a second number")
if(isNaN(a) || isNaN(b)) {
    throw SyntaxError("Sorry,this is not allowed")
}

let sum = parseInt(a) + parseInt(b)

 


try {
    console.log("The sum is", sum*x);
} catch (error) {
   console.log("eror aagya bhai") 
}
finally{
    console.log("files are being closed and db connection is  being clos ed ");
    
}
