function receberInformacoes(){
    
}

function probabilidadeGrafico(sentidoIncli,pneus,cv,peso){
    let acidente = 0;
    let desvantagem = 0;
    let vencer = 0;

    if(pneus[2] < 30 || pneus[3] < 30){
        acidente += 20;
        desvantagem += 5;
    }else if(pneus[2] < 40 || pneus[3] < 40){
        acidente += 10;
        desvantagem += 5;
    }

    if(sentidoIncli == 'subida' && cv > 300){
        vencer += 5;
    }else if(sentidoIncli == 'descida' && cv < 300){
        vencer += 5;
    }

    if(peso < 1000){
        vencer += 10;
    }else if(peso < 1100){
        vencer += 5;
    }else if(peso < 1300){
        desvantagem += 3;
    }else{
        desvantagem += 5;
    }

    return [vencer,desvantagem,acidente];

}