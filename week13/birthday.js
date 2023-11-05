const buttonOne = document.querySelector('.b-1');
const inputDate = document.getElementById('birthdayDate');
const result = document.getElementById('result');
const error = document.getElementById('error');
const currentDate = new Date();

function daysToBday() {
 const inputDate = document.getElementById('birthdayDate').value;
 error.innerHTML = "";
 result.innerHTML = "";
if (!inputDate){
    error.textContent = "Разве ты не хочешь знать, сколько осталось дней до твоего дня рождения?";
}
else {
        const parsedCurrentDate = Date.parse(currentDate);
        const parsedBDay = Date.parse(inputDate);
        let diff = parsedBDay - parsedCurrentDate;
        let turnToDays = Math.floor(diff / 1000 / 3600 / 24);
    if (turnToDays < 0){
        result.textContent = 'Ты уже отпраздновал свой день рождения в этом году:((((';
    }
    else if(turnToDays === 0){
        result.textContent = 'Я от чистого сердца хочу поздравить тебя с твоим Днем рождения!!!<br> Пусть все мечты сбываются, а люди, которые тебя окружают, будут доброжелательными!<br> Желаю, чтобы здоровье было крепким, а настроение всегда позитивным!<br> В доме твоем пусть всегда будет мир, уют, семейное счастье и любовь!!!<br> Успехов во всех начинаниях, много радости, смеха и позитива!!!';  
    }
    else{
    result.textContent = 'До твоего дня рождения осталось ' + turnToDays + ' дней(дня)!';}
  }
}

  buttonOne.addEventListener('click', daysToBday);
  

  
// function check(){
//     let result= document.getElementById("result").value; 
//     if(result==''){
//         alert("Если вы хотите узнать сколько дней осталось до вашего дня рождения введите дату в поле");
//     }
// }
// buttonOne.addEventListener('click', check);
