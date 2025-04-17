document.getElementById('tipform').addEventListener('input', calculatetip);
document.getElementById('currency').addEventListener('change', convertcurrency);

document.getElementById('Rangetip').addEventListener('input', function () {
    document.getElementById('slidervalue').textContent = this.ariaValueMax;
});

function calculatetip() {
    const billamount = document.getElementById('total');
    const tiprange = document.getElementById('Rangetip');
    const tipamount = document.getElementById('amounttip');
    const totaltax = document.getElementById('totalwithtax');
    const errmsg = document.getElementById('errormessage');
    const converttotal = document.getElementById('totalwithtiptax');

    let bill = parseFloat(billamount.value);
    let tip = parseInt(tiprange.value);

    if (isNaN(bill) || bill < 0) {
        errmsg.textContent = 'Please Enter A Valid Number';
        tipamount.value = totaltax.value = '';
        return;
    }

    if (bill === 0) {
        tipamount.value = totaltax.value = '';
        return;
    }

    let tipamt = (bill * tip / 100);
    let taxttl = bill * 1.11;
    let totaltip = bill + tipamt;

    tipamount.value = tipamt.toFixed(2);
    totaltax.value = taxttl.toFixed(2);

    convertcurrency();
}

function convertcurrency() {
    const currency = document.getElementById('currency').value;
    const totalwithtax = parseFloat(document.getElementById('totalwithtax').value);
    const tipamount = parseFloat(document.getElementById('tipamount').value);
    const convertedttl = document.getElementById('totalwithtiptax');

    if (!totalwithtax || !tipamount) {
        convertedttl.value = '';
        return;
    }

    let total = totalwithtax + tipamount;
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
