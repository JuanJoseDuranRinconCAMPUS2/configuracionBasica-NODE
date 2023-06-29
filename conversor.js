let convertirDolaresAEuros = (Dolares) =>{
    const valorUnitEuro = 0.91;
    totalEuros = Dolares * valorUnitEuro;
    return totalEuros;
}

let convertirDolaresALibras = (Dolares) =>{
    const valorUnitLibra = 0.78;
    totalLibras = Dolares * valorUnitLibra;
    return totalLibras;
}
module.exports = {
    convertirDolaresAEuros,
    convertirDolaresALibras
};