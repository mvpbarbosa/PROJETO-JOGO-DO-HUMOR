const modosNaruto = [
  "https://i0.wp.com/i.pinimg.com/originals/11/77/d7/1177d7936cf509018406ffe494b941f7.png", /*Índice 0 */
  "https://i.pinimg.com/originals/0b/56/1c/0b561c496fa588ef387cb49137c4c44b.png", /*Índice 1 */
  "https://i.pinimg.com/originals/69/da/d1/69dad11ae9d52058f849d0995cff945d.png", /*Índice 2 */
]; /*Array (lista) com todas as imagens que serão alteradas*/

var contador = 0; /*Contador com valor 0*/

function alterarImagem() { /*Função para alterar a imagem à cada clique */
    contador++ /*Adicionando +1 ao contador*/
    let situacao = document.querySelector("span#situacao"); /*Cria a variável 'situacao' e coloca o elemento com a tag 'span' com o 'id' 'situacao' nela */
    let img = document.querySelector("img"); /*Cria a variável 'img' e coloca o elemento com a tag 'img' nela */
    let index = contador /*Cria a variável 'index' e dá o valor da variável 'contador' à ela */
    img.src = modosNaruto[index - 1]; /*Muda o valor de 'img.src' para o valor de 'index', ou seja, pega o índice da array com as imagens e troca a imagem pela que foi selecionada na arrau*/

    if(index == 1){ /*Se 'index' for igual à 1, o modo será 'Sennin' */
        situacao.innerHTML = "Sennin"
    } 
    else if(index == 2){ /*Se 'index' não for igual à 1, mas for igual à 2, o modo será 'Rikkudou' */
        situacao.innerHTML = "Rikkudou"
    }
    else{ /*Se 'index' não for igual à 1 e também não for igual à 2, o modo será 'Barion' */
        situacao.innerHTML = "Barion"
    }

    if(contador > 2){ /*Se o contador for maior que 2, ele receberá novamente o valor de 0 */
        contador = 0;
    }
} 