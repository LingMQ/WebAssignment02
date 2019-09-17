(function () {
    'use strict';
    let mem = 0;
    let pending = 0;
    let operator = '';
    let clearScreen = false;

    document.getElementById("1").onclick = function () { getNumber(1) };
    document.getElementById("2").onclick = function () { getNumber(2) };
    document.getElementById("3").onclick = function () { getNumber(3) };
    document.getElementById("4").onclick = function () { getNumber(4) };
    document.getElementById("5").onclick = function () { getNumber(5) };
    document.getElementById("6").onclick = function () { getNumber(6) };
    document.getElementById("7").onclick = function () { getNumber(7) };
    document.getElementById("8").onclick = function () { getNumber(8) };
    document.getElementById("9").onclick = function () { getNumber(9) };
    document.getElementById("0").onclick = function () { getNumber(0) };
    document.getElementById(".").onclick = function () { getNumber('.') };
    document.getElementById("+").onclick = function () { getOperator('+') };
    document.getElementById("-").onclick = function () { getOperator('-') };
    document.getElementById("x").onclick = function () { getOperator('x') };
    document.getElementById("/").onclick = function () { getOperator('/') };
    document.getElementById("=").onclick = function () { calculate() };
    document.getElementById("C").onclick = function () { clear() };

    // Get the number from the panel
    function getNumber(number) {
        let curr = document.getElementById('window');
        if (clearScreen === true) {
            curr.value = "";
            clearScreen = false;
        }
        curr.value += number;
        pending = curr.value;
    }

    // The function for button 'C'
    function clear() {
        document.getElementById('window').value = "";
    }

    // Get the operator
    function getOperator(op) {
        operator = op;
        clearScreen = true;
        mem = pending;
        pending = 0;
    }

    // Calculate the final result
    function calculate() {
        if (mem === 0) {
            document.getElementById('window').value = "0";
        } else if (operator === '') {
            mem = 0;
        } else {
            let curr = document.getElementById('window').value;
            let newNum = convertToDouble(curr);
            let oldNum = convertToDouble(mem);

            switch (operator) {
                case '+':
                    document.getElementById('window').value = String(newNum + oldNum);
                    break;
                case '-':
                    console.log(oldNum - newNum);
                    document.getElementById('window').value = String(oldNum - newNum);
                    break;
                case 'x':
                    document.getElementById('window').value = String(oldNum * newNum);
                    break;
                case '/':
                    document.getElementById('window').value = String(oldNum / newNum);
                    break;
            }
        }
        operator = '';
        mem = 0;
        pending = 0;
    }

    // Convert the string to a double number
    function convertToDouble(str) {
        if (str.charAt(0) === '.') {
            str = "0" + str;
        }

        var list = str.split(".");
        var len = list.length;
        if (len === 1) {
            return parseInt(str);
        } else if (len === 2) {
            return parseInt(list[0]) + parseInt(list[1]) / (10 * list[1].length);
        } else {
            document.getElementById('window').value = "error";
        }
    }
})();