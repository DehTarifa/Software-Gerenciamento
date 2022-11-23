// Tela de login button - Validação de dados

const inputEmail = document.getElementById('input-login-email')
const inputPassword = document.getElementById('input-login-password')

const form = document.querySelector('#form-login')

form.addEventListener('submit', e => {
  e.preventDefault()

  ValidarBtnlogin()
})

function ValidarBtnlogin() {
  const emailvalue = inputEmail.value.trim()
  const passwordvalue = inputPassword.value.trim()

  const containerEmail = document.querySelector('#container-login-email')
  const containerPassword = document.querySelector('#container-login-password')
  const spanLoginEmail = document.querySelector('.span-login-email')
  const spanLoginPassword = document.querySelector('.span-login-password')

  if (emailvalue === '' && passwordvalue === '') {

    containerEmail.classList.add('incorrect')
    containerPassword.classList.add('incorrect')

    spanLoginEmail.innerHTML = 'preencha os campos vazios'
    spanLoginPassword.innerHTML = 'preencha os campos vazios'

    return
  } else if (emailvalue === 'adimim' && passwordvalue === '123') {

    window.location = 'assets/html/option.html'

    return

  } else {

    containerEmail.classList.add('incorrect')
    containerPassword.classList.add('incorrect')

    spanLoginEmail.innerHTML = 'senha ou email incorretos'
    spanLoginPassword.innerHTML = 'senha ou email incorretos'
    
  }
}

// Tela de login button - Validação de dados
