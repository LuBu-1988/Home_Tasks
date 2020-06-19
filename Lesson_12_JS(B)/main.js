function familiya () {
    var myFam = document.getElementById('yFam').value;
    var myName = document.getElementById('yName').value;
    var mySN = document.getElementById('sName').value;
    var myOld = parseInt(document.getElementById('old').value);
    var myGen = document.getElementById('gender').value;
    var pen;

    var ageDays = myOld * 365;
    var myAge = myOld + 5;

    if (myGen=='Мужской') {
        if (myOld>=60)
        pen += 'да';
    else if (myGen=='Женский')
        if (myOld>=55)
        pen += 'да';
    else 
        pen += 'нет';
    }

    alert('Ваши ФИО: ' + myFam + ' ' + myName + ' ' + mySN + '\n' + 'Ваш возраст в годах: ' + myOld
     + '\n' + 'Ваш возраст в днях: ' + ageDays + '\n' + 'Через 5 лет вам будет: ' + myAge + '\n' 
     + 'Ваш пол: ' + myGen + '\n' + 'Вы на пенсии: ' + pen);
}
