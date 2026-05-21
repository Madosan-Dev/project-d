function corridaDashboard(infoGrafico){
  const graficoRadar = document.getElementById('grafico_corrida');

  console.log(infoGrafico);

  new Chart(graficoRadar, {
        type: 'radar',
        data: {
            labels: ['Probabilidade de vencer', 'Desvantagem', 'Acidente'],
            datasets: [{
                label: 'Probabilidade',
                data: infoGrafico,
                borderColor: 'wheat',
                backgroundColor: 'rgba(245, 222, 179, 0.2)'
            }]
        },
        options: {
            scales: {
                r: {
                    ticks: { color: 'wheat' },
                    grid: { color: 'rgba(245, 222, 179, 0.2)' },
                    suggestedMin: 0,
                    suggestedMax: 15
                }
            },
            plugins: {
                legend: {
                    labels: {
                      color: 'wheat',
                      font: {
                        size: 15,
                      }
                    }
                }
            },
            elements: {
                line: { borderWidth: 3 }
            }
        }
    });
}

function obterDadosCorredor(){
  let idUsuario = sessionStorage.ID_USUARIO;

  fetch(`/graficos/buscarCorridas/${idUsuario}`,)
       .then(function (resposta){
            console.log("resposta: ", resposta);

            if(resposta.ok){
              resposta.json().then(function (dados){
                let ganhou = 10;
                let perdeu = 2;
                perfilDashboard(ganhou,perdeu);
                kpiPerfil();
                  if(dados.length > 0){
                    

                    for(let i = 0; i < dados.lenght;i++){
                      if(dados[i].ganhador == 1){
                        ganhou++;
                      }else{
                        perdeu++;
                      }
                    }

                  }else{
                    // console.log("não passei do dados")
                    // div_erro.innerHTML = `<p>Você ainda não correu em nenhuma corrida!<p>`;
                  }
                  
                })

            }
            
        }).catch(function (resposta) {
                console.log(`#ERRO: ${resposta}`);
                finalizarAguardar();
        });
}

function kpiPerfil(){
  kpi_grafico.innerHTML = `
      <div>
        <p>Taxa de Vitoria </p>
        <p id="taxaVitoria"></p>
      </div>
      <div>
        <p>Média da saúde dos Pneus</p>
        <p id="saudePneu"></p>  
      </div>
      <div>
        <p>Montanha mais desafiadora</p>
        <p id="montanhaDesa"></p>
      </div>
  `;
}


function perfilDashboard(ganhou,perdeu){
    const graficoPizza = document.getElementById('perfil_corrida');
    const graficoPista = document.getElementById('perfil_pista')

    new Chart(graficoPizza, {
      type: 'doughnut',
      data: {
        labels: ['Ganhou', 'Perdeu'],
        datasets: [{
          data: [ganhou,perdeu],
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