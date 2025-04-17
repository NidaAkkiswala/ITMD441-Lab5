window.addEventListener('DOMContentLoaded', () => {
    const billInput = document.getElementById('billTotal');
    const tipRange = document.getElementById('tipRange');
    const tipAmountField = document.getElementById('tipAmount');
    const totalWithTaxField = document.getElementById('totalWithTax');
    const errorMsg = document.getElementById('errorMsg');
    const convertedTotal = document.getElementById('convertedTotal');
    const currencySelect = document.getElementById('currency');
    const sliderValue = document.getElementById('sliderValue');

    function calculateTip() {
      const bill = parseFloat(billInput.value);
      const tipPercent = parseInt(tipRange.value);

      errorMsg.textContent = '';
      sliderValue.textContent = `${tipPercent}%`;
      convertedTotal.value = '';

      if (isNaN(bill) || bill < 0) {
        errorMsg.textContent = 'Please enter a valid non-negative number.';
        tipAmountField.value = totalWithTaxField.value = '';
        return;
      }

      if (bill === 0) {
        tipAmountField.value = totalWithTaxField.value = '';
        return;
      }

      const tipAmount = bill * tipPercent / 100;
      const taxAmount = bill * 0.11;
      const total = bill + tipAmount + taxAmount;

      tipAmountField.value = tipAmount.toFixed(2);
      totalWithTaxField.value = (bill + taxAmount).toFixed(2);

      convertCurrency(total);
    }

    function convertCurrency(total) {
      const currency = currencySelect.value;

      if (!total) {
        convertedTotal.value = '';
        return;
      }

      let converted;
      switch (currency) {
        case 'inr':
          converted = total * 85;
          convertedTotal.value = `${converted.toFixed(2)} INR`;
          break;
        case 'eur':
          converted = total * 0.95;
          convertedTotal.value = `${converted.toFixed(2)} EUR`;
          break;
        default:
          convertedTotal.value = `${total.toFixed(2)} USD`;
      }
    }

    billInput.addEventListener('input', calculateTip);
    tipRange.addEventListener('input', calculateTip);
    currencySelect.addEventListener('change', calculateTip);
  });