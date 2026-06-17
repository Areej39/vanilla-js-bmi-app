// script.js bmi-app
const weightInput = document.getElementById('weight');
const heightInput = document.getElementById('height');
const calculateBtn = document.getElementById('calculateBtn');
const resetBtn = document.getElementById('resetBtn');
const bmiValue = document.getElementById('bmiValue');
const bmiCategory = document.getElementById('bmiCategory');

function calculateBMI() {
    const weight = parseFloat(weightInput.value);
    const heightInCm = parseFloat(heightInput.value);

    if(isNaN(weight) || isNaN(heightInCm) || weight <= 0 || heightInCm <= 0) {
        bmiValue.textContent = '--';
        bmiCategory.textContent = '--';
        bmiCategory.className = '';
        alert("Please enter valid weight and height values!");
        return;
    }

    const heightInM = heightInCm / 100;
    const bmi = weight / (heightInM * heightInM);
    bmiValue.textContent = bmi.toFixed(1);

    let category = '';
    bmiCategory.className = '';
    if(bmi < 18.5) {
        category = 'Underweight';
        bmiCategory.classList.add('category-underweight');
    } else if(bmi >= 18.5 && bmi < 25){
        category = 'Normal';
        bmiCategory.classList.add('category-normal');
    } else if (bmi >= 25 && bmi < 30) {
        category = 'Overweight';
         bmiCategory.classList.add('category-overweight');
    } else {
        category = 'Obese';
        bmiCategory.classList.add('category-obese');
    }

    bmiCategory.textContent = category;
}

function resetCalculator() {
    weightInput.value = '';
    heightInput.value = '';
    bmiValue.textContent = '--';
    bmiCategory.textContent = '--';
    bmiCategory.className = '';

    weightInput.focus();
}
calculateBtn.addEventListener('click', calculateBMI);

resetBtn.addEventListener('click', resetCalculator);

[weightInput, heightInput].forEach(input => {
    input.addEventListener('input', e => {
        if(input.value < 0) {
            input.value = 0;
        }
    });
});

[weightInput, heightInput].forEach(input => {
    input.addEventListener('keydown', e => {
        if(e.key === 'Enter') {
            calculateBMI();
        }
    });
});