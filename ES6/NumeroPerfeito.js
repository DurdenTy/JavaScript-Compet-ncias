
const perfeito = (n) => {
  let i = 1;
  let u = 0;
  while(i <= n/2){
    if(n % i == 0){
      u += i;
    }
    i++;
  }
  if(u == n){
    return "perfeito";
  }else{
    return "não é perfeito";
  }
}


console.log(perfeito(6));
