const botao_calcular = document.querySelector("#calcular")
const output_resultado = document.querySelector("#resultado")

function calcular_imc() {
    let peso = document.querySelector("#peso").value
    let altura = document.querySelector("#altura").value

    if (peso == '' || altura == '') {
        output_resultado.innerHTML = `Os campos não podem estar vazios...`
    } else {
        peso = Number(peso)
        altura = Number(altura)
        let imc = peso / altura ** 2

        output_resultado.innerHTML = `IMC = ${imc.toFixed(2)}`
    }
}

botao_calcular.onclick = calcular_imc
