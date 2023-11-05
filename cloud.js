var menuItem = document.querySelectorAll('.item-menu')

function selectLink() {
    menuItem.forEach((item) =>
        item.classList.remove('ativo')
    )
    this.classList.add('ativo')
}

menuItem.forEach((item) =>
    item.addEventListener('click', selectLink)
)

function openMenu() {
    document.getElementById('navbarlateral').style.width = '84vw';
}

function fecharMenu() {
    document.getElementById('navbarlateral').style.width = '0';
}

function abrir() {
    document.getElementById('imenssagem').style.display = 'flex';
}

function fechar() {
    document.getElementById('imenssagem').style.display = 'none';
}




