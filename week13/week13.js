//Задание 1
// Создайте переменную currentDate и присвойте ей текущую дату. Значение выведите в консоль.
const currentDate = new Date();
console.log(currentDate);

//Задание 2
// Создайте переменную currentYear и присвойте ей текущий год. Значение выведите в консоль.
const currentYear = new Date();
console.log(currentYear.getFullYear());

//Задание 3
// Создайте переменную currentMonth и присвойте ей текущий месяц (от 0 до 11, где 0 - январь, 11 - декабрь). Значение выведите в консоль.
const currentMonth = new Date();
console.log(currentMonth.getMonth());

//Задание 4
// Создайте переменную currentDay и присвойте ей текущий день месяца. Значение выведите в консоль.
const currentDay = new Date();
console.log(currentDay.getDate());

//Задание 5
// Создайте переменную birthday и присвойте ей дату вашего дня рождения в текущем году. Значение выведите в консоль.
const birthday =new Date(2023, 5 , 8 , 18 , 10);
console.log(birthday);

//Задание 6
// Создайте переменную futureDate и присвойте ей будущую дату (например, через 1 месяц и 10 дней от текущей даты). Значение выведите в консоль.
const futureDate = new Date();
futureDate.setMonth(currentDate.getMonth() + 1);
futureDate.setDate(currentDate.getDate() + 10);
console.log(futureDate);

//Задание 7.
// Выведите в консоль разницу в днях между futureDate и currentDate
const differenceBetweenFutureAndCurrent = futureDate- currentDate;
console.log(`разница составляет ${Math.floor(differenceBetweenFutureAndCurrent/1000/ 3600 / 24)} дней`);

//Задание 8
// Создайте переменную pastDate и присвойте ей прошедшую дату (например, 5 дней назад от текущей даты). Значение выведите в консоль.
const pastDate = new Date();
pastDate.setDate(currentDate.getDate() - 5);
console.log(pastDate);

//Задание 9
// Выведите в консоль разницу в днях между currentDate и pastDate
const differenceBetweenDays = currentDate - pastDate;
console.log(`разница = ${Math.floor(differenceBetweenDays/1000/ 3600 / 24)+1} дней`);

//Задание 10
// Создайте переменную nextWeek и присвойте ей дату следующей недели. Значение выведите в консоль.
const nextWeek = new Date();
nextWeek.setDate(currentDate.getDate() + 7);
console.log(nextWeek);

//Задание 11
// Выведите в консоль день недели для nextWeek
console.log(nextWeek.getDay());

//Задание 12
// Создайте переменную futureYear и присвойте ей значение текущего года плюс 5. Значение выведите в консоль.
const futureYear = new Date();
futureYear.setFullYear(currentYear.getFullYear()+5);
console.log(futureYear.getFullYear());

//Задание 13
// Создайте переменную futureDateInFutureYear и присвойте ей дату вашего дня рождения в будущем году (futureYear). Значение выведите в консоль.
const futureDateInFutureYear = new Date(Date.parse('2002-06-08T18:10'));
futureDateInFutureYear.setFullYear(futureYear.getFullYear());
console.log(futureDateInFutureYear);

//Задание 14
// Выведите в консоль разницу в годах между futureYear и текущим годом
const differenceBetweenYears = futureYear - currentYear;
console.log(Math.floor(differenceBetweenYears/(1000 * 60 * 60 * 24 * 30 * 12)));

//Задание 15
// Используя метод Date.parse(), создайте новый объект date и преобразуйте переменную strDate в дату.
// Выведите объект date в консоль.
const strDate = new Date(Date.parse('2023-06-15T08:30:00.000Z'));
console.log(strDate);

//Задание 16
// Используя метод Date.parse(), получите таймстамп (количество миллисекунд) из переменной strDate.
// Выведите таймстамп в консоль.
const data = Date.parse(strDate);
console.log(data);

//Задание 17
// Используя метод Date.parse(), попытайтесь преобразовать переменную wrongDate в дату. Добавьте условие, если результат преобразования является NaN, выведите в консоль сообщение 'Неправильный формат даты', в другом случае, выведите сообщение 'Правильный формат даты'.
// Подсказка: используйте условие if...else
const date = new Date(Date.parse('2023/06/15'));
if(date === NaN){
 console.log('Неправильный формат даты');
}else{
    console.log('Правильный формат даты');
}

