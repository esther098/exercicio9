function mudar() {
    const corAtual = document.body.style.backgroundColor;

    if (corAtual === 'red') {
        document.body.style.backgroundColor = 'blue';
    } else {
        document.body.style.backgroundColor = 'red';
    }
}