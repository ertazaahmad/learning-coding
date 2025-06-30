// BMI calculator

function calculateBMI(weight, height) {
    return weight / (height * height);
}

console.log(calculateBMI(70, 1.75).toFixed(2));