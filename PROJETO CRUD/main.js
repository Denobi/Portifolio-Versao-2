'use strict'

const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () =>{ 
    document.getElementById('modal').classList.remove('active');
    clearFields();
}

// const tempClient = {
//     nome:'Nic',
//     email:'nic@gmail.com',
//     celular:'11940028922',
//     cidade:'São Paulo'
// }
const getLocal = () => JSON.parse( localStorage.getItem("db_client"))??[];
    
const setLocal = (dbCliente)=> localStorage.setItem("db_client",JSON.stringify(dbCliente));
// CRUD ====================> 

//CRUD = CREATE
const createClient = (client)=>{
    const dbCliente = getLocal();
    dbCliente.push (client);
    setLocal(dbCliente);
} 

//CRUD = READ
const readClient = ()=> getLocal();

//CRUD = UPDATE
const updateClient = (index,client) => {
    const dbClient =readClient();
    dbClient[index]=client;
    setLocal(dbClient);

}
//CRUD = DELET
const deletClient = (index)=> {
    const dbClient = readClient();
    dbClient.splice(index, 1);
    setLocal(dbClient);
    updateTable();
    
}
//INTERAÇAÔ COM LEYOUT
const createRow = (client,index) =>{
    const newRow = document.createElement('tr');
    newRow.innerHTML=` <td>${client.nome}</td>
                        <td>${client.email}</td>
                        <td>${client.celular}</td>
                        <td>${client.cidade}</td>
                        <td>
                            <button type="button" class="button green" data-action="edit-${index}">Editar</button>
                            <button type="button" class="button red" data-action="delete-${index}">Excluir</button>
                        </td>
    `
    document.querySelector('#tbClient>tbody').appendChild(newRow);
}
const clearTable=()=>{
    const rows = document.querySelectorAll('#tbClient>tbody tr');
    rows.forEach(row => row.parentNode.removeChild(row));
}

const updateTable = ()=>{
    const dbClient = readClient();
    clearTable();
    dbClient.forEach(createRow);
}

const isValidField = () =>{
   return document.getElementById('form').reportValidity();
}
const clearFields = () =>{
   const fields = document.querySelectorAll('.modal-field');
    fields.forEach(field=>field.value="");
    
}

const saveClient = ()=>{
    if (isValidField()) {
        const client = {
            nome:document.getElementById('nome').value,
            email:document.getElementById('email').value,
            celular:document.getElementById('celular').value,
            cidade:document.getElementById('cidade').value
        }
        const index = document.getElementById('nome').dataset.index;
        if(index ==="new"){
        createClient(client);
        updateTable();
        closeModal();
        }
        else{
            updateClient(index,client);
            updateTable();
            closeModal();
            
        }
        // console.log('CADASTRANDO CLIENTE');
    }
}

const fillFields = (client) =>{
    document.getElementById('nome').value=client.nome;
    document.getElementById('email').value=client.email;
    document.getElementById('celular').value=client.celular;
    document.getElementById('cidade').value=client.cidade;
    document.getElementById('nome').dataset.index=client.index;
}
const editClient=(index)=>{
    const client = readClient()[index];
    client.index = index
    fillFields(client,index);
    openModal()
}
const editDelet = (event) =>{
    if (event.target.type === 'button') {
        const[action,index]=event.target.dataset.action.split('-');
        if (action === 'edit') {
            // console.log('editando itens');
            editClient(index);
            
        }else{
            const client = readClient()[index];
            const resp = confirm(`Deseja realmente Excluir o cliente ${client.nome}`)
            if (resp) {
                
                deletClient(index);
            }

        }
        // console.log( action,index);
    }
}
updateTable();
// EVENTOS DAQUI PRA BAIXO
document.getElementById('cadastrarCliente').addEventListener('click', openModal);

document.getElementById('modalClose').addEventListener('click', closeModal);

document.getElementById('salvar').addEventListener('click', saveClient);
// document.getElementById('cancelar').addEventListener('click', );

document.querySelector('#tbClient>tbody').addEventListener('click', editDelet);