//                                          SIMPLE FOR LOOP

for (let i = 0; i <= 20; i++) {
    console.log(i)
    
}

//                                 FOR- IN LOOP {USED FOR OBJECTS}

let student = {
    Name : "Arsh",
    Class : "12",
    School : "TAS"
}

for (const key in student) {
            console.log(`${key}: ${student[key]}`);
        
    }


// #2

let marks = {
AMAN: "55",
ARSH : "89",
AKSHAT : "65"
}


for (const student in marks) {
console.log(`${student} scored ${marks[student]} marks`)
        
    }



//               FOR- OF LOOP {USED FOR ARRAYS OR STRINGS OR OTHERS WHICH ARE ITERABLES}

let company = ['BMW', 'JAGUAR', 'LANDROVER', 'AUDI' ]

for (const car of company) {
    console.log(car)
}


// #2

let students = [
     ["Alice", 85],
    ["Bob", 78],
    ["Charlie", 92]
 ];
    
    for (let student of students) {
    console.log(`${student[0]} scored ${student[1]} marks.`);
}



//                                       WHILE - LOOP

let i = 1;

while (i<=10) {
    console.log(i);
    i++;
}



//                                     DO - WHILE LOOP

let j = 1;

do {
    console.log(j);
    j++;
} while(j <= 10);
    
