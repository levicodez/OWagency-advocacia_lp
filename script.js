// Navegação mobile
(function () {
  var toggle = document.getElementById('navToggle');
  var list = document.getElementById('nav-list');
  if (!toggle || !list) return;

  toggle.addEventListener('click', function () {
    var isOpen = list.classList.toggle('show');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Fecha o menu ao clicar em um link
  list.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
      list.classList.remove('show');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
})();

// Acessibilidade: pular para conteúdo ao focar no contêiner de depoimentos (scroller)
(function () {
  var scroller = document.querySelector('.scroller');
  if (!scroller) return;
  scroller.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight') scroller.scrollBy({ left: 240, behavior: 'smooth' });
    if (e.key === 'ArrowLeft') scroller.scrollBy({ left: -240, behavior: 'smooth' });
  });
})();

