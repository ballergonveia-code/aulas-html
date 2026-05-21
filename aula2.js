function PesoIdeal() {

    var inNome = document.getElementById("inNome")
    var rdMasc = document.getElementById("rdMasc")
    var rdFem = document.getElementById("rdFem")
    var inAltura = document.getElementById("inAltura")
    var outPeso = document.getElementById("outPeso")

    var Nome = inNome.value
    var Altura = Number(inAltura.value)
    var Masculino = rdMasc.checked
    var Femenino = rdFem.checked

    if (Nome == "" || (Masculino == false && Femenino == false)) {
        alert("Preencha o Nome e Sexo");
        inNome.focus();
        return
    }

    if (Altura == 0 || isNaN(Altura)) {
        alert("Digite Altura");
        inAltura.focus();
        return
    }

    if (Masculino) {
        var Peso = 22 * Math.pow(Altura, 2)
    }

    else {
        var Peso = 21 * Math.pow(Altura, 2)
    }
    outPeso.textContent = "O peso ideal é " + Peso.toFixed(2)




}
