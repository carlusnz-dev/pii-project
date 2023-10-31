// mudar content do title-cover quando a tela for menor que 992px
const h1TitleArtigo = $('#artigo-title');
function updateH1() {
  if ($(window).width() < 992) {
    //titulo original resumido
    h1TitleArtigo.text('Ceará, um pouco sobre tudo dessa terra');
  } else {
    h1TitleArtigo.text('Estado do Ceará: Um Olhar Abrangente sobre sua Economia, Cultura e Desenvolvimento');
  }
}
updateH1();
$(window).resize(updateH1);

