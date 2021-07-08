"use strict" 

let type = prompt("РАСЧЕТ СТОИМОСТИ\n\n\n ТИП САЙТА:\n\n 1. Визитка - 10000₽.\n 8-16 дней.\n\n 2. Интернет магазин - 15000₽.\n 14-22 дней.\n\n 3. Лендинг - 5000₽.\n 7-15 дней.\n\n");

let day = 0;
let price = 0;


if(type == "1" || type == "визитка"){
    day += 8,
    price += 10000
};

if(type == "2"){
    day += 14,
    price += 15000
};

if(type == "3"){
    day += 7,
    price += 5000
};


let design = prompt("ДИЗАЙН:\n\n\n 1. Простой - 1000₽.\n\n 2. Заказной - 5000₽.\n\n 3. Персональный - 6000₽.\n\n");


if(design == "1"){
    day += 1,
    price += 1000
};


if(design == "2"){
    day += 4,
    price += 5000
};


if(design == "3"){
    day += 5,
    price += 6000
};


let adaptive = prompt("АДАПТИВНОСТЬ:\n\n\n 1. Для компьютеров - 1000₽\n\n 2. Для смартфонов - 3000₽\n\n 3. Универсальный - 4000₽\n\n");

if(adaptive == "1"){
    day += 1,
    price += 1000
};

if(adaptive == "2" || "для смартфонов"){
    day += 2,
    price += 3000
};

if(adaptive == "3"){
    day += 3,
    price += 4000
};

alert("Сроки         " + day + "\n\n" + "Стоимость      " + price);





