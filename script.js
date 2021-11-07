const container = document.getElementById('container');
const text = document.getElementById('text');

const ukupnoVreme = 7500;
const vremeUzdaha = (ukupnoVreme / 5) * 2;
const zadrzi = ukupnoVreme / 5;

animacijaDisanja();

function animacijaDisanja() {
  text.innerText = 'Udahni!';
  container.className = 'container raste';

  setTimeout(() => {
    text.innerText = 'Zadrži';

    setTimeout(() => {
      text.innerText = 'Izdahni!';
      container.className = 'container smanjuje';
    }, zadrzi);
  }, vremeUzdaha);
}

setInterval(animacijaDisanja, ukupnoVreme);