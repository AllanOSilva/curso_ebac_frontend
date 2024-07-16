document.addEventListener('DOMContentLoaded', function(){
    const seuNome = document.querySelector('#nome');
    const nomeUsuraio = document.querySelector('#usuario');
    const seuAvatar = document.querySelector('#avatar');
    const repositorios = document.querySelector('#reposit');
    const seguidor = document.querySelector('#seguidores');
    const seguir = document.querySelector('#seguindo');
    const linkar = document.querySelector('#link');

    fetch ('https://api.github.com/users/allanosilva')
    .then(function(dados){
        return dados.json();
    })
    .then(function(json){
        seuNome.innerText = json.name;
        nomeUsuraio.innerText = json.login;
        seuAvatar.src = json.avatar_url;
        seguidor.innerText = json.following;
        seguir.innerText = json.followers;
        repositorios.innerText = json.public_repos;
        linkar.href = json.html_url
    })
})