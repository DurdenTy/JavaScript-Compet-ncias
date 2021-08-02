
const somatorioX25 = (n) => {
    let i = 25;
    let u = 1;
    let somatorio = [];

    while(i >= 1){
      for(var s = i;s <= i;s++){
          somatorio += (n * n);
        }
        somatorio += somatorio[0 + u]/u;
        i--;
        u++;
    }
      for(var k = 1; k <= u; k++){
        
      }
      
    return somatorio;

  }

console.log(somatorioX25(5));
