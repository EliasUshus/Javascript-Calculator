
//Gemmer alle classes i en constants
const display1El = document.querySelector('.display-1');
const display2El = document.querySelector('.display-2');
const tempResultEl = document.querySelector('.temp-result');
// querySelectorAll er hvor den tager alle elementer under fx. .number
const numbersEl = document.querySelectorAll('.number');
const operationEl = document.querySelectorAll('.operation');
const sideBarEl = document.querySelectorAll('.sideBar');
const equalEl = document.querySelector('.equal');
const clearAllEl = document.querySelector('.all-clear');
const clearLastEl = document.querySelector('.last-entity-clear');

// sørger for at alle values starter på null
let dis1Num = '';
let dis2Num = '';
let result = null;
let lastOperation = '';
let haveDot = false;

// Event til numbers START
numbersEl.forEach(number => {
    number.addEventListener('click', (e) => {                   // click event til numbers
        if (e.target.innerText === '.' && !haveDot){            // hvis innertexten er ligmed '.' & !havedot
            haveDot = true;                                     // så er havedot = true
        } else if(e.target.innerText === '.' && haveDot){       // ellers hvis den har '.' & havedot
            return;                                             // så returner den
        }
        dis2Num += e.target.innerText;                          // displayer number i Display-2
        display2El.innerText = dis2Num;                         // displayer number i Display-2
    })
});
// Event til numbers END

// Event til operations START
operationEl.forEach(operation => {
    operation.addEventListener('click', (e) => {
        if (!dis2Num) return;                                   // tjekker efter om brugeren har indtastet et tal i display 2
        haveDot = false;                                        // kan lave en dot i det andet nummer.
        const operationName = e.target.innerText;               // operationName bliver til hvad du tryker på
        if (dis1Num && dis2Num && lastOperation){               // hvis du har 1st nummer + en operation + 2nd nummer
            mathOperation();                                    // kører mathOperation funkitonen
        if (dis1Num && lastOperation){  
            mathOperation();
        }
        }else{
            result = parseFloat(dis2Num);                       // ellers laver den display 2 til en nummer og bevarer det i result
        }
        clearVar(operationName);                                // kalder clearVar functionen på operationName
        lastOperation = operationName;
        console.log(result);
    })
});
// Event til operations END

// Event til SideBar START
sideBarEl.forEach(sidebar => {
    sidebar.addEventListener('click', (e) => {
        const operationName = e.target.innerText;               // operationName bliver til hvad du tryker på
        if (dis2Num && lastOperation){                          // hvis du har 1st nummer + en operation
            mathOperation();                                    // kører mathOperation funkitonen
        }else{
            result = parseFloat(dis2Num);                       // ellers laver den display 2 til en nummer og bevarer det i result
        }
        clearVar(operationName);                                // kalder clearVar functionen på operationName
        lastOperation = operationName;
        console.log(result);
    })
}); 
// Event til SideBar END

// clearVar funktion START
function clearVar(name = ''){                                   // rykker display2 til display1
    dis1Num += dis2Num + ' ' + name + ' ';                      // viser hvilken operation man har brugt
    display1El.innerText = dis1Num;                             // display1 viser sit nummmer
    display2El.innerText = '';                                  // display2 viser blank
    dis2Num = '';                                               // display2 ingen value
    tempResultEl.innerText = result;                            // viser det temporary result i tempResult
}
// clearVar funktion END

// mathOperation funktion START
function mathOperation(){
    if(lastOperation === 'X'){
        result = parseFloat(result) * parseFloat(dis2Num);
    } else if (lastOperation === '+'){                          //plus
        result = parseFloat(result) + parseFloat(dis2Num);
    } else if (lastOperation === '-'){                          //minus
        result = parseFloat(result) - parseFloat(dis2Num);
    } else if (lastOperation === '/'){                          //dividere
        result = parseFloat(result) / parseFloat(dis2Num);
    } else if (lastOperation === '%'){                          //procent
        result = parseFloat(result) % parseFloat(dis2Num);
    } else if (lastOperation === 'log'){                        //log
        result = Math.log(parseFloat(dis2Num));
    } else if (lastOperation === '√'){                          //kvadrat rod
        result = Math.sqrt(parseFloat(dis2Num));
    } else if (lastOperation === '^2'){                          //
        result = parseFloat(result) * parseFloat(result);
    } else if (lastOperation === 'sin'){                        //sin
        result = Math.sin(parseFloat(dis2Num));
    } else if (lastOperation === 'cos'){                        //cos
        result = Math.cos(parseFloat(dis2Num));
    } else if (lastOperation === 'tan'){                        //tan
        result = Math.tan(parseFloat(dis2Num));
    } else if (lastOperation === 'sin-1'){                      //sin-1
        result = Math.asin(parseFloat(dis2Num));
    } else if (lastOperation === 'cos-1'){                      //cos-1
        result = Math.acos(parseFloat(dis2Num));
    } else if (lastOperation === 'tan-1'){                      //tan-1
        result = Math.atan(parseFloat(dis2Num));
    }}
// mathOperation funktion END

// event til equal btn START
equalEl.addEventListener('click', (e) => {                      // click event til equal btn
    if( !dis1Num || !dis2Num ) return;                          // hvis du ikke har dis1num eller dis2num så return
    haveDot = false;                                            // sætter havedot til false fordi man ikke har dot længere
    mathOperation();                                            // kører mathOperation for at regne
    clearVar();                                                 // rydder variablerne undtagen dis1num
    display2El.innerText = result;                              // sætter dis2num tæksten til resultatet
    tempResultEl.innerText = '';                                // sætter temp result til null
    dis2Num = result;                                           // sætter dis2num til resultatet
    dis2Num = '';                                               // sætter den til null igen, men den displayer stadig result i dis2num
    
});
// event til equal btn END

// event til clear all btn START
clearAllEl.addEventListener('click', (e) => {                   // click event til clear all
    display1El.innerText = '0';                                 // sætter text i display 1 til 0
    display2El.innerText = '0';                                 // sætter text i display 2 til 0
    dis1Num = '';                                               // giver dis1num en value af null
    dis2Num = '';                                               // giver dis1num en value af null
    result = '';                                                // sætter result til null
    tempResultEl.innerText = '0';                               // sætter temp result til 0
});
// event til clear all btn END

// event til clear last btn START
clearLastEl.addEventListener('click', (e) => {                  // click event clear last
    display2El.innerText = '0';                                 // sætter text i display 2 til 0
    dis2Num = '';                                               // giver dis1num en value af null
});
// event til clear last btn END