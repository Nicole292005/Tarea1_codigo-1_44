$(document).ready(function () {

  // ===== NAVBAR Y FOOTER =====
  renderNavbar('inicio');
  renderFooter();

  // ===== ALERTA BIENVENIDA =====
  mostrarBienvenida();

  // ===== CERRAR BIENVENIDA =====
  $('#cerrar-bienvenida').on('click', function () {
    cerrarBienvenida();
  });

  // ===== NAVEGAR A DETALLE =====
  $(document).on('click', '.btn-ver-detalle', function () {
    sessionStorage.setItem('movieId', $(this).data('id'));
    window.location.href = 'pages/detalle.html';
  });

  // ===== ABRIR MODAL TRÁILER =====
  $(document).on('click', '.btn-play-trailer, .btn-trailer', function () {
    const trailerUrl = $(this).data('trailer');
    const titulo = $(this).data('titulo');
    $('#modal-trailer-titulo').text(titulo);
    $('#modal-trailer-iframe').attr('src', trailerUrl);
    const modal = new bootstrap.Modal(document.getElementById('modalTrailer'));
    modal.show();
  });

  // ===== CARGA CON SPINNER + DELAY ARTIFICIAL DE 5 SEGUNDOS =====
  $('#spinner-container').show();
  $('#lista-peliculas').hide();

  setTimeout(function () {
    $.ajax({
      url: 'data/peliculas.json',
      method: 'GET',
      dataType: 'json',
      success: function (peliculas) {
        $('#spinner-container').fadeOut(300, function () {
          renderPeliculas(peliculas);
          $('#lista-peliculas').fadeIn(400);
        });
      },
      error: function () {
        $('#spinner-container').fadeOut(200);
        $('#lista-peliculas').html(`
          <div class="col-12">
            <div class="alert alert-danger text-center">
              ❌ No se pudo cargar la lista de películas. Intenta nuevamente.
            </div>
          </div>
        `).show();
      }
    });
  }, 5000); // Delay artificial de 5 segundos

  // ===== RENDER DE PELÍCULAS =====
  function renderPeliculas(peliculas) {
    const hoy = new Date();
    let html = '';

    peliculas.forEach(function (peli, index) {
      const fechaEstreno = new Date(peli.estreno);
      const diasDesdeEstreno = Math.floor((hoy - fechaEstreno) / (1000 * 60 * 60 * 24));
      const esEstreno = diasDesdeEstreno >= 0 && diasDesdeEstreno <= 30;
      const precio = esEstreno ? peli.precios.estreno : peli.precios.normal;
      const badgeEstreno = esEstreno
        ? `<span class="badge-estreno">🔥 ESTRENO</span>`
        : `<span class="badge-genero">En cartelera</span>`;

      const generosHtml = peli.generos.map(g => `<span class="badge-genero">${g}</span>`).join('');

      html += `
        <div class="col-md-4 col-sm-6 mb-4">
          <div class="pelicula-card fade-in-card" style="animation-delay: ${index * 0.1}s">
            <div class="card-img-wrapper btn-play-trailer" data-trailer="${peli.trailer}" data-titulo="${peli.titulo}" style="cursor:pointer;">
              <img src="${peli.imagen}" alt="${peli.titulo}" onerror="this.src='img/placeholder.jpg'">
              <div class="overlay-play">
                <div class="play-icon">▶</div>
              </div>
            </div>
            <div class="card-body">
              <h5 class="card-title">${peli.titulo}</h5>
              <div class="mb-2">${generosHtml} ${badgeEstreno}</div>
              <div class="precio-tag mb-3">$${precio.toFixed(2)} <small class="text-muted fw-normal" style="font-size:0.8rem">/ renta</small></div>
              <div class="card-actions">
                <button class="btn-cine btn-ver-detalle" data-id="${peli.id}">Ver detalles</button>
                <button class="btn-outline-cine btn-trailer"
                  data-trailer="${peli.trailer}"
                  data-titulo="${peli.titulo}">
                  🎬 Tráiler
                </button>
              </div>
            </div>
          </div>
        </div>
      `;
    });

    $('#lista-peliculas').html(html);
  }

  // ===== LIMPIAR IFRAME AL CERRAR MODAL =====
  $('#modalTrailer').on('hidden.bs.modal', function () {
    $('#modal-trailer-iframe').attr('src', '');
  });

});
