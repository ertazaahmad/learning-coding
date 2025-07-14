// SIMPLE FOR LOOP

for (let i = 0; i <= 20; i++) {
    console.log(i)
    
}

// FOR- IN LOOP {USED FOR OBJECTS}

let student = {
    Name : "Arsh",
    Class : "12",
    School : "TAS"
}

for (const key in student) {
            console.log(`${key}: ${student[key]}`);
        
    }



//  FOR- OF LOOP {USED FOR ARRAYS OR STRINGS OR OTHERS WHICH ARE ITERABLES}

let company = ['BMW', 'JAGUAR', 'LANDROVER', 'AUDI' ]

for (const car of company) {
    console.log(car)
}



// WHILE - LOOP

let i = 1;

while (i<=10) {
    console.log(i);
    i++;
}



// DO - WHILE LOOP

let j = 1;

do {
    console.log(j);
    j++;
} while(j <= 10);
    
