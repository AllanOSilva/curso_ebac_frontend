
const form = document.getElementById('form-comparar');
const containerMensagemSucesso = document.querySelector('.sucess-message');
const containerMensagemErro = document.querySelector('.error-message');

form.addEventListener('submit', function(e){
    e.preventDefault();
    const mensagemSucesso = 'O valor <b>B</b> é maior que o valor <b>A</b>';
    const mensagemErro = 'O valor <b>B</b> <b>NÃO</b> é maior que o valor <b>A</b>';
const campoA =document.getElementById('valorA');
const campoB =document.getElementById('valorB');

if (campoB.value > campoA.value){
    containerMensagemSucesso.innerHTML = mensagemSucesso;
    containerMensagemSucesso.style.display = 'block';
    containerMensagemErro.style.display = 'none';  
    campoA.value='';
    campoB.value='';
} else{
    containerMensagemErro.innerHTML = mensagemErro;
    containerMensagemErro.style.display = 'block';
    containerMensagemSucesso.style.display = 'none'; 
    campoA.value='';
    campoB.value='';
};

});