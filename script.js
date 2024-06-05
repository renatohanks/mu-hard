function copy(){
    var txt = document.querySelector(".listacode");
    var text = document.querySelector(".text");
    document.querySelector(".text").innerHTML = "Copiado!";
    txt.style.background = "grey";
    text.style.color = "rgba(228, 224, 34, 0.829)";
    
}

function copy2(){
    var txt = document.querySelector(".listacode2");
    var text2 = document.querySelector(".text2");
    document.querySelector(".text2").innerHTML = "Copiado!";
    txt.style.background = "grey";
    text2.style.color = "rgba(228, 224, 34, 0.829)";
}

function copy3(){
    var txt = document.querySelector(".listacode3");
    var text3 = document.querySelector(".text3");
    document.querySelector(".text3").innerHTML = "Copiado!";
    txt.style.background = "grey";
    text3.style.color = "rgba(228, 224, 34, 0.829)";
}

function copy4(){
    var txt = document.querySelector(".listacode4");
    var text4 = document.querySelector(".text4");
    document.querySelector(".text4").innerHTML = "Copiado!";
    txt.style.background = "grey";
    text4.style.color = "rgba(228, 224, 34, 0.829)";
}
function copy5(){
    var txt = document.querySelector(".listacode5");
    var text5 = document.querySelector(".text5");
    document.querySelector(".text5").innerHTML = "Copiado!";
    txt.style.background = "grey";
    text5.style.color = "rgba(228, 224, 34, 0.829)";
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