//Задание 18
// Используя цикл if...else, проверьте является ли переменная number положительным. Результат выведите в консоль.
const number = 231;
if (number > 0){
    console.log("Число положительное!");
} else if(number === 0){
    console.log("Число 0 нельзя назвать ни положительным, ни отрицательным!");
}else{
    console.log("Число отрицательное!");
}

//Задание 19
// Используя цикл if...else, проверьте является ли переменная number чётным числом. Результат выведите в консоль.
if(number % 2 === 0){
    console.log("Число четное!");
}
else{
    console.log("Число нечетное!");
}
//Задание 20
// Используя цикл if...else, проверьте является ли переменная number кратным 3. Результат выведите в консоль.
if(number % 3 === 0){
    console.log("Кратно 3");
}
else{
    console.log("Не будет кратно 3");
}
//Задание 21
// Используя цикл if...else, проверьте является ли переменная number однозначным. Результат выведите в консоль.
if(number <= 9){
    console.log("Является однозначным числом");
} else{
    console.log("Не является однозначным числом");
}
//Задание 22
// Используя цикл if...else, проверьте является ли переменная number двузначным. Результат выведите в консоль.
if(number >= 10 && number <= 99 ){
    console.log("Является двузначным числом");
}else{
    console.log("Не является двузначным числом");
}
//Задание 23
// Используя цикл if...else, проверьте является ли переменная number положительным или нулём. Результат выведите в консоль.
if ((number > 0)||number === 0){
    console.log("Число положительное или 0");
}else{
    console.log("Число отрицательное!");
}
//Задание 24
// Используя цикл if...else, проверьте является ли переменная number кратным 5 или 7. Результат выведите в консоль.
if((number % 5 === 0)|| number % 7 === 0){
    console.log("Кратно 5 или 7");
}
else{
    console.log("Не будет кратно 5 или 7");
}
//Задание 25
// Используя цикл if...else, проверьте является ли переменная number отрицательным или нулём. Результат выведите в консоль.
if ((number < 0)||number === 0){
    console.log("Число отрицательное или 0");
}else{
    console.log("Число положительное!");
}
//Задание 26
// Используя цикл if...else, проверьте является ли переменная number трёхзначным положительным числом. Результат выведите в консоль.
if(number >= 100 && number <= 999 ){
    console.log("Является трёхзначным числом");
}else{
    console.log("Не является трёхзначным положительным числом");
}
//Задание 27
// Используя switch case, напишите программу, которая принимает на вход целое число от 1 до 7 и выводит в консоль название соответствующего дня недели (например, 1 - "Понедельник", 2 - "Вторник" и т.д.).
function defineDay (weekDay){
    let day;
switch(weekDay){
    case 1:
        day = "Понедельник";
    break;
    case 2:
        day = "Вторник";
    break;
    case 3:
        day = "Среда";
    break;
    case 4:
        day = "Четверг";
    break;
    case 5:
        day = "Пятница";
    break;
    case 6:
        day = "Суббота";
    break;
    case 7:
        day = "Воскресенье";
    break;
    default : 
    day = "Я не знаю такого дня недели";
    break;
}
return day;
}
const today = 5;
const todayName = defineDay(today);
if (todayName === 'Я не знаю такого дня недели'){
    console.log('Ошибка: введите существующий порядковый номер дня недели');
} else{
    console.log(`Сегодня ${todayName}`);
}
//Задание 28
// Используя цикл switch case, напишите программу, которая принимает на вход символ направления (N, S, E, W) и выводит в консоль полное название этого направления (N - "Север", S - "Юг", E - "Восток", W - "Запад").
let direction = 'W';
let fullName = defineDirection(direction);
if (fullName === 'нет такой части света'){
    console.log('Ошибка: введите существующую сторону света');
} else{
    console.log(`это ${fullName}`);
}
function defineDirection(direction){
switch (direction) {
    case 'W':
        side = "Запад";
    break;
    case 'E':
        side = "Восток";
    break;
    case 'S':
        side = "Юг";
    break;
    case 'N':
        side = "Север";
    break;
    default : 
        side = "нет такой части света";
    break;
}
return side;
}

