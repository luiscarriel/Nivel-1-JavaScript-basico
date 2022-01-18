function ativar() {
    let n1 = Number(prompt("Digite um Número"));
    let n2 = Number(prompt("Digite outro Número"));
    soma = n1 + n2;

    let res = document.querySelector("section#res");
    res.innerText = `A soma entre ${n1} e ${n2} é igual a ${soma}!`
};