
const nombre ='Rox';
const apellido='Mendoza';

const nomComplete = `
${nombre} 
${apellido}
${1+1}
`; 

console.log(nomComplete);

function  getSaludo(nombre){
    return `Hola ${nombre}`;
}

console.log(`Este es un texto: ${getSaludo(nombre)}`)