function playStop(){
    let mudeItens = document.querySelector('#stop');
    if (mudeItens.className == 'fa-solid fa-pause') {
        
        mudeItens.className='fa-solid fa-play';
    } 
    else if(mudeItens.className == 'fa-solid fa-play') {
        mudeItens.className = 'fa-solid fa-pause';
    }
    console.log(mudeItens.className);
}
function loveMusic(){
    let mudeItens = document.querySelector('#love');
    if (mudeItens.className == 'fa-regular fa-heart') {
        
        mudeItens.className='fa-solid fa-heart';
        mudeItens.textContent="love";
    } 
    else if(mudeItens.className == 'fa-solid fa-heart') {
        mudeItens.className = 'fa-regular fa-heart';
        mudeItens.textContent="";

    }
    console.log(mudeItens.className);
}
function modalNewR(){
    let openAndClose = document.querySelector('.modalCont');
    let textComp = document.querySelector('.open-modal');
    if (textComp.textContent == 'View More') {
        textComp.textContent = 'View Less';
        openAndClose.style.display = 'block';
    } 
    else if(textComp.textContent == 'View Less') {
        openAndClose.style.display = 'none';
        textComp.textContent = 'View More';

    }
    console.log(textComp.textContent);
}

//     const arrayComp = new Array('test','material');
//     let popDados = document.querySelector('#conv-modal');
//     let pushDados = document.querySelector('#middle-text').value;
//     arrayComp.push(pushDados);
//     popDados.textContent=pushDados;
//     console.log(arrayComp)
    
    
    
// }
