const form = $('#form-contato');
const campos = $('.required');
const span = $('invalid-feedback');
const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;

// executar função quando o campo perder o foco

campos.blur(function () {

  function setError(index) {
    campos.eq(index).addClass('is-invalid');
    span.eq(index).html('Campo obrigatório');
  }

  function removeError(index) {
    campos.eq(index).removeClass('is-invalid');
    span.eq(index).html('');    
  }

  // validar o campo nome
  if ($(this).attr('id') == 'nome') {
    if ($(this).val() == '') {
      setError(0);
    } else if ($(this).val().length < 3) {
      setError(0);
    } else if ($(this).val().length > 50) {
      setError(0);
    } else {
      removeError(0);
    }
  }

  // validar o campo email
  if ($(this).attr('id') == 'email') {
    if ($(this).val() == '') {
      setError(1);
    } else if (!emailRegex.test($(this).val())) {
      setError(1);
    } else {
      removeError(1);
    }
  }

  // validar o campo assunto
  if ($(this).attr('id') == 'assunto') {
    if ($(this).val() == '') {
      setError(2);
    } else {
      removeError(2);
    }
  }

  // validar o campo mensagem
  if ($(this).attr('id') == 'mensagem') {
    if ($(this).val() == '') {
      setError(3);
    } else if ($(this).val().length < 300) {
      setError(3);
    } else {
      removeError(3);
    }
  }

});