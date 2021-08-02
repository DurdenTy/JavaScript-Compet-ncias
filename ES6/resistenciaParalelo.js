
const resistenciaParalela = (r1, r2, r3) => {
  let Rt = (1/r1) + (1/r2) + (1/r3);
    return 1/Rt + " Ohm";
  }

console.log(resistenciaParalela(5, 5, 5));
