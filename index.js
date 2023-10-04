unitSystem = prompt('Choose to use imperial or metric system (i/m)')

if (unitSystem === 'i') {
    username= prompt ('What is your name?');
    height= prompt('Enter your height in inches');
    weight= prompt('Enter your weight in lbs');
    BMI = iFindBMI(height, weight);
    console.log('Hi' + ' ' + username + ' ' + 'your BMI is' + ' ' + BMI);
}

    else if (unitSystem === 'm') {
        username= prompt ('What is your name?');
        height= prompt('Enter your height in cm');
        weight= prompt('Enter your weight in kg');
        BMI = mFindBMI(height, weight);
        console.log('Hi' + ' ' + username + ' ' + 'your BMI is' + ' ' + BMI);
}

function iFindBMI(height, weight) {
    return (weight / height ** 2) * 703
}

function mFindBMI(height, weight) {
    return (weight / height ** 2) * 10000
}

if (BMI <= 18.5) {
    console.log('You are underweight');
}
    else if (BMI <= 24.9) {
        console.log('You are healthy');
    }
    else if (BMI >= 30) {
        console.log('You are unhealthy');
    }