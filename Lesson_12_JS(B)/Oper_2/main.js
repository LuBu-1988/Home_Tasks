
    var myFam = prompt('Ваша фамилия: '),
        myName = prompt('Ваше Имя: '),
        mySN = prompt('Ваше Отчество: '),
        myOld = parseInt(prompt('Ваш возраст: ')),
        myGen = confirm('Ваш пол - мужской?'),
        pen = '';

    var ageDays = myOld * 365;
    var myAge = myOld + 5;

    myGen = (myGen)?'Мужской':'Женский';
    pen += (myGen && myOld>=60 || myGen===false && myOld>=55)?'да':'нет';
    

    alert('Ваши ФИО: ' + myFam + ' ' + myName + ' ' + mySN + '\n' + 'Ваш возраст в годах: ' + myOld
     + '\n' + 'Ваш возраст в днях: ' + ageDays + '\n' + 'Через 5 лет вам будет: ' + myAge + '\n' 
     + 'Ваш пол: ' + myGen + '\n' + 'Вы на пенсии: ' + pen);
