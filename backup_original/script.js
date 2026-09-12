/* ==========================================================
   PARA TI, MARIANA ♡ — INTERACCIONES Y LÓGICA PERSONAL
   ========================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // 1. SISTEMA DE SONIDO CON WEB AUDIO API
  //    (Nativo, ligero, sin archivos externos)
  // ==========================================
  let soundEnabled = true;
  let audioCtx = null;

  function initAudio() {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        audioCtx = new AudioContext();
      }
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
  }

  // Campana suave para botones y clics
  function playChime(freq = 587.33, type = 'sine') {
    if (!soundEnabled) return;
    try {
      initAudio();
      if (!audioCtx) return;
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
      gain.gain.setValueAtTime(0.12, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.45);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.45);
    } catch (e) {}
  }

  // Ronroneo / Maullido suave
  function playMeow() {
    if (!soundEnabled) return;
    try {
      initAudio();
      if (!audioCtx) return;
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'triangle';
      const now = audioCtx.currentTime;
      osc.frequency.setValueAtTime(320, now);
      osc.frequency.exponentialRampToValueAtTime(640, now + 0.15);
      osc.frequency.exponentialRampToValueAtTime(420, now + 0.35);
      gain.gain.setValueAtTime(0.09, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.4);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(now);
      osc.stop(now + 0.4);
    } catch (e) {}
  }

  // Alternador de sonido
  const soundToggle = document.getElementById('sound-toggle');
  const soundIcon = soundToggle.querySelector('.sound-icon');
  if (soundToggle) {
    soundToggle.addEventListener('click', () => {
      soundEnabled = !soundEnabled;
      soundIcon.textContent = soundEnabled ? '🔊' : '🔇';
      if (soundEnabled) {
        initAudio();
        playChime(659.25);
      }
    });
  }

  window.addEventListener('click', () => {
    initAudio();
  }, { once: true });

  // ==========================================
  // 2. PARTÍCULAS FLOTANTES DE CORAZONES
  // ==========================================
  function createHeartParticle(x, y, emoji = '♡') {
    const heart = document.createElement('div');
    heart.className = 'floating-heart';
    heart.textContent = emoji;
    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;
    const randomOffset = (Math.random() - 0.5) * 80;
    heart.style.setProperty('--tx', `${randomOffset}px`);
    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 1400);
  }

  document.addEventListener('click', (e) => {
    if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
      const symbols = ['♡', '✨', '🐾', '🌸'];
      const chosen = symbols[Math.floor(Math.random() * symbols.length)];
      createHeartParticle(e.clientX, e.clientY, chosen);
    }
  });

  // ==========================================
  // 3. BARRA DE PROGRESO DE LECTURA
  // ==========================================
  const progressBar = document.getElementById('reading-progress');
  window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight > 0) {
      const progress = (window.scrollY / totalHeight) * 100;
      progressBar.style.width = `${progress}%`;
    }
  });

  // ==========================================
  // 4. NAVEGACIÓN Y RESALTADO SUAVE
  // ==========================================
  const navLinks = document.querySelectorAll('.nav-item');
  const sections = document.querySelectorAll('section[id], header[id]');

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + 140;
    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');
      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  });

  const btnEmpezar = document.getElementById('btn-empezar');
  if (btnEmpezar) {
    btnEmpezar.addEventListener('click', () => {
      playChime(523.25);
    });
  }

  // ==========================================
  // 5. GATICOS INTERACTIVOS 🐈 (Textos naturales y cercanos)
  // ==========================================
  const catCards = document.querySelectorAll('.cat-dossier-card');
  const catQuotes = {
    1: [
      "«Miau... Mariana tiene la razón en todo y tú lo sabes 😂»",
      "«Te estoy vigilando. Más te vale cuidar a Mariana.»",
      "«Mariana manda aquí, acéptalo.»",
      "«Si me miras feo te araño las medias.»"
    ],
    2: [
      "«Zzz... 5 minutitos más y me levanto.»",
      "«No molestar, estoy ocupado durmiendo entre las cobijas.»",
      "«Mi trabajo de tiempo completo es dormir 18 horas.»",
      "«Miau... déjame acurrucarme.»"
    ],
    3: [
      "«¡Modo turbo activado a las 3 de la mañana!»",
      "«Derribé algo pero fue sin culpa, te lo juro.»",
      "«Tú me caes bien, pero Mariana es mi favorita.»",
      "«¿Alguien dijo jugar? ¡Ya voy!»"
    ],
    4: [
      "«Ronroneo de pura felicidad ♡»",
      "«Pongo cara tierna y consigo comida al instante.»",
      "«Un masajito en la cabeza y somos amigos para siempre.»",
      "«Miau... dale un beso a Mariana de mi parte.»"
    ]
  };

  const catIndices = { 1: 0, 2: 0, 3: 0, 4: 0 };

  catCards.forEach(card => {
    card.addEventListener('click', () => {
      const catId = card.getAttribute('data-cat');
      const bubble = document.getElementById(`bubble-cat-${catId}`);
      
      playMeow();

      if (bubble && catQuotes[catId]) {
        catIndices[catId] = (catIndices[catId] + 1) % catQuotes[catId].length;
        bubble.textContent = catQuotes[catId][catIndices[catId]];
        bubble.classList.add('active');
        
        card.style.transform = 'scale(1.03) translateY(-6px)';
        setTimeout(() => {
          card.style.transform = '';
        }, 200);
      }
    });
  });

  // ==========================================
  // 6. MINIJUEGO: ¿QUÉ TANTO ME QUIERES? 👀
  //    (Solo cambia un emoji grande, sin texto)
  // ==========================================
  const loveSlider = document.getElementById('love-slider');
  const sliderEmoji = document.getElementById('slider-emoji');

  if (loveSlider && sliderEmoji) {
    loveSlider.addEventListener('input', (e) => {
      const val = parseInt(e.target.value, 10);
      let emoji = "🙂";

      if (val === 0) {
        emoji = "💀";
      } else if (val <= 15) {
        emoji = "🤨";
      } else if (val <= 30) {
        emoji = "😐";
      } else if (val <= 45) {
        emoji = "🙂";
      } else if (val <= 65) {
        emoji = "😊";
      } else if (val <= 80) {
        emoji = "🥰";
      } else if (val <= 95) {
        emoji = "😍";
      } else {
        emoji = "💖";
        playChime(783.99);
      }

      sliderEmoji.textContent = emoji;
      sliderEmoji.style.transform = 'scale(1.25)';
      setTimeout(() => {
        sliderEmoji.style.transform = 'scale(1)';
      }, 150);
    });
  }

  // ==========================================
  // 7. MINIJUEGO: DATO CURIOSO 👀
  // ==========================================
  const triviaBox = document.getElementById('trivia-box');
  const btnTrivia = document.getElementById('btn-trivia');

  const curiosidades = [
    "📖 El trabajo de filosofía sobre el epicureísmo fue la mejor excusa para empezar a hablar contigo todos los días.",
    "🏀 Cuando me preguntaron en la cancha el 26 de septiembre de 2025 si me gustabas, el 'sí' me salió automático sin dudarlo.",
    "🎮 En Roblox pasábamos horas en '99 noches' y 'Roba un brainrot', riéndonos de cualquier bobada.",
    "💬 En febrero de 2026 cuando te acercaste a preguntar sobre intentar algo, sentí una alegría inmensa.",
    "✨ El 6 de marzo de 2026 fue cuando decidí preguntarte si querías que lo intentáramos de nuevo.",
    "🪑 El primer beso en la mecedora de tu sala: me puse un poco nervioso con mi reacción, pero sé que tengo una segunda oportunidad para cuando nos demos un verdadero beso.",
    "🌸 Verte con el cabello suelto me reinicia el sistema por completo cada vez.",
    "☕ Respeto mucho tu espacio y tu tranquilidad; cada momento simple contigo vale oro."
  ];

  let triviaIndex = 0;
  if (btnTrivia && triviaBox) {
    btnTrivia.addEventListener('click', () => {
      playChime(659.25);
      triviaIndex = (triviaIndex + 1) % curiosidades.length;
      triviaBox.style.opacity = '0';
      setTimeout(() => {
        triviaBox.textContent = curiosidades[triviaIndex];
        triviaBox.style.opacity = '1';
      }, 150);
    });
  }

  // ==========================================
  // 8. MINIJUEGO: BOTÓN "NO TOCAR" ⚠️
  //    (Pantalla en negro durante 5 segundos sin letras ni nada)
  // ==========================================
  const btnNoTocar = document.getElementById('btn-no-tocar');
  const blackoutScreen = document.getElementById('blackout-screen');

  if (btnNoTocar && blackoutScreen) {
    btnNoTocar.addEventListener('click', () => {
      blackoutScreen.classList.remove('hidden');

      setTimeout(() => {
        blackoutScreen.classList.add('hidden');
      }, 5000);
    });
  }

  // ==========================================
  // 9. BUZÓN DE QUEJITAS 😂
  // ==========================================
  const btnDejarQueja = document.getElementById('btn-dejar-queja');
  const btnPerdonar = document.getElementById('btn-perdonar');
  const complaintResult = document.getElementById('complaint-result');
  const modalQuejita = document.getElementById('modal-quejita');
  const btnEnviarQuejita = document.getElementById('btn-enviar-quejita');
  const btnCerrarModal = document.getElementById('btn-cerrar-modal');
  const textoQuejita = document.getElementById('texto-quejita');

  if (btnDejarQueja && modalQuejita) {
    btnDejarQueja.addEventListener('click', () => {
      playChime(587.33);
      modalQuejita.classList.remove('hidden');
    });
  }

  if (btnCerrarModal && modalQuejita) {
    btnCerrarModal.addEventListener('click', () => {
      modalQuejita.classList.add('hidden');
    });
  }

  if (btnEnviarQuejita && modalQuejita) {
    btnEnviarQuejita.addEventListener('click', () => {
      playChime(659.25);
      modalQuejita.classList.add('hidden');
      if (complaintResult) {
        complaintResult.classList.remove('hidden');
        complaintResult.innerHTML = `
          <strong>Queja recibida con éxito:</strong><br>
          La voy a tener muy en cuenta para consentirte más y corregirlo. Cero rencores ♡
        `;
      }
      textoQuejita.value = '';
    });
  }

  if (btnPerdonar && complaintResult) {
    btnPerdonar.addEventListener('click', () => {
      playChime(783.99);
      complaintResult.classList.remove('hidden');
      complaintResult.innerHTML = `
        <strong>¡Gracias por la paciencia! 😇</strong><br>
        Has ganado <strong>+100 puntos</strong> conmigo para canjear por besos o comida rica.
      `;
    });
  }

  // ==========================================
  // 10. SELLO DE LA CARTA 💌
  // ==========================================
  const btnSeal = document.getElementById('btn-seal');
  if (btnSeal) {
    btnSeal.addEventListener('click', () => {
      playChime(880);
      btnSeal.innerHTML = `
        <span class="seal-icon">💖</span>
        <span class="seal-text">¡Sellada con todo mi amor!</span>
      `;
      btnSeal.style.background = '#15803d';

      for (let i = 0; i < 24; i++) {
        setTimeout(() => {
          const rect = btnSeal.getBoundingClientRect();
          const startX = rect.left + rect.width / 2 + (Math.random() - 0.5) * 120;
          const startY = rect.top + (Math.random() - 0.5) * 40;
          createHeartParticle(startX, startY, i % 2 === 0 ? '❤️' : '♡');
        }, i * 45);
      }
    });
  }

});
