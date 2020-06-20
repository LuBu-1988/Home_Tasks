
    var myFam = prompt('Ваша фамилия: '),
        myName = prompt('Ваше Имя: '),
        mySN = prompt('Ваше Отчество: '),
        myOld = parseInt(prompt('Ваш возраст: ')),
        myGen = confirm('Ваш пол - мужской?'),
        pen = '';

    var ageDays = myOld * 365;
    var myAge = myOld + 5;

    if (myGen && myOld>=60 ) {
        myGen = 'Мужской';
        pen += 'да';
    }
    else if (myGen && myOld<60 ) {
        myGen = 'Мужской';
        pen += 'нет';
    }      
    else if (myOld>=55) {
        myGen = 'Женский';
        pen += 'да';
    }
    else if (myOld<55) {
        myGen = 'Женский';
        pen += 'нет';
    }

    
    // Тернарная операция
    // pen = (myGen=='Мужской' && myOld>=60 || myGen=='Женский' && myOld>=55)?'да':'нет';
    

    alert('Ваши ФИО: ' + myFam + ' ' + myName + ' ' + mySN + '\n' + 'Ваш возраст в годах: ' + myOld
     + '\n' + 'Ваш возраст в днях: ' + ageDays + '\n' + 'Через 5 лет вам будет: ' + myAge + '\n' 
     + 'Ваш пол: ' + myGen + '\n' + 'Вы на пенсии: ' + pen);
