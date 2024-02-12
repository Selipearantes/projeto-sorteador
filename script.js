function generateNumber() {
     const min = Math.ceil(document.querySelector('.input-min').value);
     const max = Math.floor(document.querySelector('.input-max').value);
     const resultTela = document.querySelector('.resultTela');

     if (min >= max) {
          resultTela.innerHTML = 'o valor mínimo tem que ser MENOR que o valor máximo!';
          resultTela.style.fontSize = '25px';
     }
     else {
          const result = Math.floor(Math.random() * (max - min + 1)) + min;
          resultTela.style.fontSize = '55px';
     
          resultTela.innerHTML = (result);
     }
}

