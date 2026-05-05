function indoEmbora() {
    document.write(`
        <!DOCTYPE html>
        <html lang="pt-BR">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Olá, São Lucas!</title>
            <style>
                body {
                    font-family: 'Arial', sans-serif;
                    background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
                    color: #fff;
                    text-align: center;
                    padding: 50px;
                    margin: 0;
                    min-height: 100vh;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }
                h1 {
                    font-size: 4em;
                    margin-bottom: 20px;
                    text-shadow: 0 0 20px #ffd700, 0 0 40px #ffd700;
                    animation: glow 2s ease-in-out infinite alternate;
                }
                @keyframes glow {
                    from { text-shadow: 0 0 20px #ffd700, 0 0 40px #ffd700; }
                    to { text-shadow: 0 0 30px #9d4edd, 0 0 50px #9d4edd; }
                }
                p {
                    font-size: 1.5em;
                    margin-bottom: 40px;
                    color: #a8dadc;
                }
                a {
                    display: inline-block;
                    padding: 15px 30px;
                    background: linear-gradient(45deg, #9d4edd, #ffd700);
                    color: #fff;
                    text-decoration: none;
                    border-radius: 25px;
                    font-size: 1.2em;
                    font-weight: bold;
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    box-shadow: 0 4px 15px rgba(0,0,0,0.3);
                }
                a:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 8px 25px rgba(0,0,0,0.5);
                }
            </style>
        </head>
        <body>
            <h1>Olá, São Lucas!</h1>
            <p>Obrigado por visitar nossa página de JavaScript!</p>
            <a href="index.html">Voltar à Página Principal</a>
        </body>
        </html>
    `);
    alert("Fim!");
}

function questaoNome() {
    let nome = prompt("Qual é o seu nome?");
    document.getElementById("res1").innerHTML = "Seu Nome é:" + nome;
}

function mostrarTexto() {
    let texto = document.getElementById("entrada").value;
    document.getElementById("res2").innerHTML = "Você Escreveu: " + texto;
}

function somar() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    if (isNaN(num1) || isNaN(num2)) {
        alert("Digite números válidos!");
    } else {
        let resultado = num1 + num2;
        document.getElementById("res3").innerHTML = '<div class="caixinha">' + num1 + '</div> + <div class="caixinha">' + num2 + '</div> = <div class="caixinha">' + resultado + '</div>';
    }
}

function calcularMedia() {
    let nota1 = parseFloat(document.getElementById("nota1").value);
    let nota2 = parseFloat(document.getElementById("nota2").value);
    let nota3 = parseFloat(document.getElementById("nota3").value);
    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        alert("Digite números válidos!");
    } else if (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10 || nota3 < 0 || nota3 > 10) {
        alert("As notas devem estar entre 0 e 10!");
    } else {
        let media = (nota1 + nota2 + nota3) / 3;
        let status = media > 7 ? "aprovado!" : "reprovado!";
        document.getElementById("res4").innerHTML = 
            '<div class="caixinha">' + nota1 + '</div> + <div class="caixinha">' + nota2 + '</div> + <div class="caixinha">' + nota3 + '</div> = <div class="caixinha">' + media.toFixed(2) + '</div> <span class="status ' + (media > 7 ? 'aprovado' : 'reprovado') + '">' + status + '</span>';
    }
}

function converterDolar() {
    let reais = parseFloat(document.getElementById("reais").value);
    let cotacao = parseFloat(document.getElementById("cotacao").value);
    if (isNaN(reais) || isNaN(cotacao) || cotacao <= 0) {
        alert("Digite valores válidos! A cotação deve ser maior que zero.");
    } else {
        let dolares = reais / cotacao;
        document.getElementById("res5").innerHTML = 
            '<div class="caixinha">R$ ' + reais.toFixed(2) + '</div> / <div class="caixinha">US$ ' + cotacao.toFixed(2) + '</div> = <div class="caixinha">US$ ' + dolares.toFixed(2) + '</div>';
    }
}

function calcularArea() {
    let altura = parseFloat(document.getElementById("altura").value);
    let largura = parseFloat(document.getElementById("largura").value);
    if (isNaN(altura) || isNaN(largura) || altura <= 0 || largura <= 0) {
        alert("Digite altura e largura válidas, maiores que zero.");
    } else {
        let area = altura * largura;
        document.getElementById("res6").innerHTML =
            '<div class="caixinha">Altura: ' + altura.toFixed(2) + ' m</div> × <div class="caixinha">Largura: ' + largura.toFixed(2) + ' m</div> = <div class="caixinha">Área: ' + area.toFixed(2) + ' m²</div>';
    }
}

function mostrarVizinhos() {
    let numero = parseInt(document.getElementById("numeroVizinhos").value, 10);
    if (isNaN(numero)) {
        alert("Digite um número válido!");
    } else {
        document.getElementById("res7").innerHTML = '<div class="caixinha">' + (numero - 1) + '</div> <div class="caixinha">' + numero + '</div> <div class="caixinha">' + (numero + 1) + '</div>';
    }
}

