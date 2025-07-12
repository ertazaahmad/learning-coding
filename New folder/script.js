let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No random number supporting")
    }
    else {
        setTimeout(() => {
            console.log("Yes I am done");
            resolve("Arsh")
        }, 3000);
    }
})



prom1.then((a) => {
    console.log(a)

}).catch((err)=>{
    console.log(err)
})