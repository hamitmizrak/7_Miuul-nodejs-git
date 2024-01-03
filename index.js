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
//trimFunction();

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
    let stringfyObject = JSON.stringify(person);
    console.log(stringfyObject);

    let parseObject = JSON.parse(stringfyObject);
    console.log(parseObject);
}
//jsonStringifyParseFunction()

//ES5(2009) 5-  isArray
let isArrayFunction = () => {
    let array = [1, 2, 3, 4, 5];
    let arrayData = Array.isArray(array);
    console.log(arrayData);
    if (arrayData) {
        console.log("Dizidir");
    } else {
        console.log("Dizi Değildir");
    }
}
//isArrayFunction();

//ES5(2009) 6-  ForEach
let forEachFunction = () => {
    let array = [1, 2, 3, 4, 5];
    let arrayData = array.forEach((response) => {
        console.log(response * 2);
    })

}
//forEachFunction();

//ES5(2009) 7-  Map
let mapFunction = () => {
    let array = [1, 2, 3, 4, 5];
    let arrayData = array.map((response) => {
        return response*2;
    })
    console.log(arrayData)

}
//mapFunction();

//ES5(2009) 7-  Filter
let filterFunction = () => {
    let array = [1, 2, 3, 4, 5];
    let arrayData = array.filter((response) => {
        return response%2===0;
    }).forEach((response) => {
        console.log(response);
    })
    //console.log(arrayData)

}
filterFunction();