function verificarParImpar() {
    let numero = parseInt(document.getElementById("numeroParImpar").value, 10);
    if (isNaN(numero)) {
        alert("Digite um número válido!");
    } else {
        let tipo = numero % 2 === 0 ? "PAR" : "ÍMPAR";
        document.getElementById("res8").innerHTML = '<div class="caixinha">O número ' + numero + ' é ' + tipo + '.</div>';
    }
}

function verificarVelocidade() {
    let velocidade = parseFloat(document.getElementById("velocidade").value);
    if (isNaN(velocidade) || velocidade < 0) {
        alert("Digite uma velocidade válida!");
    } else {
        let mensagem = "Velocidade dentro do limite.";
        if (velocidade > 120) {
            mensagem = "INFRAÇÃO GRAVÍSSIMA!";
        } else if (velocidade > 80) {
            mensagem = "MULTADO!";
        }
        document.getElementById("res9").innerHTML = '<div class="caixinha">' + mensagem + '</div>';
    }
}

function verificarHabilitacao() {
    let anoNascimento = parseInt(document.getElementById("anoNascimento").value, 10);
    let anoAtual = parseInt(document.getElementById("anoAtual").value, 10);
    if (isNaN(anoNascimento) || isNaN(anoAtual) || anoNascimento <= 0 || anoAtual < anoNascimento) {
        alert("Digite anos válidos!");
    } else {
        let idade = anoAtual - anoNascimento;
        let mensagem = idade >= 18 ? "Você já pode dirigir!." : "Você ainda não tem idade para dirigir.";
        document.getElementById("res10").innerHTML = '<div class="caixinha">Idade: ' + idade + ' anos</div> <div class="caixinha">' + mensagem + '</div>';
    }
}

function calcularIMC() {
    let peso = parseFloat(document.getElementById("pesoIMC").value);
    let altura = parseFloat(document.getElementById("alturaIMC").value);
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        alert("Digite peso e altura válidos!");
    } else {
        let imc = peso / (altura * altura);
        let mensagem = imc < 25 ? "Você está no peso ideal." : "Atenção: Você está acima do peso ideal.";
        document.getElementById("res11").innerHTML = '<div class="caixinha">IMC: ' + imc.toFixed(2) + '</div> <div class="caixinha">' + mensagem + '</div>';
    }
}

function simularDesconto() {
    let valor = parseFloat(document.getElementById("valorCompra").value);
    if (isNaN(valor) || valor < 0) {
        alert("Digite um valor de compra válido!");
    } else {
        let desconto = valor > 500 ? 0.15 : 0.05;
        let valorFinal = valor * (1 - desconto);
        document.getElementById("res12").innerHTML = '<div class="caixinha">O valor final da sua compra é R$ ' + valorFinal.toFixed(2) + '</div>';
    }
}

function compararNumeros() {
    let num1 = parseFloat(document.getElementById("comparador1").value);
    let num2 = parseFloat(document.getElementById("comparador2").value);
    if (isNaN(num1) || isNaN(num2)) {
        alert("Digite dois números válidos!");
    } else if (num1 === num2) {
        document.getElementById("res13").innerHTML = '<div class="caixinha">Os números são iguais.</div>';
    } else {
        let maior = num1 > num2 ? num1 : num2;
        let menor = num1 > num2 ? num2 : num1;
        document.getElementById("res13").innerHTML = '<div class="caixinha">O número ' + maior + ' é maior que o número ' + menor + '.</div>';
    }
}

function classificarTriangulo() {
    let lado1 = parseFloat(document.getElementById("lado1").value);
    let lado2 = parseFloat(document.getElementById("lado2").value);
    let lado3 = parseFloat(document.getElementById("lado3").value);
    if (isNaN(lado1) || isNaN(lado2) || isNaN(lado3) || lado1 <= 0 || lado2 <= 0 || lado3 <= 0) {
        alert("Digite lados válidos maiores que zero!");
    } else if (lado1 + lado2 <= lado3 || lado1 + lado3 <= lado2 || lado2 + lado3 <= lado1) {
        document.getElementById("res14").innerHTML = '<div class="caixinha">Não forma um triângulo válido.</div>';
    } else {
        let tipo;
        if (lado1 === lado2 && lado2 === lado3) {
            tipo = "Equilátero";
        } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
            tipo = "Isósceles";
        } else {
            tipo = "Escaleno";
        }
        document.getElementById("res14").innerHTML = '<div class="caixinha">O triângulo é ' + tipo + '.</div>';
    }
}

function menuBebidas() {
    let escolha = parseInt(document.getElementById("bebida").value, 10);
    let bebida;
    switch (escolha) {
        case 1:
            bebida = "Suco";
            break;
        case 2:
            bebida = "Refrigerante";
            break;
        case 3:
            bebida = "Água";
            break;
        default:
            bebida = null;
            break;
    }
    let mensagem = bebida ? "Você escolheu " + bebida + "." : "Opção inválida! Escolha 1, 2 ou 3.";
    document.getElementById("res15").innerHTML = '<div class="caixinha">' + mensagem + '</div>';
}

