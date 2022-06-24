var dias = 31;
// UMA ARRAY
const meses = [
    {id:1, mes:'Janeiro'},
    {id:2,mes:"Fevereiro"},
    {id:3,mes:"Março"},
    {id:4,mes:"Abril"},
    {id:5,mes:"Maio"},
    {id:6,mes:"Junho"},
    {id:7,mes:"Julho"},
    {id:8,mes:"Agosto"},
    {id:9,mes:"Setembro"},
    {id:10,mes:"Outubro"},
    {id:11,mes:"Novembro"},
    {id:12,mes:"Dezembro"}

]
// UMA ARRAY
const materia = [
    {
        id:1,
        title:'STF vai utilizar nova inteligência artificial para classificar processos.',
        meterial:'por meio de redes neurais com comparação semântica, a “RAFA 2030” irá auxiliar magistrados e servidores na identificação dos objetivos de desenvolvimento sustentável da Agenda 2030 da ONU em textos de acórdãos e petições iniciais em processos. O STF é o primeiro Judiciário do mundo a utilizar essa nova classificação. O Supremo também conta com o robô Victor, que analisa recursos extraordinários recebidos de todo o País. As informações são do portal de notícias do STF.',
        img:'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
        id:2,
        title:'China irá construir represa gigante impressa em 3D.',
        meterial:'a estrutura de 180 metros de altura será erguida por robôs, fatia por fatia. Além disso, ao redor do projeto, serão utilizadas escavadeiras, caminhões, tratores e pavimentadoras controladas por inteligência artificial – nenhum trabalhador humano participará da construção. A barragem deve ficar pronta em apenas dois anos e será a estrutura impressa em 3D mais alta do mundo. As informações são do site Popular Mechanics.',
        img:'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
        id:3,
        title:'TIM instala antenas 4G camufladas em São Paulo.',
        meterial:'os equipamentos estão sendo instalados em abrigos de ônibus, postes e semáforos, causando pouco impacto visual. O projeto ajuda a contornar barreiras físicas, facilitando a propagação do sinal de celular – segundo a TIM, o sistema aumenta em 50% a cobertura do 4G, melhorando velocidades de download e upload. As informações são do site Mobile Time.',
        img:'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
        id:4,
        title:'Ministério da Saúde identifica nova tentativa de invasão a plataformas do SUS.',
        meterial:'por segurança, os acessos ao ConecteSUS, e-SUS Notifica e SI-PNI foram suspensos temporariamente até que uma análise seja realizada. Dados e informações de usuários não foram impactados. As informações são da Agência Brasil.',
        img:'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
        id:5,
        title:'Petrobras lança programa para financiar startups de tecnologias brasileiras.',
        meterial:'são trinta desafios distribuídos entre robótica, redução de carbono, armazenamento e geração de energia, corrosão, modelagem geológica e tecnologias de inspeção. As startups selecionadas durante o “Programa Petrobras Conexões para Inovação” receberão investimentos e mentoria, tornando-se fornecedoras regulares da companhia, com potencial de escalar seus negócios internacionalmente. As informações são do site Convergência Digital.',
        img:'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
        id:6,
        title:'São Paulo planeja transformar distrito de tecnologia em “Vale do Silício”.',
        meterial:'o governo estadual abriu uma consulta pública para avaliar a criação do Parque Tecnológico do Jaguaré (CITI II), com a concessão de um espaço de 87 mil m2 ao lado da USP. A região deverá incorporar o conceito de “cidade de 15 minutos”, com a maioria das necessidades diárias atendida a pé ou de bicicleta. As informações são do site Mobile Time e Convergência Digital.',
        img:'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
        id:7,
        title:'Pesquisadores de segurança conseguem roubar veículos da Tesla.',
        meterial:'o ataque intercepta e manipula a comunicação BLE (Bluetooth Low Energy) entre o chaveiro que destrava e opera o veículo em apenas dez segundos – a tecnologia também é utilizada em uma ampla gama de produtos eletrônicos como notebooks, smartphones e fechaduras inteligentes. A Tesla sugere que motoristas ativem uma senha para desbloqueio do recurso de direção – mesmo que o carro seja invadido, pelo menos criminosos não poderão fugir com ele. As informações são do site Bleeping Computer.',
        img:'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
        id:8,
        title:'Google Cloud apresenta novo serviço para evitar ataques de supply chain.',
        meterial:'inicialmente o “Assured Open Source Software” será um registro para distribuição de módulos Java e Python – as duas linguagens são priorizadas em fluxos de trabalho dentro do próprio Google e possuem “perfis de alto risco”. Todos os módulos passarão por revisões de segurança regulares e serão assinados digitalmente. Novos módulos e linguagens serão adicionadas a cada trimestre, priorizando solicitações de clientes do Google Cloud. As informações são do site The Register.',
        img:'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    }
]
// var memId;
iniciarSite = () =>{
    var elementDia = document.getElementById('dia');
    var elementMes = document.getElementById('mes');
    var elementMaterial = document.getElementById('conteudosDatas');
// CRIA OS BOTOES DE DIA
    for (var i = 0; i <= dias; i++) {
        
            elementDia.innerHTML += `
                <li ><a href="#" onclick="focusItemsDias(this);" id="${i}">${i}</a></li>
            `;
       
        
    }
// CRIA OS BOTOES DE MES

    meses.map((val)=>{
        
            elementMes.innerHTML += `
            <li><a href="#" onclick="focusItemsMes(this);" id="${val.mes}">${val.mes}</a></li>
            `;
      
        
    })
// CRIA OS AS MATERIAS

    materia.map((val)=>{
        elementMaterial.innerHTML+=`
                <div class="first-item" id="${val.id}" >
                            <div class="img">
                                <h1>${val.id}</h1>
                                <img src="${val.img}" alt="">
                            </div>
                            <div class="material">
                                <a href="#outdoor" onclick="openCont(this.id);" id="${val.id}"><h1>Veja Mais</h1></a>
                                <h1>${val.title}</h1>
                                <p>${val.meterial}</p>
                            </div>
                        </div>
        `;
    })
}

// SELECIONA OS BOTOES DE DIA   
function focusItemsDias(tag){
    var elementDia = document.getElementById('dia');
    var tag_a = elementDia.getElementsByTagName('a');
    for (i=0; i<tag_a.length; i++ ){
            tag_a[i].style.border = "";
            tag_a[i].style.borderRadius = "";
            tag_a[i].style.padding="";
        }{
            tag.style.border = "2px #4B6587 solid";
            tag.style.borderRadius = "30px";
            tag.style.padding="5px";
        }

}
// SELECIONA OS BOTOES DE MES
function focusItemsMes(tag){
    var elementMes = document.getElementById('mes');
        
        
        
         var tag_a = elementMes.getElementsByTagName('a');
        for (i=0; i<tag_a.length; i++ ){
                tag_a[i].style.border = "";
                tag_a[i].style.borderRadius = "";
                tag_a[i].style.padding="";
                
            }{
                tag.style.border = "2px #4B6587 solid";
                tag.style.borderRadius = "30px";
                tag.style.padding="5px";
            }

}

// MOSTRA TODA A MATERIA
function openCont(fag){
    
    // var tag_div = document.getElementsByClassName('first-item');
    var tag_out = document.getElementById('outdoor');
    let fi = fag-1;

    tag_out.style.display="block";
    tag_out.innerHTML=`<div class="first-item2" id="${materia[fi].id}" >
                <div class="img">
                    <h1>${materia[fi].id}</h1>
                    <img src="${materia[fi].img}" alt="">
                    <h3>${materia[fi].title}</h3>
                </div>
                <div class="material">
                    <a href="#" onclick="closeCont()" id="${materia[fi].id}"><h1>Veja Menos</h1></a>
                    <p>${materia[fi].meterial}</p>
                </div>
            </div>
            `;
        

}
// ESCONDE TODA A MATERIA
function closeCont(){
    var tag_out = document.getElementById('outdoor');

    tag_out.style.display="none";
}