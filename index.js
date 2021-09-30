function sumInput(){
    let massStr = '';
    //let lengthMass = prompt('Какой длины будем создавать массив? Введите число', '');
    let summMass = 0;
    let enteredNumber;
    //console.log(typeof(lengthMass));
    //while(lengthMass == ' ' || lengthMass == null || lengthMass == '' || isNaN(lengthMass) == true){
    //    alert('Вы ничего не ввели или ввели не число, введите число');
    //    lengthMass = prompt('Какой длины будем создавать массив?', '');
    //}
    
    
    // for(let i = 0; i < lengthMass; i++){
    //     enteredNumber = prompt('Введите целое число!', '');
    //     console.log(enteredNumber);
    //     while(enteredNumber == ' ' || enteredNumber == null || enteredNumber == '' || isNaN(enteredNumber) == true){
    //         alert('Вы ничего не ввели или ввели не число, введите число');
    //         enteredNumber = prompt('Введите целое число!', '');
    //     }
    //     mass[i] = enteredNumber;
    //     console.log(mass[i]);
    //     summMass = summMass + Number(mass[i]);
    // }

    do{
        enteredNumber = prompt('Введите целое число!', '');
        console.log(enteredNumber);
        if(enteredNumber == ' ' || enteredNumber == null || enteredNumber == '' || isNaN(enteredNumber) == true){
            alert('Вы ничего не ввели или ввели не число');
            break;
        } else {
            massStr = massStr + enteredNumber + ",";
            //console.log(massStr);
        }
    }while(true);
    
    let mass = massStr.split(","); // превратили строчку в массив
    for(let i=0; i<mass.length; i++){
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

