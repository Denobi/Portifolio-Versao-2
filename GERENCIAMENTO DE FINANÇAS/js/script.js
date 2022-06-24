//CHAMA O OBJETO AONDE MOSTRA AS TRANSAÇÔES
const transactionUl = document.getElementById('transactions');

//CHAMA A LABEL DE RECEITA
const incomeDisplay = document.querySelector('#money-plus');

//CHAMA A LABEL DE DESPESAS
const expenseDisplay = document.querySelector('#money-minus');

//CHAMA A LABEL DE SALDO TOTAL
const balanceDisplay = document.querySelector('#balance');

//CHAMA FORM PARA PEGAR OS VALORES NOVOS
const form = document.querySelector('#form');

//SELECIONA DENTRO DO FORM O INPUT EXATO
const inputTransactionName = document.querySelector('#text');
const inputTransactionAmount = document.querySelector('#amount');


//ARRAY/BANCO DE DADOS LOCAL PARA TESTE
const bdTR =[
    {id:1, name: 'Bolo de Chocolate', amount: -20},
    {id:2, name: 'Salario', amount: 300},
    {id:3, name: 'Torta de frango', amount: -10},
    {id:4, name: 'Violão', amount: 150}
]

//PUXA OS DADOS DO LS E CRIA UM ARRAY VAZIO CASO NÂO TENHA NADA
let transactions = JSON.parse( localStorage.getItem('transactions')) ?? [];
//REMOVE O ITEM AO CLICAR NO BOTAO
const removeTransaction = ID =>{
    transactions = transactions.filter(transaction => transaction.id !== ID);
    updateLocalStorage();
    init()
}
//,JSON.stringify(bdTR)

//CRIA O OBJETO QUE O INIT PASSA PARA A TELA
const addTrasactionIntoDOM = transaction => {
    const operator = transaction.amount<0? '-' : '+';
    const cssClass = transaction.amount<0? 'minus' : 'plus';
    const amountWithoutOperation = Math.abs(transaction.amount);
    const li = document.createElement('li');
    li.classList.add(cssClass);
    li.innerHTML=`

        ${transaction.name} 
        <span>${operator} R$ ${amountWithoutOperation}</span>
        <button class="delete-btn" onClick="removeTransaction(${transaction.id})">x</button>
    `

    transactionUl.append(li);
  
}

//CRIA OS OBJETOS COM OS VALORES DE TOTAL,GASTOS E GANHOS
const updateBalanceValues = () => {

    //FAZ UM NOVO ARRAY SOMENTE COM OS VALORES DE AMOUNT
    const transactionsAmounts = transactions
        .map(transaction => transaction.amount);
  
    //FAZ A SOMA DE TODOS OS VALORES DO ARRAY JÀ SUBTRAINDO OS GASTOS
    const total = transactionsAmounts
        .reduce((accumulator, transaction) => accumulator + transaction, 0)
        .toFixed(2);

    //SEPARA OS VALORES POSITIVOS
    const income = transactionsAmounts
        .filter(value => value > 0) 
        .reduce((accumulator,value)=>accumulator + value,0 )
        .toFixed(2);

    //SEPARA OS VALORES NEGATIVOS
    const expense = Math.abs(transactionsAmounts
        .filter(value => value < 0) 
        .reduce((accumulator,value)=>accumulator + value,0 ))
        .toFixed(2);

        
        balanceDisplay.textContent=`R$ ${total}`;
        incomeDisplay.textContent=`R$ ${income}`;
        expenseDisplay.textContent=`R$ ${expense}`;
        
        
}

// È A FUNC INIT AONDE GERA OS CONETUDOS NA TELA
const init = () =>{
    transactionUl.innerHTML='';
    transactions.forEach(addTrasactionIntoDOM);
    updateBalanceValues();

}

//CHAMA A FUNC INIT
init();

//GERA OS UPDATES NO SISTEMA/LOCALSTORAGE
const updateLocalStorage = () =>{
    localStorage.setItem('transactions',JSON.stringify(transactions))
}

//FUNC PAR AGERAR NOVOS ITENS DE UM ARRAY
const addTrasactionArray = (transactionName,transactionAmount) =>{
    const transaction = {
        id:generateId(), 
        name: transactionName, 
        amount: Number(transactionAmount)
    };
    transactions.push(transaction)
}

const cleanInputs = () => {
    inputTransactionAmount.value='';
    inputTransactionName.value='';
}
//FAZ UMA VERIIFCACÇAÔ E ENVIA O NOVO ITEM PARA O LS E 
const handleFromSubmit = event=>{
    //ELEIMINA O EVENTO PADRAO DO OBJECT
    event.preventDefault();

    //CONST QUE RETIRA OS ESPAÇOS VAZIOS
    const transactionName =inputTransactionName.value.trim();
    const transactionAmount =inputTransactionAmount.value.trim();

    //EXECUTA A VERIFICAÇÂO DOS CAMPOS
    const inputEmpty = transactionName === ''||transactionAmount === '';

    if (inputEmpty) {
        alert('Por favor, preencha ambos os campos tanto o nome quanto o valor da transação');
        return
    }
    
    
    addTrasactionArray(transactionName,transactionAmount)
    init();
    updateLocalStorage();
    cleanInputs();
}

//GERA OS ID DE FORMA ALEATORIA
const generateId = () =>Math.round(Math.random()*1000);

//CRIA/ADICIONA O EVENTO NO OBJETO DO DOM
form.addEventListener('submit',handleFromSubmit);
/*TRASH COMENTS CODES
    // console.log({incomeDisplay,expenseDisplay,})

    // console.log(income,expense)

    // updateBalanceValues()

    // <li class="minus"></li>
    
    // console.log({incomeDisplay,expenseDisplay,balanceDisplay})
    
    // console.log(li);

*/