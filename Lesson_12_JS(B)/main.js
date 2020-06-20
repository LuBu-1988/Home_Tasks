function familiya () {
    var myFam = document.getElementById('yFam').value,
        myName = document.getElementById('yName').value,
        mySN = document.getElementById('sName').value,
        myOld = parseInt(document.getElementById('old').value),
        myGen = document.getElementById('gender').value,
        pen = '';

    var ageDays = myOld * 365;
    var myAge = myOld + 5;

    if (myGen=='Мужской' && myOld>=60 || myGen=='Женский' && myOld>=55) {
        pen += 'да';
    }    
    else {
        pen += 'нет';
    }

    
    // Тернарная операция
    // pen = (myGen=='Мужской' && myOld>=60 || myGen=='Женский' && myOld>=55)?'да':'нет';
    

    alert('Ваши ФИО: ' + myFam + ' ' + myName + ' ' + mySN + '\n' + 'Ваш возраст в годах: ' + myOld
     + '\n' + 'Ваш возраст в днях: ' + ageDays + '\n' + 'Через 5 лет вам будет: ' + myAge + '\n' 
     + 'Ваш пол: ' + myGen + '\n' + 'Вы на пенсии: ' + pen);
}
