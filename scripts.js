var produto = prompt("Qual o produto que você quer converter para real?")

alert("Hmm, boa pedida. Será que o real ta tão ruim que é melhor pagar em dólar???")

alert("Vamos converter e descobrir!! ")

var valorEmDolarNumero = parseFloat(prompt("Qual o valor em dólar que você quer converter? US$"))

var valorEmReal = valorEmDolarNumero * 5.73
var valorEmRealFixado = valorEmReal.toFixed(2)

alert("O valor em real será " + "R$ " + valorEmRealFixado)

prompt("Valeu a pena o valor?")
