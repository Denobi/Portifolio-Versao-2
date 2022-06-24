'use strict';
// AQUI È O BANCO DE DADOS DO PROJETO
// let banco = [
//     {'tarefa':'Estudar', 'status':''},
//     {'tarefa':'Netflix', 'status':'Checked'}
    
// ];

const getBanco = () => JSON.parse( localStorage.getItem('todoList')) ?? [];
const setBanco = (banco) => localStorage.setItem('todoList',JSON.stringify(banco));

// - AQUI ELE ESTA CRIANDO O ITEM QUE È MOSTRADO NA PAGINA INICIAL DO PROJETO -----------------------
const criarItem = (tarefa,status,indice)=>{
    const item= document.createElement('label');
    item.classList.add('todo__item');
    item.innerHTML=`
    <input type="checkbox" ${status} data-indice = ${indice}>
         <div>${tarefa}</div>
         <input type="button" value="X" data-indice = ${indice}>
    `;
    document.getElementById('todoList').appendChild(item);
}

//  - AQUI ELE ESTA LIMPANDO TODOS OS ITENS REPETIDO COMECANDO DE TRAS PRA FRENTE -----------------------
const limparTarefas = ()=>{
    const todoList = document.getElementById('todoList');
    while(todoList.firstChild){
        todoList.removeChild(todoList.lastChild);
    }
}

//  - AQUI ELE ESTA PEGANDO E RENDERIZANDO A TELA OU SEJA COLOCANDO OS ITENS DO BANCO -----------------------
const renderTela = ()=>{
    limparTarefas();
    const banco = getBanco();
    banco.forEach((item ,indice) => criarItem(item.tarefa,item.status,indice ));

}
const inserirItem = (evento)=>{
    const tecla = evento.key;
    const texto = evento.target.value;

    if (tecla === 'Enter') {
        const banco = getBanco();
        banco.push({'tarefa':texto , 'status':''});
        setBanco(banco);
        renderTela();
        evento.target.value="";

    }
}
const removerItem=(indice)=>{
    const banco = getBanco();
    banco.splice(indice,1);
    setBanco(banco);
    renderTela();
}
const atualizarItem = (indice)=>{
    const banco = getBanco();
    // TENARIO VERIFICA E MODIFICA = Se estiver clicado vira vario senao checked
    banco[indice].status= banco[indice].status ===""? 'checked':'';
    setBanco(banco);

    renderTela();
}
const clickItem = (evento) =>{
    const elemento = evento.target;
    if (elemento.type === "button") {
        const indice = elemento.dataset.indice;
        removerItem(indice)
    }else if(elemento.type === 'checkbox'){
        const indice = elemento.dataset.indice;
        atualizarItem(indice)
    }
}

document.getElementById('newItem').addEventListener('keypress',inserirItem);
document.getElementById('todoList').addEventListener('click', clickItem);
renderTela();
