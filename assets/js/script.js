const numberInput = document.getElementById('number');
const output = document.getElementById('output');
const convertBtn = document.getElementById('convert-btn');

const romanNumbers = [
    {
        id: 1,
        number: 9,
        roman: 'IX'
    },
    {
        id: 2,
        number: 16,
        roman: 'XVI'
    },
    {
        id: 3,
        number: 649,
        roman: 'DCXLIX'
    },
    {
        id: 4,
        number: 1023,
        roman: 'MXXIII'
    },
    {
        id: 5,
        number: 3999,
        roman: 'MMMCMXCIX'
    }
];


// Convert roman numeral
const convertRomanNumeral = (keyWord) => {
    for (let i = 0; i < romanNumbers.length; i++) {
        if (romanNumbers[i].number === parseInt(numberInput.value)) {
            output.innerHTML = `
            <p class="result">${romanNumbers[i].roman}</p>
            `;
        }  
    }
}

//Check value input empty or not
const checkInput = () => {
    if (!numberInput.value || isNaN(parseInt(numberInput.value))) {
        output.innerHTML = `
        <p>Please enter <span>a valid number</span></p>
        `;
        numberInput.focus();
        output.classList.remove('hidden');
    } else if (numberInput.value < 1) {
        output.innerHTML = `
        <p>Please enter a number <span>greater than or equal to 1</span></p>
        `;
        numberInput.focus();
        numberInput.value = '';
        output.classList.remove('hidden');
    } else if (numberInput.value >= 4000) {
        output.innerHTML = `
        <p>Please enter a number <span>less than or equal to 3999</span></p>
        `;
        numberInput.focus();
        numberInput.value = '';
        output.classList.remove('hidden');
    } else {
        convertRomanNumeral(numberInput.value);
        numberInput.focus();
        numberInput.value = '';
    }
}

/** Button Act. */
convertBtn.addEventListener('click', (e) => {
    e.preventDefault();
    checkInput();
});