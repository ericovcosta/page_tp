const tp_header = document.querySelector('.top__mp_tp')
const tp_main = document.querySelector('main')

const tp_btn_back = document.querySelector('#btn_voltar')

const shadowHeader = () => {
    if (window.scrollY > tp_header.offsetHeight) {
        tp_header.classList.add('top__scroll')
    } else {
        tp_header.classList.remove('top__scroll')
    }
}

const mostra_back2home = () => {
    if (window.scrollY > 699) {
        tp_btn_back.classList.remove('hide')
    } else {
        tp_btn_back.classList.add('hide')
    }
}

const marcaMenuAtivo = () => {
    const pontoCheck = window.scrollY;
    const sessoes = document.querySelectorAll('main section')
    sessoes.forEach(sessao => {
        const sessaoTop = sessao.offsetTop;
        const sessaoHeigth = sessao.offsetHeight;
        const sessaoID = sessao.getAttribute('id');

    });
}

window.addEventListener('scroll', () => {
    shadowHeader()
    mostra_back2home()
    marcaMenuAtivo()
})
