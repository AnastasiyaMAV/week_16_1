function sumInput(){
    let mass = [];
    let lengthMass = prompt('Какой длины будем создавать массив? Введите число', '');
    let summMass = 0;
    //console.log(typeof(lengthMass));
    while(lengthMass == ' ' || lengthMass == null || lengthMass == '' || isNaN(lengthMass) == true){
        alert('Вы ничего не ввели или ввели не число, введите число');
        lengthMass = prompt('Какой длины будем создавать массив?', '');
    }
    let enteredNumber;
    
    for(let i = 0; i < lengthMass; i++){
        enteredNumber = prompt('Введите целое число!', '');
        while(enteredNumber == ' ' || enteredNumber == null || enteredNumber == '' || isNaN(enteredNumber) == true){
            alert('Вы ничего не ввели или ввели не число, введите число');
            enteredNumber = prompt('Введите целое число!', '');
        }
        mass[i] = enteredNumber;
        console.log(mass[i]);
        summMass = summMass + Number(mass[i]);
    }
    console.log("Сумма всех чисел массива:" + summMass);
    mass.sort(sortMass);
    console.log("Массив отсортирован:");
    for(let i = 0; i < mass.length; i++){
        console.log(mass[i]);
    }
}

function sortMass(a, b) {
    if (a > b) {
    return 1;
    } else if (b > a) {
    return -1;
    } else {
    return 0;
    }
}

sumInput();

