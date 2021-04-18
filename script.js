//menu hamburguer
const hamburguerIcon = document.querySelector('#menu-hamburguer')
const headerRegistration = document.querySelector('.header-registration')
const nav = document.querySelector('.nav')
const linksNav = document.querySelectorAll('.link a')
const details = document.querySelectorAll('.details')

function handleHamburguer(e) {

    e.target.classList.toggle('active')

    if(e.target.classList.contains('active'))  {
        e.target.setAttribute('src', '/images/icon-close.svg')

        headerApresentation.style.display = 'none'
        headerRegistration.style.display = 'none'

        nav.classList.add('active')

    }
    else {
        e.target.setAttribute('src', '/images/icon-hamburger.svg')

        headerApresentation.style.display = 'block'
        headerRegistration.style.display = 'block'

        nav.classList.remove('active')
    }
}

hamburguerIcon.addEventListener('click', handleHamburguer)

function handleDetailMobile(link, index) {

    switch (index) {
        case 0:
            details[0].classList.toggle('active')
            details[1].classList.remove('active')
            details[2].classList.remove('active')

            linksNav[0].classList.toggle('active')
            linksNav[1].classList.remove('active')
            linksNav[2].classList.remove('active')
            break
        case 1:
            details[0].classList.remove('active')
            details[1].classList.toggle('active')
            details[2].classList.remove('active')

            linksNav[0].classList.remove('active')
            linksNav[1].classList.toggle('active')
            linksNav[2].classList.remove('active')
            break
        case 2:
            details[0].classList.remove('active')
            details[1].classList.remove('active')
            details[2].classList.toggle('active')

            linksNav[0].classList.remove('active')
            linksNav[1].classList.remove('active')
            linksNav[2].classList.toggle('active')
            break
        default:
            break
    }
}

linksNav.forEach((link, index) => {
    link.addEventListener('click', () => {
        handleDetailMobile(link, index)
    })
})

//desktop

const editorDesktop = document.querySelector('.ilustration img')
const laptopDestop = document.querySelector('.connect-img img')
const arrows = document.querySelectorAll('.link a img')

if(window.innerWidth >= 1024) {
    arrows.forEach(arrow => {
        arrow.setAttribute('src', '/images/icon-arrow-light.svg')
    })

    editorDesktop.setAttribute('src', 'images/illustration-editor-desktop.svg')
    laptopDestop.setAttribute('src', 'images/illustration-laptop-desktop.svg')

    function handleDetailDesktop(element, index) {

        switch (index) {
            case 0:
                details[0].classList.toggle('up')
                details[1].classList.remove('up')
                details[2].classList.remove('up')
    
                linksNav[0].classList.toggle('up')
                linksNav[1].classList.remove('up')
                linksNav[2].classList.remove('up')
                break
            case 1:
                details[0].classList.remove('up')
                details[1].classList.toggle('up')
                details[2].classList.remove('up')
    
                linksNav[0].classList.remove('up')
                linksNav[1].classList.toggle('up')
                linksNav[2].classList.remove('up')
                break
            case 2:
                details[0].classList.remove('up')
                details[1].classList.remove('up')
                details[2].classList.toggle('up')
    
                linksNav[0].classList.remove('up')
                linksNav[1].classList.remove('up')
                linksNav[2].classList.toggle('up')
                break
            default:
                break
        }
    }

    linksNav.forEach((element, index) => {
        element.addEventListener('click', () => {
            handleDetailDesktop(element, index)
        })
    })
}