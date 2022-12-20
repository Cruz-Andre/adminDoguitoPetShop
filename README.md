# Site Admin da Doguito PetShop
##  Alura curso: JavaScript na web - CRUD com JavaScript assíncrono
- JavaScipt
- json server
- XMLHttp
- Método Fetch
- async await
- try catch

## TODO
- Ajustar a responsividade mobile

## Json Server
abra o repositório no vscode.
No terminal digite:
```
npm install
```
rodar o json server: 
```
json-server --watch db.json
```
Ou (se o json-server não foi instalado globalmente)
```
npx json-server --watch db.json
```

Se você tiver a extensão Live Server no VScode não é necessário o passo abaixo: <br>
Rodar: 
```
browser-sync start --server --file . --host --port 5000 --startPath admin/telas/lista_cliente.html
```
