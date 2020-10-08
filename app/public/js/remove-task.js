let tabelaTasks = document.querySelector('#tasks');
tabelaTasks.addEventListener('click', (evento) => {
    let elementoClicado = evento.target;

    if (elementoClicado.dataset.type == 'remocao') {
        let taskId = elementoClicado.dataset.ref;
        fetch(`http://localhost:3000/tasks/${taskId}`, { method: 'DELETE' })
            .then(resposta => {

                let tr = elementoClicado.closest(`#task_${taskId}`);
                tr.remove();
            })
            .catch(erro => console.log(erro));
    }
});