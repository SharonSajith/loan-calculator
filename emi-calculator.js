const principal = document.querySelector('#load-amount-input');
const interest = document.querySelector('#interest-rate-input');
const tenure = document.querySelector('#months-to-pay-input');
const calculate = document.querySelector('#calculate');
const emi = document.querySelector('#emi');
console.log(principal, interest, tenure);

function calculateEMI() {
    if( principal.value === '' || interest.value === '' || tenure.value === '') {
        alert('Please enter all the values');
        return;
    }else{
        const p = principal.value;
        const r = interest.value;
        const n = tenure.value;
        const emiValue = (((p/100)*r)*n);
        //const emiValue =(e+p);
        emi.textContent = emiValue;
    }
}

calculate.addEventListener('click', calculateEMI);