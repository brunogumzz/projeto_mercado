const selectElement = document.getElementById('mySelect');

    selectElement.addEventListener('change', function() {
      const selectedOption = selectElement.value;
      if (selectedOption == "Empório Delícias do Bairro") {
            window.location.replace('./superEmporioDelicias.html');

        } else  if (selectedOption == 'Supermercado Estrela') {
            window.location.replace('./SupermercadoEstrela.html');

        } else  if (selectedOption == 'Mercado Verde Vida') {
            window.location.replace('./SupermercadoVidaVerde.html');
        }
          
      
    });