import { clienteService } from "../service/cliente-service.js"

const criaNovaLinha = (nome, email, id) => {
  const linhaNovoCliente = document.createElement('tr')
  const conteudo = `
    <td class="td" data-td>${nome}</td>
    <td>${email}</td>
    <td>
      <ul class="tabela__botoes-controle">
          <li>
            <a href="../telas/edita_cliente.html?id=${id}" class="botao-simples botao-simples--editar">Editar</a>
          </li>
          <li>
            <button class="botao-simples botao-simples--excluir" type="button">Excluir</button>
          </li>
      </ul>
    </td>
  `
  linhaNovoCliente.innerHTML = conteudo
  // criando um data atributo para receber o id passado como atributo.
  linhaNovoCliente.dataset.id = id
  console.log(linhaNovoCliente)
  return linhaNovoCliente
}

const tabela = document.querySelector('[data-tabela]')

// para excluir um cliente
tabela.addEventListener('click', async (evento) => {
  let ehBotaoDeletar = evento.target.className === "botao-simples botao-simples--excluir"
  console.log(ehBotaoDeletar)
  if (ehBotaoDeletar) {
    try {
      const linhaCliente = evento.target.closest('[data-id]')
      let id = linhaCliente.dataset.id
      await clienteService.removeCliente(id)
      linhaCliente.remove()
    }
    catch(error) {
      console.log(error)
      // window.location.href = '../telas/erro.html'
    }
  }
})

//mostra os clientes na tela
const mostraClientes = async () => {
  try {
    const clientes = await clienteService.listaClientes()
    
    console.log(clientes)
  
    clientes.forEach(element => {
      tabela.appendChild(criaNovaLinha(element.nome, element.email, element.id))
    })
  }
  catch(error) {
    console.log(error)
    // window.location.href = '../telas/erro.html'
  }
}

mostraClientes()