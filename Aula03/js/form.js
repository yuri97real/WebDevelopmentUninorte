const celular = document.querySelector("#celular")
const submit = document.querySelector("#submit")

submit.addEventListener("click", e => {
    let ddd = celular.value[0] == "(" && celular.value[3] == ")"

    if(!ddd || celular.value.length < 12) { //8-9 dígitos do celular + 2 dos parenteses + 2 do ddd => length == 12
        alert("Número de Celular Inválido!")
    }
    e.preventDefault() //cancelar envio
})