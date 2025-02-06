document.getElementById('convert-btn').addEventListener('click', function () {
    const temperatureInput = document.getElementById('temperature').value.trim();
    const unit = document.getElementById('unit').value;
    const errorMessage = document.getElementById('error-message');
    const result = document.getElementById('result');
  
    // Reset error message and result
    errorMessage.textContent = '';
    result.textContent = '--';
  
    // Validate input
    if (isNaN(temperatureInput) || temperatureInput === '') {
      errorMessage.textContent = 'Please enter a valid number!';
      return;
    }
  
    const temperature = parseFloat(temperatureInput);
  
    let convertedTemp;
  
    // Conversion Logic with Two Decimal Approximation
    if (unit === 'celsius') {
      convertedTemp = `${((temperature * 9) / 5 + 32).toFixed(2)}° Fahrenheit | ${(temperature + 273.15).toFixed(2)} K`;
    } else if (unit === 'fahrenheit') {
      convertedTemp = `${(((temperature - 32) * 5) / 9).toFixed(2)}° Celsius | ${((((temperature - 32) * 5) / 9) + 273.15).toFixed(2)} K`;
    } else if (unit === 'kelvin') {
      convertedTemp = `${(temperature - 273.15).toFixed(2)}° Celsius | ${(((temperature - 273.15) * 9) / 5 + 32).toFixed(2)}° Fahrenheit`;
    }
  
    // Display Result
    result.textContent = convertedTemp;
  });
  
  
  
  
  