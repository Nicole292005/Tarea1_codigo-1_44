// ===== NAVBAR COMPARTIDA =====
function renderNavbar(paginaActual) {
  const links = [
    { href: 'index.html', label: 'Inicio', id: 'inicio' },
    { href: 'pages/renta.html', label: 'Rentar', id: 'renta' },
    { href: 'pages/contacto.html', label: 'Contacto', id: 'contacto' }
  ];

  // Si estamos en /pages/, ajustar href del inicio
  const enPages = window.location.pathname.includes('/pages/');
  const prefix = enPages ? '../' : '';

  let navHtml = `
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid px-4">
        <a class="navbar-brand" href="${prefix}index.html">🎬 CinePlus</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMain">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navMain">
          <ul class="navbar-nav ms-auto gap-1">
  `;

  links.forEach(link => {
    const href = link.id === 'inicio' ? `${prefix}index.html` :
                 link.id === 'renta' ? `${prefix}pages/renta.html` :
                 `${prefix}pages/contacto.html`;
    const active = paginaActual === link.id ? 'active' : '';
    navHtml += `<li class="nav-item"><a class="nav-link ${active}" href="${href}">${link.label}</a></li>`;
  });

  navHtml += `
          </ul>
        </div>
      </div>
    </nav>
  `;

  document.getElementById('navbar-container').innerHTML = navHtml;
}

// ===== FOOTER COMPARTIDO =====
function renderFooter() {
  const footerEl = document.getElementById('footer-container');
  if (footerEl) {
    footerEl.innerHTML = `
      <footer>
        <p><span class="brand">CinePlus</span> &mdash; Tu cine favorito en línea</p>
        <small>&copy; ${new Date().getFullYear()} CinePlus. Todos los derechos reservados.</small>
      </footer>
    `;
  }
}

// ===== ALERTA DE BIENVENIDA (localStorage) =====
function mostrarBienvenida() {
  if (!localStorage.getItem('bienvenidaMostrada')) {
    const alerta = document.getElementById('alerta-bienvenida');
    if (alerta) {
      alerta.style.display = 'block';
      localStorage.setItem('bienvenidaMostrada', 'true');
    }
  }
}

function cerrarBienvenida() {
  const alerta = document.getElementById('alerta-bienvenida');
  if (alerta) {
    $(alerta).fadeOut(300);
  }
}
