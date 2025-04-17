document.getElementById('tipform').addEventListener('input', calculatetip);
document.getElementById('currency').addEventListener('change', calculatetip);

document.getElementById('Rangetip').addEventListener('input', function () {
    document.getElementById('slidervalue').textContent = this.value;
});

function calculatetip() {
    const billamount = document.getElementById('total');
    const tiprange = document.getElementById('Rangetip');
    const tipamountField = document.getElementById('amounttip');
    const totaltaxField = document.getElementById('totalwithtax');
    const errmsg = document.getElementById('errormessage');
    const converttotal = document.getElementById('totalwithtiptax');

    let bill = parseFloat(billamount.value);
    let tip = parseInt(tiprange.value);

    errmsg.textContent = '';
    converttotal.value = '';

    if (isNaN(bill) || bill < 0) {
        errmsg.textContent = 'Please Enter A Valid Number';
        tipamountField.value = totaltaxField.value = '';
        return;
    }

    if (bill === 0) {
        tipamountField.value = totaltaxField.value = '';
        return;
    }

    let tipamt = (bill * tip) / 100;
    let taxamt = bill * 1.11;
    let totaltip = bill + tipamt + taxamt;

    tipamountField.value = tipamt.toFixed(2);
    totaltaxField.value = (bill + taxamt).toFixed(2);

    convertcurrency(total);
}

function convertcurrency(total) {
    const currency = document.getElementById('currency').value;
    const convertedttl = document.getElementById('totalwithtiptax');

    if (!total) {
        convertedttl.value = '';
        return;
    }

    let converted;

    switch (currency) {
        case 'inr':
            converted = total * 85;
            convertedttl.value = `${converted.toFixed(2)} INR`;
            break;
        case 'eur':
            converted = total * 0.95;
            convertedttl.value = `${converted.toFixed(2)} EUR`;
            break;
        default:
            convertedttl.value = `${total.toFixed(2)} USD`;
    }
}
