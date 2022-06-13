/*let comA : number[] = [8,5,7,10,9,2,4,8,6,8];
let comB : number[]= [3,6,8,5,4,7,7,4,6,8,];
let comC : number[]= [7,6,9,8,9,8,5,7,10,9];
*/
let notasAlumnos: number[] = [7, 6, 9, 5, 8, 7, 10, 4, 8, 8];

let meses: string[] = [
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
  "diciembre"
];
let indice: number = 0;

let mostrarDesaprobados = (
  mesesDesaprobados: number[],
  mes: string[]
): string => {
  let des: string = " ";
  for (indice = 0; indice < 10; indice++) {
    if (mesesDesaprobados[indice] < 6) {
      des += mes[indice] + ", ";
    }
  }

  return des;
};

console.log(
  "Usted ha desaprobado los meses de " +
    mostrarDesaprobados(notasAlumnos, meses)
);

let mostrarI = (notasAlumnos: number[], meses: string[]): any => {
  let i: number = 0;
  for (indice = 0; indice < 10; indice++) {
    if (notasAlumnos[indice] >= 6) {
      i += indice + ", ";
    }
  }

  return i;
};

console.log(
  "Usted ha aprobado con los siguientes puntajes de " +
    mostrarI(notasAlumnos) +
    "en los meses de " +
    mostrarI(meses)
);
