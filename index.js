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

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
// ES5
// "use strict";
// String Access
// multiline
// Date.now()
// trim()
// JSON.stringify() JSON.parse()
// isArray() => Array
// ForEach() => Array
// Map() => Array
// Filter() => Array
// Reduce() => Array
// ReduceRight() => Array
// every() => Array
// some() => Array
// indexOf() => Array
// lastIndexOf()  => Array
// getter()  => object
// setter()  => object
// rezerve


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
        return response * 2;
    })
    console.log(arrayData)

}
//mapFunction();

//ES5(2009) 7-  Filter
let filterFunction = () => {
    let array = [1, 2, 3, 4, 5];
    let arrayData = array.filter((response) => {
        return response % 2 === 0;
    }).forEach((response) => {
        console.log(response);
    })
    //console.log(arrayData)
}
//filterFunction();

//ES5(2009) 8-  Reduce
let reduceFunction = () => {
    let array = [1, 2, 3, 4, 5];
    let sum = array.reduce((one, two) => {
        return one + two;
    }, 0);
    console.log(sum);
}
//reduceFunction()

//ES5(2009) 9-  reduceRightFunction
let reduceRightFunction = () => {
    let array = [1, 2, 3, 4, 5];
    let sum = array.reduceRight((one, two) => {
        return one + two;
    }, 0);
    console.log(sum);
}
//reduceRightFunction();

//ES5(2009) 10-  Every (Her biri)
let everyFunction = () => {
    let array = [1, 2, 3, 4, 5];
    let isResult = array.every((number) => {
        return number > 0;
    })
    const data = (isResult) ? " Sıfırdan Büyüktür" : "sıfırdan Küçüktür";
    console.log(data);
}
//everyFunction();

//ES5(2009) 11-  Some (Tek bir şart)
let someFunction = () => {
    let array = [1, 2, 3, 9, 5];
    let isResult = array.some((number) => {
        return number % 2 === 0;
    })
    const data = (isResult) ? " Bir tane şart sağlıyor" : "sağlamıyor";
    console.log(data);
}
//someFunction();

//ES5(2009) 12-  IndexOf(Soldan arama)
let indexOfFunction = () => {
    let array = [1, 2, 3, 9, 2];
    let isResult = array.indexOf(2);
    console.log("soldan arama:" + isResult);

}
//indexOfFunction();

//ES5(2009) 13-  LastIndexOf(SAğdan arama)
let lastIndexOfFunction = () => {
    let array = [1, 2, 3, 9, 2];
    let isResult = array.lastIndexOf(2);
    console.log("sağdan  arama:" + isResult);

}
//lastIndexOfFunction();

//ES5(2009) 14-  getter(okuma)
let getterFunction = () => {
    const person = {
        _username: 'Hamit',

        get username() {
            console.log("Getting username");
            return this._username;
        }
    } //end person
    console.log(person.username);

}
//getterFunction();


//ES5(2009) 15-  setter(yazma)
let setterFunction = () => {
    const person = {
        _username: '',

        set username(value) {
            console.log("Setting username");
            this._username=value;
        }
    } //end person
    person.username="Hamit";
    console.log(person._username);

}
//setterFunction();

//ES5(2009) 16-  Rezerve
let rezerveFunction = () => {
    const rezerveObject = {
        class:"Class Adı 44",
        function:"Function Adı 44",
       
    } //end rezerveObject
    console.log(rezerveObject.class);
    console.log(rezerveObject.function);
    console.log(rezerveObject['function']);

}
//rezerveFunction();

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
// ES6(2015)
// let 
// const 
// arrow Function

//ES5(20015) 1-  let,const,arrow function
let letConstArrowFunction = () => {
    var varData=44;
    console.log(varData);
    var varData=23;
    console.log(varData);

    let letData=11;
    console.log(letData);
     letData=22;
    console.log(letData);

    const constData=33;
    console.log(constData);
}
letConstArrowFunction();

// Norm Fuction
// Immedia Function
// Anonymous Function
// Arrow Function
