function Media()
{
var inN1 = document.getElementById("inN1")
var inN2 = document.getElementById("inN2")
var inN3 = document.getElementById("inN3")
var outMedia = document.getElementById("outMedia")
var outAprov = document.getElementById("outAprov")

var N1 = Number(inN1.value);
var N2 = Number(inN2.value);
var N3 = Number(inN3.value);
var smedia = (N1 +N2 + N3)
var Media  = smedia / 3

if(N1 = "" || (N2 == "" && N3 == ""))
{
    alert("Insira todas as notas")
    inN1.focus();
    return
}

if(Media <= 9 && Media >= 0)
{
    outMedia.textContent = "A média é " + Media.toFixed(2);
    outAprov.textContent = "O aluno está reprovado";
}

if(Media <= 20 && Media >= 10)
{
    outMedia.textContent = "A média é " + Media.toFixed(2);
    outAprov.textContent = "O aluno está aprovado";
}

}

var btMedia = document.getElementById("btMedia")
btMedia.addEventListener("click", Media);