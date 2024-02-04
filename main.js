$(document).ready(function(){
  $('#carrocel-imagens').slick({autoplay: true});

  $('.menu-hamburger').click(function(){
  $('nav').slideToggle();
  
  })
  $('#contato').click(function(){
    $('html, body').animate({
      scrollTop: $('#contato').offset().top
    },1000);
  })

  $('#telefone').mask('(00) 00000-0000',{
      placeholder:'(__) _____-____'
  })
  $('#cep').mask('00000-000',{
    placeholder:'_____-___'
})
$('#cpf').mask('000.000.000-00',{
    placeholder:'000.000.000-00'
})
  $('form').validate({
      rules: {
          nome: {
              required: true
          },
          cep: {
              required: true, 
          },
          telefone: {
            required: true, 
        },
          cpf: {
              required: true
          },
          
         
      },
      messages: {
          nome: 'Por favor, insira o seu nome',
          telefone: 'Esse campo é obrigatório',
          cep: 'Esse campo é obrigatório',
          cpf: 'Esse campo é obrigatório'
      },
      submitHandler: function(form){
          alert('cadastro efetuado')
      },
      invalidHandler: function(evento, validador){
          let camposIncorretos = validador.numberOfInvalids();
          if (camposIncorretos) {
              alert(`Existem ${camposIncorretos} campos incorretos`)
          }
      }
  })
  
})
  