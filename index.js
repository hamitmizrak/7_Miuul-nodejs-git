// Katı Mod
"use strict";

// Katı mod izin vermiyor
// deneme="Miuul Node js";
// console.log(deneme);

// Hello World
// console.log("Miuul Hello World!");

// let number1 = 1;
// console.log(number1);

// let number2 = 2;
// console.log(number2);
// console.log(number2);
// console.log(number2);

////////////////////////////////number1
// ES5
// "use strict";
// String Access
// multiline
// Date.now()


//ES5(2009) 1-  "use strict";

//ES5(2009) 2- String Access
//ES5(2009) 3-  multiline escape character kullanmadım
let stringAccessFunction = () => {
    let data1 = "Miuul Node JS";
    console.log(data1.charAt(0));
    console.log(data1[0]); // String Access
}

//ES5(2009) 3-  multiline escape character kullanmadım
let multiLineNowFunction = () => {

    let multiLineString = "Bu 1.satır\n" +
        "2.satır\n" +
        "3.satır\n"
    console.log(multiLineString);

    let multiLine = `Bu 1.satır
2.satır
3.satır
`;
    console.log(multiLine);
}


//ES5(2009) 4-  Date now
let dateNowFunction = () => {
    let currentTimeMillis = Date.now();
    console.log(currentTimeMillis);
}


//ES5(2009) 5-  trim();
let trimFunction = () => {
    const miuulTrim = " node js öğreniyorum ";
    console.log(miuulTrim);
    console.log(miuulTrim.length);
    console.log(miuulTrim.trim());
    console.log(miuulTrim.trim().length);
}
trimFunction();

const personObject = function () {
    let person = {
        name: 'Hamit',
        surname: 'Mızrak',
        number: 44,
        isLogin: true,
    }
    return person;
}

//ES5(2009) 4-  JSON.stringify() JSON.parse()
let jsonStringifyParseFunction = () => {
    // stringify
    const person = personObject();
    let stringfyObject=JSON.stringify(person);
    console.log(stringfyObject);

    let parseObject=JSON.parse(stringfyObject);
    console.log(parseObject);
}
//jsonStringifyParseFunction()