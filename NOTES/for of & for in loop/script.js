// for in loop

let marks = {
AMAN: "55",
ARSH : "89",
AKSHAT : "65"
}


for (const student in marks) {
console.log(`${student} scored ${marks[student]} marks`)
        
    }



// for off loop


 let students = [
     ["Alice", 85],
    ["Bob", 78],
    ["Charlie", 92]
 ];
    
    for (let student of students) {
    console.log(`${student[0]} scored ${student[1]} marks.`);
}
    
