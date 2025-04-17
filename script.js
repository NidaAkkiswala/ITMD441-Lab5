window.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('tipForm');
    const billInput = document.getElementById('billtotal');
    const tipSlider = document.getElementById('tip');
    const tipValueOutput = document.getElementById('value');
    const billWithTaxField = document.getElementById('withtax');
    const convertedTipField = document.getElementById('convertedtip');
    const convertedTotalField = document.getElementById('convertedtotal');
    const currencySelect = document.getElementById('currency');
  
    tipValueOutput.textContent = tipSlider.value;
    tipSlider.addEventListener("input", (event) => {
      tipValueOutput.textContent = event.target.value;
      calculateTip(); 
    });
  
    form.addEventListener('input', calculateTip);
    currencySelect.addEventListener('change', calculateTip);
  
    function calculateTip() {
      const billAmount = parseFloat(billInput.value);
      const tipPercent = parseInt(tipSlider.value);
      const selectedCurrency = currencySelect.value;
  
      if (isNaN(billAmount) || billAmount < 0) {
        billWithTaxField.value = '';
        convertedTipField.value = '';
        convertedTotalField.value = '';
        return;
      }
  
      const tax = billAmount * 0.11;
      const billWithTax = billAmount + tax;
      const tipAmount = (billAmount * tipPercent) / 100;
      const totalWithTipAndTax = billWithTax + tipAmount;
  
      billWithTaxField.value = billWithTax.toFixed(2);
  
      let conversionRate = 1;
      let currencySymbol = '$';
  
      if (selectedCurrency === 'eur') {
        conversionRate = 0.95;
      } else if (selectedCurrency === 'inr') {
        conversionRate = 85;
      }
      else {
        conversionRate = 1;
      }
  
      const convertedTip = tipAmount * conversionRate;
      const convertedTotal = totalWithTipAndTax * conversionRate;
  
      convertedTipField.value = `${convertedTip.toFixed(2)}`;
      convertedTotalField.value = `${convertedTotal.toFixed(2)}`;
    }
  });
  