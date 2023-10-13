const contentDiv = document.getElementById('content');

const getUserInput = () => {
    let input1 = prompt('Enter the first integer:');
    let input2 = prompt('Enter the second integer:');

    const error = 'Error!';
    
    if (isNaN(Number(input1)) || isNaN(Number(input2)) || input1 === "" || input2 === "") {
        const alphaError = document.createElement('p');
        alphaError.innerHTML = `<span class = "error">${error}</span> Invalid input, please enter integers. You entered "${input1}" and "${input2}". Try again.`
        contentDiv.appendChild(alphaError);
    } else if (!Number.isInteger(Number(input1)) || !Number.isInteger(Number(input2))){
        const decError = document.createElement('p');
        decError.innerHTML = `<span class = "error">${error}</span> You must enter integers, not decimals. You entered "${input1}" and "${input2}". Try again.`;
        contentDiv.appendChild(decError);
    } else {
        const sum = Number(input1) + Number(input2);
        
        const equation = document.createElement('p');
        equation.innerHTML = `${input1} + ${input2} = <span class="sum">${sum}</span>`;
        contentDiv.appendChild(equation);
    }
};

getUserInput();