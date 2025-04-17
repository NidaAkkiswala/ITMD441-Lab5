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
    const conerttotal = document.getElementById('totalwithtip');

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
    let ttltp = bill + tipamt;

    tipamount.value = tipamt.toFixed(2);
    totaltax.value = taxttl.toFixed(2);

    convertcurrency();
}
