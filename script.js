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