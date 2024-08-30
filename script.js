
    const desiredTemperatureInput = document.getElementById('desiredTemperature');
    const currentTemperatureElement = document.getElementById('currentTemperature');
    const statusElement = document.getElementById('status');
    const updateButton = document.getElementById('updateButton');

    // Initial temperature value
    let currentTemperature = parseFloat(currentTemperatureElement.innerHTML);

    // Function to simulate adjusting the temperature
    function updateTemperature() {
        const desiredTemperature = parseFloat(desiredTemperatureInput.value);
       
       const water= setInterval(()=>{
            if (currentTemperature <= desiredTemperature - 1) {
                currentTemperature++
                currentTemperatureElement.innerHTML=currentTemperature
    
                statusElement.textContent = 'Heating up...';
            } else if (currentTemperature >= desiredTemperature + 1) {
                currentTemperature--
                currentTemperatureElement.innerHTML=currentTemperature
      
     // Simulate decreasing the temperature
                statusElement.textContent = 'Cooling down...';
            } else {
                statusElement.textContent = 'Temperature stable.';
                clearInterval(water)
            }
            console.log(currentTemperature,desiredTemperature)
        },1000)
        
        if(currentTemperature===desiredTemperature){
          
            console.log(water)
        }


        
    }

    // Update temperature when button is clicked
    updateButton.addEventListener('click', updateTemperature);
   

