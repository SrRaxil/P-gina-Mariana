# 💖 Para ti, Mariana ♡ — Dark Romantic & Glassmorphism Edition

Una experiencia web personal, íntima, moderna y refinada hecha especialmente para Mariana.

---

## 🌟 Nuevas Características y Mejoras Implementadas

1. **Estética "Dark Romantic" & Glassmorphism:**
   - Paleta refinada en tonos oscuros aterciopelados (`#0c0a10`, `#14101a`) combinada con acentos de rosa rubí (`#f43f5e`), oro suave y lavanda.
   - Tarjetas y paneles con efecto de vidrio esmerilado (*glassmorphism* con `backdrop-filter: blur(16px)`), bordes translúcidos y sombras difusas elegantes.
   - Tipografías premium de Google Fonts:
     - **Poppins:** Para lectura nítida y moderna de textos y botones.
     - **Playfair Display:** Para títulos con presencia editorial y romántica.
     - **Sacramento & Caveat:** Para firmas, dedicatorias y notas estilo manuscrito íntimo.
   - **100% Responsivo:** Adaptado con precisión para pantallas móviles, tablets y computadoras.

2. **Microinteracciones y Dinamismo 3D:**
   - **Tarjetas 3D Flip Card:** Las fotos tipo Polaroid (tanto en la portada como en la historia) ahora se pueden **tocar o voltear** para descubrir un mensaje íntimo y secreto en su reverso.
   - **Mecánica del Botón "No" Esquivo:**
     - Al intentar tocar o pasar el cursor sobre el botón "No...", este huye dinámicamente sin salirse del área visible.
     - Cambia de texto en cada intento con frases divertidas y juguetonas.
     - El botón **"¡Sí, claro que sí! ♡"** crece progresivamente con cada intento fallido, volviéndose irresistible.
     - Al pulsar "¡Sí!", se desata una **explosión de confeti y corazones** con `canvas-confetti` y se abre un modal de celebración con fanfarria sonora.

3. **Nuevos Componentes Clave:**
   - **Contador en Tiempo Real:** Días, horas, minutos y segundos transcurridos juntos en un elegante panel digital de vidrio.
   - **Mini-Player Flotante de Música:** Ubicado en la esquina inferior derecha con disco de vinilo giratorio, visualizador de tiempo, barra de progreso interactiva (seekable), botón Play/Pausa, silenciador y opción para minimizarlo.
     *(Incluye generador de acordes románticos por sintetizador si aún no has colocado tu archivo MP3).*

---

## ⚙️ Variables que Puedes Personalizar (`script.js`)

Al inicio del archivo [`script.js`](script.js), encontrarás el bloque de configuración:

```javascript
const CONFIG = {
  // 1. FECHA DE INICIO (Formato: YYYY-MM-DDTHH:mm:ss)
  // Cambia la fecha por la que desees para el contador:
  fechaInicio: '2025-09-26T00:00:00',

  // 2. MÚSICA DE FONDO
  // Guarda tu canción favorita como 'musica.mp3' en la carpeta 'assets/'
  // o pon un enlace directo a un archivo de audio online:
  audioUrl: 'assets/musica.mp3',
  audioTitulo: 'Nuestra Canción ♡',
  audioArtista: 'Para Mariana',

  // 3. FRASES PARA EL BOTÓN ESQUIVO "NO"
  frasesNo: [
    '¿Segura? 👀',
    'Piénsalo bien...',
    '¡Esa no vale! 😂',
    '¡Ups, se te resbaló el dedo!',
    '¿En serio vas a decir que no? 🥺',
    'El botón "No" está dañado 🛠️',
    '¡Error 404: Rechazo no admitido!',
    '¡Mira qué bonito está el botón "Sí"! 😉',
    'Mariana, ese botón no funciona 🤭',
    '¡Ríndete, tienes que decir que sí! 💖'
  ]
};
```

---

## 📁 Fotos Originales Preservadas (`assets/fotos/`)
- `foto_recuerdo_nosotros.jpg`: Polaroid 3D en Portada y recuerdo del primer beso en la mecedora.
- `gato_filosofo_chocomilk.jpg`: Hito de Filosofía (Epicuro) y Gatico #1.
- `gato_shaka_buenavibra.jpg`: Hito de tardes en Roblox ("99 Noches" y "Roba un brainrot").
- `gato_sonrojado.webp`: Hito del 26 de septiembre en la cancha y Gatico #3.
- `gato_sorprendido.webp`: Hito de febrero de 2026 y Gatico #2.
- `gato_ojitos_tiernos.webp`: Gatico #4 (ojitos tiernos).
- `gato_corazon_amor.jpg`: Estudio científico, modal de celebración y firma de la carta.

---

## 📱 Cómo abrir y ver la página en tu teléfono

### Opción 1: Abrir directamente en el navegador del teléfono:
```bash
termux-open ~/pagina-web/index.html
```

### Opción 2: Servidor local HTTP con Python:
```bash
cd ~/pagina-web
python3 -m http.server 8080
```
Y luego en Google Chrome abre:
👉 **`http://localhost:8080`**
