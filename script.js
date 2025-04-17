document.getElementById('tipForm').addEventListener('input', calculateTip);

function calculateTip() {
  const billInput = document.getElementById('billtotal');
  const tipSlider = document.getElementById('tip');
  const tipValue = document.getElementById('value');
  const billWithTaxField = document.getElementById('withtax');
  const convertedTipField = document.getElementById('convertedtip');
  const convertedTotalField = document.getElementById('convertedtotal');
  const currency = document.getElementById('currency').value;

  let billAmount = parseFloat(billInput.value);

  // Validation
  if (isNaN(billAmount) || billAmount < 0) {
    billWithTaxField.value = '';
    convertedTipField.value = '';
    convertedTotalField.value = '';
    return;
  }

  const tipPercent = parseInt(tipSlider.value);
  tipValue.textContent = tipPercent;

  const taxAmount = billAmount * 0.11;
  const billWithTax = billAmount + taxAmount;
  const tipAmount = (billAmount * tipPercent) / 100;
  const total = billWithTax + tipAmount;

  billWithTaxField.value = billWithTax.toFixed(2);

  let conversionRate = 1;
  let currencySymbol = '$';

  if (currency === 'eur') {
    conversionRate = 0.95;
    currencySymbol = '€';
  } else if (currency === 'inr') {
    conversionRate = 85;
    currencySymbol = '₹';
  }

  const convertedTip = tipAmount * conversionRate;
  const convertedTotal = total * conversionRate;

  convertedTipField.value = `${currencySymbol}${convertedTip.toFixed(2)}`;
  convertedTotalField.value = `${currencySymbol}${convertedTotal.toFixed(2)}`;
}