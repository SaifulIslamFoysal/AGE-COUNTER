const birthday = document.getElementById('birthday');
const button = document.getElementById('btn');
const result = document.getElementById('result');

function calculateAge(){
const birthdayValue = birthday.value ;

if(birthdayValue ===""){
    alert ('Please enter your birthday');
}
else{
    const {years,months,days,isBirthday} = getFullAge(birthdayValue);

    if (years <0) {
        result.innerText = 'Invalid age! You are not born yet.';
    }
    else if (isBirthday){
        alert (`Happy Birthday! You are ${years}
         ${years ===1 ? "year" :"years"} now`) ;
         result.innerText = `Happy Birthday! You are 
         ${years} ${years === 1 ? "year" : "years"} now!`;
    }
    else if (years ===0 && months ===0 && days > 0){
        result.innerText = `You are ${days}
         ${days ===1 ? "day" :"days"} old`;
    }
    else if (years ===0 && months >0){
        result.innerText = `You are ${months} ${months === 1 ?
        "month" : "months"} ${days} ${days === 1 ? "day" : "days"} old.`;
    }
    else if (years === 1) {
        result.innerText = `You are ${years} year ${months} ${months === 1 ? "month" : "months"} ${days} ${days === 1 ? "day" : "days"} old.`;
    } else {
        result.innerText = `You are ${years} years ${months} ${months === 1 ? "month" : "months"} ${days} ${days === 1 ? "day" : "days"} old.`;
    }
}
};

function getFullAge (birthdayValue){

    let currentDate = new Date();
    let birthDate = new Date(birthdayValue);

    let years = currentDate.getFullYear() - birthDate.getFullYear();
    let months = currentDate.getMonth() - birthDate.getMonth();
    let days = currentDate.getDate() - birthDate.getDate();

    let isBirthday = currentDate.getMonth() === birthDate.getMonth()
    && currentDate.getDate() === birthDate.getDate();

    if (days <0) {
        months -- ;
        let lastMonth = new Date(currentDate.getFullYear(),
        currentDate.getMonth(),0);
        days += lastMonth.getDate();
    } ;

    if (months < 0) {
        years -- ;
        months +=12;
    }
    return { years, months, days, isBirthday }
}

button.addEventListener('click', calculateAge);
