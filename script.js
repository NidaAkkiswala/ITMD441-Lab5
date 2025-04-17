window.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('tipForm');
    const billInput = document.getElementById('billTotal');
    const tipSlider = document.getElementById('tip');
    const tipValueOutput = document.getElementById('tipValue');
    const billWithTaxField = document.getElementById('billWithTax');
    const convertedTipField = document.getElementById('convertedTip');
    const convertedTotalField = document.getElementById('convertedTotal');
    const currencySelect = document.getElementById('currency');
  
    form.addEventListener('input', calculateTip);
  
    function calculateTip() {
      const billAmount = parseFloat(billInput.value);
      const tipPercent = parseInt(tipSlider.value);
      const selectedCurrency = currencySelect.value;
  
      tipValueOutput.textContent = tipPercent;
  
      if (isNaN(billAmount) || billAmount < 0) {
        billWithTaxField.value = '';
        convertedTipField.value = '';
        convertedTotalField.value = '';
        return;
      }
  
      // Tax is 11%
      const tax = billAmount * 0.11;
      const billWithTax = billAmount + tax;
  
      // Tip Calculation
      const tipAmount = (billAmount * tipPercent) / 100;
      const totalWithTipAndTax = billWithTax + tipAmount;
  
      billWithTaxField.value = billWithTax.toFixed(2);
  
      // Currency conversion
      let conversionRate = 1;
      let currencySymbol = '$';
  
      if (selectedCurrency === 'eur') {
        conversionRate = 0.95;
        currencySymbol = '€';
      } else if (selectedCurrency === 'inr') {
        conversionRate = 85;
        currencySymbol = '₹';
      }
  
      const convertedTip = tipAmount * conversionRate;
      const convertedTotal = totalWithTipAndTax * conversionRate;
  
      convertedTipField.value = `${currencySymbol}${convertedTip.toFixed(2)}`;
      convertedTotalField.value = `${currencySymbol}${convertedTotal.toFixed(2)}`;
    }
  });
  