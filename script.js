document.addEventListener('DOMContentLoaded', function() {
    const desiredTemperatureInput = document.getElementById('desiredTemperature');
    const currentTemperatureElement = document.getElementById('currentTemperature');
    const statusElement = document.getElementById('status');
    const updateButton = document.getElementById('updateButton');

    // Initial temperature value
    let currentTemperature = parseFloat(currentTemperatureElement.textContent);

    // Function to simulate adjusting the temperature
    function updateTemperature() {
        const desiredTemperature = parseFloat(desiredTemperatureInput.value);
        
        if (currentTemperature < desiredTemperature - 1) {
            currentTemperature += 1; // Simulate increasing the temperature
            statusElement.textContent = 'Heating up...';
        } else if (currentTemperature > desiredTemperature + 1) {
            currentTemperature -= 1; // Simulate decreasing the temperature
            statusElement.textContent = 'Cooling down...';
        } else {
            statusElement.textContent = 'Temperature stable.';
        }
        
        currentTemperatureElement.textContent = currentTemperature.toFixed(1);
    }

    // Update temperature when button is clicked
    updateButton.addEventListener('click', updateTemperature);
});