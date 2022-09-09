function calculator() {
    const op = Number(prompt('Choose an operation:\n 1 - sum (+)\n 2 - subtraction (-)\n 3 - multiplication (*)\n 4 - real division (/)\n 5 - integer division (remainder) (%)\n 6 - power (**)'));
    if (!op || op >= 7 || op < 1) {
        alert('error - invalid option');
        calculator();
    } 
    else {
        let n1 = Number(prompt('First value:'));
        let n2 = Number(prompt('Second value:'));
        let result;
        if (!n1 || !n2) {
            alert('error - invalid parameters');
            calculator();
        }
        else {
            function sum() {
                result = n1 + n2;
                alert(`${n1} + ${n2} = ${result}`);
                new_op();
            }

            function subtraction() {
                result = n1 - n2;
                alert(`${n1} - ${n2} = ${result}`);
                new_op();
            }
            function multiplication() {
                result = n1 * n2;
                alert(`${n1} * ${n2} = ${result}`);
                new_op();
            }
            function real_division() {
                result = n1 / n2;
                alert(`${n1} / ${n2} = ${result}`);
                new_op();
            }
            function remainder() {
                result = n1 % n2;
                alert(`The remainder of the division between ${n1} and ${n2} is equal to ${result}`);
                new_op();
            }
            function power() {
                result = n1 ** n2;
                alert(`${n1} to the ${n2}th power is ${result}`);
                new_op();
            }
            function new_op() {
                let option = prompt('Wanna do another operation?\n 1 - Yes, I do\n 2 - No, I don't');
                if (option == 1) {
                    calculator();
                } else if (option == 2) {
                    alert('See ya!');
                } else {
                    alert('Invalid option!');
                    new_op();
                }
            }
        }
    }
    switch (op) {
        case 1:
            sum();
            break;
        case 2:
            subtraction();
            break;
        case 3:
            multiplication();
            break;
        case 4:
            real_division();
            break;
        case 5:
            remainder();
            break;
        case 6:
            power();
            break;
    }
}
calculator();
