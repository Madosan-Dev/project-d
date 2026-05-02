


function perfilDashboard(){
    const graficoPizza = document.getElementById('perfil_corrida');
    const graficoPista = document.getElementById('perfil_pista')

    new Chart(graficoPizza, {
      type: 'doughnut',
      data: {
        labels: ['Ganhou', 'Perdeu'],
        datasets: [{
          data: [20,10],
          backgroundColor: [
                '#4a7ff7', 
                '#FFC107' 
          ],

          borderColor: '#121212',
          borderWidth: 2,


        }
      ]},
      options: {
        plugins: {
          legend:{
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

    new Chart(graficoPista, {
      type: 'pie',
      data: {
        labels: ['Akina', 'Irohazaka','Usui'],
        datasets: [{
          data: [20,10,5],
          backgroundColor: [
                '#4a7ff7', 
                '#FFC107',
                '#f3b86b',
                '#ae8df5'
          ],

          borderColor: '#121212',
          borderWidth: 2,


        }
      ]},
      options: {
        plugins: {
          legend:{
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