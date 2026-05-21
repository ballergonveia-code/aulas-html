function Voto()
{
 var inNasc = document.getElementById("inNascimento")
 var inAno = document.getElementById("inAno") 
 var outvotar = document.getElementById("outvotar") 

var nascimento = Number(inNasc.value)
var Ano = Number(inAno.value)

var idade = (Ano - nascimento)


 if(idade >= 18)
 {
    
var outvoto = true
if(outvoto == true)
{
outvotar.textContent = "A idade é " + idade +" e o usuário pode votar";
}
 }

 else
    {
outvotar.textContent ="A idade é " + idade +  " e o usuário não pode votar";
 }
 

}

var btvoto = document.getElementById("btvoto")
btvoto.addEventListener("click", Voto);