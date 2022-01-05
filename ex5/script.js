function calcular() {
    let n1 = Number(window.prompt('Digite um número: '))
    let res = document.querySelector('section#res')

    res.innerHTML = `<p>O dobro de ${n1} é ${n1 * 2} e a metade é ${n1 / 2}!</p>`
}

