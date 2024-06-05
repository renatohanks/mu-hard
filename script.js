function copy(){
    document.querySelector(".text").innerHTML = "Copiado!";
}

function copy2(){
    document.querySelector(".text2").innerHTML = "Copiado!";
}

function copy3(){
    document.querySelector(".text3").innerHTML = "Copiado!";
}

function copy4(){
    document.querySelector(".text4").innerHTML = "Copiado!";
}
function copy5(){
    document.querySelector(".text5").innerHTML = "Copiado!";
}

function abrirModal(){
    const modal = document.querySelector('.janela-modal');
    modal.classList.add('abrir');
    modal.addEventListener('click', (e) =>{
        if(e.target.id == 'fechar' || e.target.id == 'janela-modal'){
            modal.classList.remove('abrir');
        }
    })
};

function abrirModal2(){
    const modal = document.querySelector('.janela-modal2');
    modal.classList.add('abrir');
    modal.addEventListener('click', (e) =>{
        if(e.target.id == 'fechar' || e.target.id == 'janela-modal2'){
            modal.classList.remove('abrir');
        }
    })
};

function abrirModal3(){
    const modal = document.querySelector('.janela-modal3');
    modal.classList.add('abrir');
    modal.addEventListener('click', (e) =>{
        if(e.target.id == 'fechar' || e.target.id == 'janela-modal3'){
            modal.classList.remove('abrir');
        }
    })
};
