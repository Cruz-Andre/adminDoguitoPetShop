import { clienteService } from "../service/cliente-service.js"

//função assincrona auto executável.
(async () => {

  const pegaURL = new URL(window.location)
  console.log(pegaURL)

  const pegaID = pegaURL.searchParams.get('id')
  console.log(pegaID)

  const inputNome = document.querySelector('[data-nome]')
  const inputEmail = document.querySelector('[data-email]')

  try {
    const dados = await clienteService.buscaClienteEspecifico(pegaID)
    inputNome.value = dados.nome
    inputEmail.value = dados.email   
  } 
  catch(error) {
    console.log(error)
    // window.location.href = '../telas/erro.html'
  }

  const formulario = document.querySelector('[data-form]')

  formulario.addEventListener('submit', async evento => {

    evento.preventDefault()
    try {
      await clienteService.atualizaCliente(pegaID, inputNome.value, inputEmail.value)
      window.location.href = "../telas/edicao_concluida.html"
    }
    catch(error) {
      console.log(error)
      // window.location.href = '../telas/erro.html'
    }
  })

})()