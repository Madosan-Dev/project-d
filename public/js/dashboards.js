


function perfilDashboard(){
    const graficoPizza = document.getElementById('perfil_corrida');
    const graficoPista = document.getElementById('perfil_pistas')

    new Chart(graficoPizza, {
      type: 'pie',
      data: {
        labels: ['Ganhou', 'Perdeu'],
        datasets: [{
          data: [20,10],
          backgroundColor: [
                '#4A86E8', 
                '#FFC107' 
          ],

          borderColor: '#121212',
          borderWidth: 2,


        }
      ]},
      options: {
        plugins: {
          legend:{
            position: 'bottom',
            labels: {
              color: 'wheat',
              font: {
                size: 15,
              }
            }
          }
        }
      }
    });
}