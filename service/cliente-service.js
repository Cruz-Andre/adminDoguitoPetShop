// usando fetch
const listaClientes = async () => {
  const resposta = await fetch(`http://localhost:3000/profile`)
  if (resposta.ok) {
    return resposta.json()
  }
  throw new Error('Não foi possível listar os clientes')
}

// enviar infos para o servidor
const criaCliente = async (nome, email) => {
  const resposta = await fetch(`http://localhost:3000/profile`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      nome: nome,
      email: email
    })
  })
  if(resposta.ok) {
    return resposta.body
  }
  throw new Error('Não foi possível criar um cliente')
}

const removeCliente = async (id) => {
  const resposta = await fetch(`http://localhost:3000/profile/${id}`, {
    method: 'DELETE'
  })
  if (!resposta.ok) {
    throw new Error('Não foi possível remover um cliente')
  }
}

const buscaClienteEspecifico = async (id) => {
  const resposta = await fetch(`http://localhost:3000/profile/${id}`)
  if (resposta.ok) {
    return resposta.json()
  }
  throw new Error('Não foi possível buscar o cliente específico')
}

const atualizaCliente = async (id, nome, email) => {
  const resposta = await fetch(`http://localhost:3000/profile/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      nome: nome,
      email: email
    })
  })
  if (resposta.ok) {
    return resposta.json()
  }
  throw new Error('Não foi possível atualizar o cliente')
}

export const clienteService = {
  listaClientes,
  criaCliente,
  removeCliente,
  buscaClienteEspecifico,
  atualizaCliente
}

/* Aula 1 - Atividades 01 a 11 chamando dados de api externa com http e XML
const listaClientes = () => {
  const promise = new Promise((resolve, reject) => {

    const http = new XMLHttpRequest()

    http.open('GET', 'http://localhost:3000/profile')

    http.onload = () => {
      if (http.status >= 400) {
        reject(JSON.parse(http.response))
      } else {
        resolve(JSON.parse(http.response))
      }
    }

    http.send()

  })
  console.log(promise)
  return promise
}
*/