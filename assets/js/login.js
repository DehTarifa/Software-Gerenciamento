  // Variavel tela de login, evento 'submit' dispara função.
  //--------------------------------------------------------

const input_login_email = document.getElementById('input-login-email')
const input_login_password = document.getElementById('input-login-password')

const form_login = document.querySelector('#form-login')

form_login.addEventListener('submit', e => {
  e.preventDefault()

  ValidarBtnlogin()
})

  // Tela de login button - Validação de dados
  //--------------------------------------------------------

function ValidarBtnlogin() {
  // Variavel da tela de login 
  //--------------------------------------------------------
  const loginEmailValue = input_login_email.value.trim()
  const loginPasswordValue = input_login_password.value.trim()

  const containerEmail = document.querySelector('#container-login-email')
  const containerPassword = document.querySelector('#container-login-password')

  const spanLoginEmail = document.querySelector('.span-login-email')
  const spanLoginPassword = document.querySelector('.span-login-password')

  // Validação dos inputs 
  //--------------------------------------------------------
  if (loginEmailValue === '' && loginPasswordValue === '') {

    containerEmail.classList.add('incorrect')
    containerPassword.classList.add('incorrect')

    spanLoginEmail.innerHTML = 'preencha os campos vazios'
    spanLoginPassword.innerHTML = 'preencha os campos vazios'

    return
  } else if (loginEmailValue === 'adimim' && loginPasswordValue === '123') {

    window.location = 'assets/html/option.html'

    return
  } else {

    containerEmail.classList.add('incorrect')
    containerPassword.classList.add('incorrect')

    spanLoginEmail.innerHTML = 'senha ou email incorretos'
    spanLoginPassword.innerHTML = 'senha ou email incorretos'
  }
}


