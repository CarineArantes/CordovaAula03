document.addEventListener('deviceready', onDeviceReady, false);




function limparPost(){
    const titleElement = document.getElementById('titulo');
    const bodyElement = document.getElementById('corpo');
    const input = document.getElementById('campoNumero');
    titleElement.textContent = "Não há Post";
    bodyElement.textContent = " ";
    input.placeholder = "Numero do Post"
    input.value = ""
}


function onDeviceReady() {
    const btn = document.getElementById('btnBuscaPost');    
    btn.addEventListener('click', () =>{
        const input = document.getElementById('campoNumero');
        const idPost =  input.value
        buscarPost(idPost);
    });

    const cardPost = document.getElementById('card-post'); 
    cardPost.addEventListener('scroll', () => {
        // Verifica se o scroll chegou ao final
        var limpar = false
        if (!limpar && cardPost.scrollTop + cardPost.clientHeight >= cardPost.scrollHeight) {
            limpar = true     
            return       
        }
        if(cardPost.scrollTop == 0){
            limpar = false
            limparPost()
        }
    });;

}


function carregarPost(post) {
    const titleElement = document.getElementById('titulo');
    const bodyElement = document.getElementById('corpo');
    if(!post){
        titleElement.textContent = "Post Não encontrado !";
        bodyElement.textContent = "";
        return
    }
    titleElement.textContent = post.title;
    bodyElement.textContent = post.body + post.body + post.body + post.body + post.body + post.body + post.body + post.body + post.body + post.body + post.body;
}

function buscarPost(idPost) {
    const url = `https://jsonplaceholder.typicode.com/posts/${idPost}`;

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
        
    })
    .then(data => {
        carregarPost(data);
    })
    .catch(error => {
        carregarPost(false);
        console.error('Houve um problema com a requisição:', error);
    });
    
}
