
$("#btn-cdst").click(function(e){
    e.preventDefault();
    //condição para verificar se o imput está vazio para adicionar linha
    if($("#nome-tarefa").val()){
       const nome = $("#nome-tarefa").val();
        $("#nome-tarefa").val('');
        $(".menu").append(`<li class="item">${nome}</li>`);
    }else{
        alert("Input de itens vazia");
    }
})
//função para riscar li
$('ul').on('click', 'li', function(){
    $('li').css('text-decoration', 'line-through');
})


