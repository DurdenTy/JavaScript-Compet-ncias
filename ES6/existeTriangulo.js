
const existeTriangulo = (l1, l2, l3) => {
  let i = 0;
    if((l1 >= (l2 + l3)) || (l2 >= (l1 + l3)) || (l3 >= (l2 + l1))){
      return "Não forma triangulo";
    }else{
      return "Forma triangulo";
    }

  }

console.log(existeTriangulo(2, 2, 2));
