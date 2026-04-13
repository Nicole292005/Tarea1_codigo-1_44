# CinePlus — Tarea #1

## Estudiante
Nicole Domenica Ramos Mejia

---

## Sobre el proyecto
CinePlus es una plataforma web para explorar películas en cartelera y estrenos. Los usuarios pueden ver tráilers, leer reseñas calificadas por estrellas y rentar sus películas favoritas. Todo carga dinámicamente desde JSON usando AJAX, con una interfaz oscura personalizada y animaciones suaves.

---

## Qué hay implementado
- **Galería de películas** — Las películas se cargan dinámicamente con imágenes, títulos y precios que varían según si están en estreno (dentro de 30 días) o en cartelera regular.
- **Modal de tráiler** — Cada película tiene un botón para ver su tráiler de YouTube en un modal, o puedes hacer clic directamente en la imagen.
- **Página de detalle** — Al seleccionar una película, ves su sinopsis completa, reseñas con calificación en estrellas (1–5) y el precio correspondiente.
- **Formulario de renta** — Selecciona una o varias películas, elige método de pago y cantidad de días. Al confirmar, ves un resumen con el total a pagar.
- **Validación de contacto** — Los campos del formulario se validan con jQuery: nombre, correo válido, mensaje entre 20–50 caracteres. Los errores se muestran inline sin usar alert().
- **Alerta de bienvenida** — Solo se muestra la primera vez que visitas (se guarda en localStorage), luego desaparece.
- **Spinner de carga** — Mientras se cargan las películas, aparece un spinner durante 5 segundos (retraso artificial para simular carga).
- **Animaciones** — Las tarjetas de películas aparecen con fadeIn escalonado, nunca de golpe.
- **Tema personalizado** — Diseño oscuro con acentos naranjas, fuente Poppins, footer fijo al pie de la página y navbar consistente en todas las secciones.

---

## Cómo ejecutar el proyecto

Abre una terminal en la carpeta del proyecto y ejecuta:
```
npx serve 
```
Luego abre `http://localhost:3000` en tu navegador.

---

