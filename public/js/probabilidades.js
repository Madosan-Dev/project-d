function receberInformacoes(){
    
}

function probabilidadeGrafico(sentidoIncli,pneus,cv,peso){
    let acidente = 1.5;
    let desvantagem = 1.5;
    let vencer = 1.5;

    if(pneus[2] < 30 || pneus[3] < 30){
        acidente += 20;
        desvantagem += 5;
    }else if(pneus[2] < 40 || pneus[3] < 40){
        acidente += 10;
        desvantagem += 5;
    }else if(pneus[2] < 60 || pneus[3] < 60){
        desvantagem += 5;
    }else if(pneus[2] < 80 || pneus[3] < 80){
        desvantagem += 2;
    }

    if(sentidoIncli == 'subida'){
        if(cv > 300){
            vencer += 10;
        }
    }else if(sentidoIncli == 'descida'){
        if(cv < 300){
            vencer += 10;
        }else{
            vencer += 5;
        }
    }

    if(peso < 1000){
        vencer += 5;
    }else if(peso < 1100){
        vencer += 5;
    }else if(peso < 1300){
        desvantagem += 3;
    }else{
        desvantagem += 5;
    }



    return [vencer,desvantagem,acidente];

}