function verificarLetra() {
    let letra = document.getElementById("letra").value.trim().toLowerCase();
    if (!letra || letra.length !== 1 || !/^[a-záéíóúàèìòùãõâêîôûç]$/i.test(letra)) {
        alert("Digite uma única letra válida!");
        return;
    }
    let vogais = ["a", "e", "i", "o", "u"];
    let tipo = vogais.includes(letra) ? "VOGAL" : "CONSOANTE";
    document.getElementById("res16").innerHTML = '<div class="caixinha">A letra "' + letra.toUpperCase() + '" é ' + tipo + '.</div>';
}

function calculadoraSimples() {
    let n1 = parseFloat(document.getElementById("calc1").value);
    let n2 = parseFloat(document.getElementById("calc2").value);
    let op = document.getElementById("operacao").value.trim();
    if (isNaN(n1) || isNaN(n2) || !op) {
        alert("Digite dois números e a operação desejada.");
        return;
    }
    let resultado;
    switch (op) {
        case "+":
            resultado = n1 + n2;
            break;
        case "-":
            resultado = n1 - n2;
            break;
        case "*":
            resultado = n1 * n2;
            break;
        case "/":
            if (n2 === 0) {
                alert("Divisão por zero não é permitida.");
                return;
            }
            resultado = n1 / n2;
            break;
        default:
            alert("Operação inválida! Use +, -, * ou /. ");
            return;
    }
    document.getElementById("res17").innerHTML = '<div class="caixinha">' + n1 + ' ' + op + ' ' + n2 + ' = ' + resultado.toFixed(2) + '</div>';
}

function conversorMoedasPro() {
    let reais = parseFloat(document.getElementById("valorReais").value);
    let opcao = parseInt(document.getElementById("moedaDestino").value, 10);
    if (isNaN(reais) || reais < 0 || isNaN(opcao)) {
        alert("Digite um valor em reais e a opção de moeda.");
        return;
    }
    let taxa;
    let nome;
    switch (opcao) {
        case 1:
            taxa = 5.30;
            nome = "Dólar";
            break;
        case 2:
            taxa = 5.50;
            nome = "Euro";
            break;
        case 3:
            taxa = 0.025;
            nome = "Peso Argentino";
            break;
        default:
            taxa = null;
            break;
    }
    if (!taxa) {
        document.getElementById("res18").innerHTML = '<div class="caixinha">Opção inválida! Escolha 1, 2 ou 3.</div>';
        return;
    }
    let convertido = reais / taxa;
    document.getElementById("res18").innerHTML = '<div class="caixinha">R$ ' + reais.toFixed(2) + ' = ' + convertido.toFixed(2) + ' ' + nome + '</div>';
}

function contagemProgressiva() {
let cont = 0;

while (cont < 50) {
    cont++;
    document.getElementById("res19").innerHTML += '<div class="caixinha">' + cont + '</div>';
}
}

function mostrarTabuada() {
    let numero = parseInt(document.getElementById("numeroTabuada").value, 10);
    if (isNaN(numero) || numero < 1) {
        alert("Digite um número válido para a tabuada.");
        return;
    }
    let tabuada = '';
    for (let i = 1; i <= 10; i++) {
        tabuada += '<div class="caixinha">' + numero + ' × ' + i + ' = ' + (numero * i) + '</div>';
    }
    document.getElementById("res20").innerHTML = tabuada;
}

function somar() {
    let soma = 0;

for (let i = 1; i <= 5; i++) {

    let numero = parseFloat(prompt(`Digite o ${i}º número:`));

    soma = soma + numero;
}

alert(`A soma total é: ${soma}`);

document.getElementById("res3").innerHTML = '<div class="caixinha">A soma total é: ' + soma + '</div>';

}

// Adicionar funcionalidade de Enter para melhor usabilidade
document.getElementById("entrada").addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        mostrarTexto();
    }
});

document.getElementById("num2").addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        somar();
    }
});

document.getElementById("nota3").addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        calcularMedia();
    }
});

document.getElementById("cotacao").addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        converterDolar();
    }
});

document.getElementById("altura").addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        calcularArea();
    }
});

document.getElementById("largura").addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        calcularArea();
    }
});

document.getElementById("numeroVizinhos").addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        mostrarVizinhos();
    }
});

document.getElementById("numeroParImpar").addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        verificarParImpar();
    }
});

document.getElementById("velocidade").addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        verificarVelocidade();
    }
});

document.getElementById("anoAtual").addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        verificarHabilitacao();
    }
});

document.getElementById("alturaIMC").addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        calcularIMC();
    }
});

document.getElementById("valorCompra").addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        simularDesconto();
    }
});

document.getElementById("comparador2").addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        compararNumeros();
    }
});

document.getElementById("lado3").addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        classificarTriangulo();
    }
});

document.getElementById("bebida").addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        menuBebidas();
    }
});

document.getElementById("letra").addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        verificarLetra();
    }
});

document.getElementById("calc2").addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        calculadoraSimples();
    }
});

document.getElementById("operacao").addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        calculadoraSimples();
    }
});

document.getElementById("moedaDestino").addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        conversorMoedasPro();
    }
});

document.getElementById("valorReais").addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        conversorMoedasPro();
    }
});