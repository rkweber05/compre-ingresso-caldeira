function comprar() {
    let tipoIngesso = document.getElementById('tipo-ingresso');

    // transforma o texto em número inteiro
    let quantidadeIngresso = parseInt(document.getElementById('qtd').value);

    if (tipoIngesso.value == 'pista') {
        comprarPista(quantidadeIngresso);
        document.getElementById('qtd').value = "";
    } else if (tipoIngesso.value == 'superior') {
        comprarSuperior(quantidadeIngresso);
        document.getElementById('qtd').value = "";
    } else {
        comprarInferior(quantidadeIngresso); 
        document.getElementById('qtd').value = "";   
    }
}

function comprarPista(quantidade) {
    let quantidadePista = parseInt(document.getElementById('qtd-pista').textContent);

    if (quantidade > quantidadePista) {
        alert('Quantidade indisponível para tipo pista')
    } else {
        if (quantidade <= 0) {
            alert('Número indisponível');
        } else {
            quantidadePista -= quantidade;
            (document.getElementById('qtd-pista').textContent) = quantidadePista;
            alert('Compra realizada com sucesso!');
        }
    }
}

function comprarSuperior(quantidade) {
    let quantidadeSuperior = parseInt(document.getElementById('qtd-superior').textContent);

    if (quantidade > quantidadeSuperior) {
        alert('Quantidade indisponível para tipo superior')
    } else {
        if (quantidade <= 0) {
            alert('Número indisponível');
        } else {
            quantidadeSuperior -= quantidade;
            (document.getElementById('qtd-superior').textContent) = quantidadeSuperior;
            alert('Compra realizada com sucesso!');
        }
    }
}

function comprarInferior(quantidade) {
    let quantidadeInferior = parseInt(document.getElementById('qtd-inferior').textContent);

    if (quantidade > quantidadeInferior) {
        alert('Quantidade indisponível para tipo superior')
    } else {
        if (quantidade <= 0) {
            alert('Número indisponível');
        } else {
            quantidadeInferior -= quantidade;
            (document.getElementById('qtd-inferior').textContent) = quantidadeInferior;
            alert('Compra realizada com sucesso!');
        }
    }
}