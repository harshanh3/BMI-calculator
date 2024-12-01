function getBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);


    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert('Please fill in all the empty fiels');
        return;
    }

    const h = height / 100; 
    
    const bmi = weight / (h * h);
    
    let category = '';
    if (bmi < 18.5) {
        category = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
        category = 'Overweight';
    } else {
        category = 'Obese';
    }
    
    document.getElementById('result').innerHTML = `Your BMI is ${bmi} (${category})`;
}
