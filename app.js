/*let amigos = [];
amigos.push('Ana');
amigos.push('Carlos');
amigos.push('Beatriz');
amigos.forEach((amigo) => {
    console.log(amigo);
});
const indice = Math.floor(Math.random() * amigos.length);
const sorteado = amigos[indice];
console.log(sorteado);*/

let amigos = [];

function adicionarAmigo() {
    let input = document.getElementById('amigo');
    let nome = input.value.trim();
    if (nome) {
        amigos.push(nome);
        atualizarLista();
        input.value = '';
        input.focus();
    }
}

function atualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    amigos.forEach((amigo) => {
        let li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
    if (amigos.length === 0) {
        resultado.innerHTML = '<li>Nenhum nome foi adicionado para sortear. Vamos digite algum nome.</li>';
        return;
    }
    let indice = Math.floor(Math.random() * amigos.length);
    let sorteado = amigos[indice];
    resultado.innerHTML = `<li>Nome sorteado: <strong>${sorteado}</strong></li>`;
}