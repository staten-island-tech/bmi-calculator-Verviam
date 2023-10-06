unitSystem = prompt('Choose to use imperial or metric system (i/m)')

if (unitSystem === 'i') {
    const username= prompt ('What is your name?');
    const height= prompt('Enter your height in inches');
    const weight= prompt('Enter your weight in lbs');
    
    function iFindBMI(height, weight) {
        return (weight / height ** 2) * 703
    };
    const BMI = iFindBMI(height, weight);
    console.log('Hi' + ' ' + username + ' ' + 'your BMI is' + ' ' + BMI);
}

    else if (unitSystem === 'm') {
        const username= prompt ('What is your name?');
        const height= prompt('Enter your height in cm');
        const weight= prompt('Enter your weight in kg');
        function mFindBMI(height, weight) {
            return (weight / height ** 2) * 10000
        };
        const BMI = mFindBMI(height, weight);
        console.log('Hi' + ' ' + username + ' ' + 'your BMI is' + ' ' + BMI);
}


if (BMI <= 18.5) {
    console.log('You are underweight');
}
    else if (BMI <= 24.9 &&  BMI > 18.5) {
        console.log('You are healthy');
    }
    else if (BMI >= 30) {
        console.log('You are unhealthy');
    }

    // work on && statements and changing scope of BMI and make everything const