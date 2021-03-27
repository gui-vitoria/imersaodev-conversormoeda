//Pergunta ao usuário
var produto = prompt("Qual o produto que você quer converter para real?")

//Frase direcionada ao usuário sem resposta
alert("Hmm, boa pedida. Será que o real ta tão ruim que é melhor pagar em dólar???")

alert("Vamos converter e descobrir!! ")

//Definindo o valor da variável que o usuário irá dizer
var valorEmDolarNumero = parseFloat(prompt("Qual o valor em dólar que você quer converter? US$"))

//Calculo da conversão do valor digitado para em real
var valorEmReal = valorEmDolarNumero * 5.73

//Limitando a quantidade de casas decimais
var valorEmRealFixado = valorEmReal.toFixed(2)

//Resultado que será mostrado ao usuário
alert("O valor em real será " + "R$ " + valorEmRealFixado)

prompt("Valeu a pena o valor?")
