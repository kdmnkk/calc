const numbers = document.querySelectorAll('.num'),
      input = document.querySelector('.input');

numbers.forEach(number => {
    number.addEventListener('click', () => {
        if (input.textContent.length < 6) {
            if (checkStatus) {
                checkStatus = false;
                input.textContent = '';
            }

            if (checkOp) {
                checkOp = false;
            }

            if (input.textContent == '0') {
                input.textContent = '';
                input.textContent += number.textContent;
            }
            else input.textContent += number.textContent;
        }
    });
});

const clearAllClickButton = document.querySelector('.btn_light');

clearAllClickButton.addEventListener('click', () => {
    input.textContent = '0';
    num1 = 0;
    num2 = 0;
});

const operatorClickButton = document.querySelectorAll('.btn_blue');

let num1 = 0, num2, op, checkStatus = false, checkOp = false;

function calc(key, a, b) {
    const operations = {
        '+': a + b,
        '-': a - b,
        '×': a * b,
        '÷': a / b,
    };

    return operations[key];
}

operatorClickButton.forEach(operator => {
    operator.addEventListener('click', () => {
        if(operator.textContent == '=') {
            if (!checkOp) {
                num2 = input.textContent;
            } else num1 = input.textContent;

            let result = calc(op, +num1, +num2);

            input.textContent = result;
        } else {
            op = operator.textContent;
            num1 = input.textContent;
            checkStatus = true;
        }
    });
});

document.querySelector('.clear').addEventListener('click', () => {
    if (input.textContent.length == 1) {
        input.textContent = '0'
    } else {
        input.textContent = input.textContent.slice(0, input.textContent.length -1);
    }
});