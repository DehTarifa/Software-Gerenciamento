// Tela de login button - Validação de dados

const InputEmailLogin = document.getElementById('input-login-email')
const InputPasswordLogin = document.getElementById('input-login-password')

function ValidarBtnlogin() {
  if (InputEmailLogin.value == 'adimin' && InputPasswordLogin.value == '123') {
    window.location = 'option.html'
  } else {
    alert(' senha incorreta ')
  }
}

// Tela de login button - Validação de dados
