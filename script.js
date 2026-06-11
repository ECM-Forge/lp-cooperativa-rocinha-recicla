/* ============================================================
   COOPERATIVA ROCINHA RECICLA — script.js
   Vanilla ES6 · IntersectionObserver · sem dependências
   ============================================================ */
(function () {
  "use strict";

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- 1. Imagem: fallback on-brand se a foto falhar ---------- */
  document.querySelectorAll(".media img").forEach((img) => {
    const figure = img.closest(".media");
    const fail = () => figure && figure.classList.add("no-img");
    img.addEventListener("error", fail);
    // se já falhou antes do JS rodar (cache/erro)
    if (img.complete && img.naturalWidth === 0) fail();
  });

  /* ---------- 2. Navbar: fade-in no load + estado no scroll (sentinel) + progresso de leitura ---------- */
  const nav = document.getElementById("nav");
  requestAnimationFrame(() => nav.classList.add("is-visible"));

  const sentinel = document.getElementById("nav-sentinel");
  if (sentinel && "IntersectionObserver" in window) {
    new IntersectionObserver(
      ([entry]) => nav.classList.toggle("is-scrolled", !entry.isIntersecting),
      { threshold: 0 }
    ).observe(sentinel);
  } else {
    nav.classList.add("is-scrolled");
  }

  const progressBar = document.getElementById("nav-progress");
  if (progressBar) {
    window.addEventListener("scroll", () => {
      const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
      progressBar.style.width = scrolled + "%";
    }, { passive: true });
  }

  /* ---------- 3. Hero: revela no load ---------- */
  window.addEventListener("load", () => {
    document.querySelectorAll('[data-anim="hero"],[data-anim="hero-img"]').forEach((el) => {
      el.classList.add("is-visible");
    });
  });
  // segurança: caso 'load' já tenha disparado
  if (document.readyState === "complete") {
    document.querySelectorAll('[data-anim="hero"],[data-anim="hero-img"]').forEach((el) => el.classList.add("is-visible"));
  }

  /* ---------- 4. Reveal genérico (serviços, tiles) com stagger ---------- */
  const revealItems = document.querySelectorAll('[data-anim="service"],[data-anim="tile"]');
  if ("IntersectionObserver" in window && !prefersReduced) {
    const io = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          const siblings = Array.from(el.parentNode.children).filter((c) => c.hasAttribute("data-anim"));
          const idx = siblings.indexOf(el);
          const step = el.dataset.anim === "service" ? 150 : 100;
          setTimeout(() => el.classList.add("is-visible"), Math.min(idx, 6) * step);
          obs.unobserve(el);
        });
      },
      { threshold: 0.2 }
    );
    revealItems.forEach((el) => io.observe(el));
  } else {
    revealItems.forEach((el) => el.classList.add("is-visible"));
  }

  /* ---------- 5. Counters animados ---------- */
  function runCounter(el) {
    const target = parseFloat(el.dataset.target);
    const decimals = parseInt(el.dataset.decimals || "0", 10);
    const prefix = el.dataset.prefix || "";
    const suffix = el.dataset.suffix || "";
    const plain = el.dataset.plain === "1"; // ex: ano (sem separador de milhar)
    const duration = 1800;
    const start = performance.now();

    function tick(now) {
      const p = Math.min((now - start) / duration, 1);
      const val = target * p;
      let txt = decimals ? val.toFixed(decimals) : Math.floor(val).toString();
      if (!plain && !decimals && val >= 1000) {
        txt = Math.floor(val).toLocaleString("pt-BR");
      }
      el.textContent = prefix + txt + suffix;
      if (p < 1) {
        requestAnimationFrame(tick);
      } else {
        el.textContent = prefix + (decimals ? target.toFixed(decimals) : (plain ? target : target.toLocaleString("pt-BR"))) + suffix;
        el.classList.add("is-done");
      }
    }
    requestAnimationFrame(tick);
  }

  /* Counters da seção Sobre */
  const countersWrap = document.getElementById("counters");
  if (countersWrap) {
    if ("IntersectionObserver" in window && !prefersReduced) {
      const co = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            countersWrap.querySelectorAll(".about__counter-num").forEach((el, i) => {
              setTimeout(() => runCounter(el), i * 200);
            });
            obs.disconnect();
          });
        },
        { threshold: 0.3 }
      );
      co.observe(countersWrap);
    } else {
      countersWrap.querySelectorAll(".about__counter-num").forEach((el) => {
        const d = parseInt(el.dataset.decimals || "0", 10);
        const t = parseFloat(el.dataset.target);
        el.textContent = (el.dataset.prefix || "") + (d ? t.toFixed(d) : t) + (el.dataset.suffix || "");
        el.classList.add("is-done");
      });
    }
  }

  /* Counters da seção Impacto (galeria) */
  const galleryStats = document.querySelector(".gallery__stats");
  if (galleryStats) {
    if ("IntersectionObserver" in window && !prefersReduced) {
      const gio = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            galleryStats.querySelectorAll(".gallery__stat-num").forEach((el, i) => {
              setTimeout(() => runCounter(el), i * 120);
            });
            obs.disconnect();
          });
        },
        { threshold: 0.3 }
      );
      gio.observe(galleryStats);
    } else {
      galleryStats.querySelectorAll(".gallery__stat-num").forEach((el) => {
        const t = parseFloat(el.dataset.target);
        el.textContent = (el.dataset.prefix || "") + t;
      });
    }
  }

  /* ---------- 6. FAQ accordion: fecha os demais ao abrir ---------- */
  const accs = document.querySelectorAll(".acc");
  accs.forEach((acc) => {
    acc.addEventListener("toggle", () => {
      if (acc.open) {
        accs.forEach((other) => {
          if (other !== acc) other.open = false;
        });
      }
    });
  });

  /* ---------- 7. Menu mobile: Drawer Premium ---------- */
  const burger = document.getElementById("burger");
  const drawer = document.getElementById("drawer");
  const drawerClose = document.getElementById("drawer-close");
  const drawerOverlay = document.getElementById("drawer-overlay");
  const drawerLinks = document.querySelectorAll(".drawer__link");
  const drawerCta = document.querySelector(".drawer__footer .btn");

  function openDrawer() {
    if (!drawer) return;
    drawer.classList.add("is-active");
    document.body.classList.add("scroll-lock");
    drawer.setAttribute("aria-hidden", "false");
    burger.setAttribute("aria-expanded", "true");
    // Foco inicial no botão de fechar para acessibilidade
    requestAnimationFrame(() => {
      if (drawerClose) drawerClose.focus();
    });
  }

  function closeDrawer() {
    if (!drawer) return;
    drawer.classList.remove("is-active");
    document.body.classList.remove("scroll-lock");
    drawer.setAttribute("aria-hidden", "true");
    burger.setAttribute("aria-expanded", "false");
    // Retorna foco para o botão hamburguer
    if (burger) burger.focus();
  }

  if (burger && drawer) {
    burger.addEventListener("click", () => {
      const isOpen = drawer.classList.contains("is-active");
      if (isOpen) {
        closeDrawer();
      } else {
        openDrawer();
      }
    });
  }

  if (drawerClose) {
    drawerClose.addEventListener("click", closeDrawer);
  }

  if (drawerOverlay) {
    drawerOverlay.addEventListener("click", closeDrawer);
  }

  drawerLinks.forEach((link) => {
    link.addEventListener("click", closeDrawer);
  });

  if (drawerCta) {
    drawerCta.addEventListener("click", closeDrawer);
  }

  // Atalho de teclado: fechar no Escape
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && drawer && drawer.classList.contains("is-active")) {
      closeDrawer();
    }
  });

  /* ---------- 8. Formulário: validação real ---------- */
  const form = document.getElementById("form");
  const success = document.getElementById("form-success");
  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function validateField(field) {
    const input = field.querySelector("input,select,textarea");
    if (!input || !input.hasAttribute("required")) return true;
    let ok = input.value.trim() !== "";
    if (ok && input.type === "email") ok = emailRe.test(input.value.trim());
    if (ok && input.type === "tel") ok = input.value.replace(/\D/g, "").length >= 8;
    field.classList.toggle("invalid", !ok);
    return ok;
  }

  if (form) {
    form.querySelectorAll(".field").forEach((field) => {
      const input = field.querySelector("input,select,textarea");
      if (!input) return;
      input.addEventListener("blur", () => validateField(field));
      input.addEventListener("input", () => {
        if (field.classList.contains("invalid")) validateField(field);
      });
    });

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      let allOk = true;
      let firstInvalid = null;
      form.querySelectorAll(".field").forEach((field) => {
        const ok = validateField(field);
        if (!ok && !firstInvalid) firstInvalid = field;
        if (!ok) allOk = false;
      });
      if (!allOk) {
        success.hidden = true;
        if (firstInvalid) {
          const inp = firstInvalid.querySelector("input,select,textarea");
          if (inp) inp.focus();
        }
        return;
      }
      success.hidden = false;
      form.reset();
    });
  }
  /* ---------- Galeria: pan reveal no click/touch ---------- */
  const gpanels = document.querySelectorAll(".gpanel");
  gpanels.forEach((panel) => {
    panel.addEventListener("click", function () {
      const wasPanned = this.classList.contains("is-panned");
      gpanels.forEach((p) => p.classList.remove("is-panned"));
      if (!wasPanned) this.classList.add("is-panned");
    });
  });

  /* ---------- WhatsApp Premium: balão com animação de digitação ---------- */
  function initWaPremium() {
    const bubble = document.getElementById('wa-message-bubble');
    const typing = document.getElementById('wa-typing');
    const realMessage = document.getElementById('wa-real-message');
    const badge = document.getElementById('wa-notification');
    const closeBtn = document.getElementById('wa-close-btn');
    const mainBtn = document.getElementById('wa-main-btn');
    const thirdSection = document.getElementById('impacto'); // Terceira seção da página (excluindo a Hero, inicia em #problema)

    if (!bubble || !thirdSection) return;

    let hasShown = false;
    let autoCloseTimeout = null;
    let typingTimeout = null;

    // Detecta quando a terceira seção (Impacto) entra na tela para exibir o balão
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasShown) {
            hasShown = true;
            showWaBubble();
            observer.unobserve(thirdSection);
          }
        });
      }, { threshold: 0.1 });
      observer.observe(thirdSection);
    } else {
      // Fallback para navegadores antigos (6 segundos de espera)
      setTimeout(showWaBubble, 6000);
    }

    function showWaBubble() {
      // Abre o balão
      bubble.classList.add('show');

      // Simula digitação por 2 segundos antes de exibir o texto real
      typingTimeout = setTimeout(() => {
        if (typing) {
          typing.classList.add('wa-fade-out');
          // Aguarda o término do fade-out do indicador de digitação antes de ocultá-lo e exibir a mensagem real
          setTimeout(() => {
            typing.style.display = 'none';
            if (realMessage) {
              realMessage.style.display = 'block';
              realMessage.classList.add('wa-fade-in-up');
            }
          }, 300);
        } else if (realMessage) {
          realMessage.style.display = 'block';
          realMessage.classList.add('wa-fade-in-up');
        }
      }, 2000);

      // Fica visível por 10 segundos e depois desaparece automaticamente
      autoCloseTimeout = setTimeout(() => {
        bubble.classList.remove('show');
        // Exibe a notificação com badge de 1 após o fechamento para engajamento sutil
        setTimeout(() => {
          if (badge) badge.classList.add('show');
        }, 1500);
      }, 10000);
    }

    function cleanupTimeouts() {
      if (typingTimeout) clearTimeout(typingTimeout);
      if (autoCloseTimeout) clearTimeout(autoCloseTimeout);
    }

    // Fechar balão manualmente
    if (closeBtn) {
      closeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        cleanupTimeouts();
        bubble.classList.remove('show');
        // Mostrar notificação após fechar
        setTimeout(() => {
          if (badge) badge.classList.add('show');
        }, 2000);
      });
    }

    // Ao clicar no botão flutuante, remove tudo
    if (mainBtn) {
      mainBtn.addEventListener('click', () => {
        cleanupTimeouts();
        bubble.classList.remove('show');
        if (badge) badge.classList.remove('show');
      });
    }
  }

  initWaPremium();

  /* ---------- Vídeos: play/pause com botão overlay ---------- */
  const vcards = document.querySelectorAll('.vcard');
  console.log('Vídeos encontrados:', vcards.length);
  
  const modal = document.getElementById('video-modal');
  const modalVideo = document.getElementById('vmodal-video');
  const modalClose = document.getElementById('video-modal-close');
  const modalOverlay = document.getElementById('video-modal-overlay');
  let activeCardVideo = null;

  vcards.forEach(card => {
    const video = card.querySelector('.vcard__video');
    const btn   = card.querySelector('.vcard__play');
    const media = card.querySelector('.vcard__media');
    const muteBtn = card.querySelector('.vcard__btn-mute');
    const expandBtn = card.querySelector('.vcard__btn-expand');
    if (!video || !btn || !media) return;

    // Sincronizar o estado visual inicial do botão de mute
    if (muteBtn) {
      muteBtn.classList.toggle('is-unmuted', !video.muted);
    }

    const play = () => {
      // Pausar outros vídeos antes (experiência de foco único)
      document.querySelectorAll('.vcard__video').forEach(v => {
        if (v !== video && !v.paused) {
          v.pause();
          const otherMedia = v.closest('.vcard__media');
          if (otherMedia) otherMedia.classList.remove('is-playing');
          const otherCard = v.closest('.vcard');
          if (otherCard) {
            otherCard.classList.remove('is-playing');
            otherCard.classList.remove('is-muted');
          }
        }
      });

      // Ativar áudio por padrão ao dar play (interação ativa do usuário)
      video.muted = false;
      if (muteBtn) {
        muteBtn.classList.add('is-unmuted');
      }

      video.play().then(() => {
        media.classList.add('is-playing');
        card.classList.add('is-playing');
        card.classList.toggle('is-muted', video.muted);
        console.log('Vídeo iniciado com som:', video.querySelector('source')?.src);
      }).catch((err) => {
        console.error('Erro ao reproduzir vídeo:', err);
      });
    };

    const pause = () => {
      video.pause();
      media.classList.remove('is-playing');
      card.classList.remove('is-playing');
      card.classList.remove('is-muted');
    };

    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (video.paused) play(); else pause();
    });

    // Pausar ao clicar no vídeo (quando playing)
    video.addEventListener('click', (e) => {
      e.stopPropagation();
      if (!video.paused) pause();
    });

    // Controle de volume/mute
    if (muteBtn) {
      muteBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevenir pausar do vídeo
        video.muted = !video.muted;
        muteBtn.classList.toggle('is-unmuted', !video.muted);
        card.classList.toggle('is-muted', video.muted);
      });
    }

    // Controle de tela cheia / expandir (Lightbox Modal)
    if (expandBtn && modal && modalVideo) {
      expandBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevenir pausar do vídeo
        
        activeCardVideo = video;
        
        // Pausar o vídeo do card atual para transferir
        video.pause();
        media.classList.remove('is-playing');
        card.classList.remove('is-playing');
        card.classList.remove('is-muted');

        // Configurar o vídeo do modal
        const srcEl = video.querySelector('source');
        if (srcEl) {
          modalVideo.src = srcEl.src;
        }
        modalVideo.currentTime = video.currentTime;
        modalVideo.muted = video.muted;
        
        // Exibir o modal
        modal.classList.add('is-active');
        modal.setAttribute('aria-hidden', 'false');
        document.body.classList.add('scroll-lock');

        // Iniciar reprodução no modal
        modalVideo.play().catch(err => console.error('Erro ao iniciar vídeo no modal:', err));
      });
    }

    // Pausar ao clicar na área do media (quando playing, ignorando cliques nos controles)
    media.addEventListener('click', (e) => {
      if (e.target.closest('.vcard__controls')) return;
      if (e.target === media || e.target === video) {
        if (!video.paused) pause();
      }
    });

    // Lazy play/pause com IntersectionObserver
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting && !video.paused) {
            pause();
          }
        });
      }, { threshold: 0.2 });
      io.observe(card);
    }
  });

  // Fechamento do Lightbox Modal
  function closeModal() {
    if (!modal || !modalVideo) return;
    
    modalVideo.pause();
    
    if (activeCardVideo) {
      activeCardVideo.currentTime = modalVideo.currentTime;
      activeCardVideo = null;
    }
    
    modal.classList.remove('is-active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('scroll-lock');
    modalVideo.src = '';
  }

  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (modalOverlay) modalOverlay.addEventListener('click', closeModal);
  
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('is-active')) {
      closeModal();
    }
  });

  /* ---------- Serviços: expandir/recolher ---------- */
  const servicesToggle = document.getElementById("servicesToggle");
  const servicesExtra  = document.getElementById("servicesExtra");

  if (servicesToggle && servicesExtra) {
    servicesToggle.addEventListener("click", () => {
      const isOpen = servicesExtra.classList.toggle("is-open");
      servicesToggle.setAttribute("aria-expanded", isOpen);
      servicesExtra.setAttribute("aria-hidden", !isOpen);

      if (isOpen && !prefersReduced) {
        setTimeout(() => {
          servicesExtra.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }, 100);
      }
    });
  }

})();
