


function perfilDashboard(){
    const graficoPizza = document.getElementById('grafico_pizza');

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