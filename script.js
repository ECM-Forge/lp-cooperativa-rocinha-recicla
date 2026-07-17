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

  /* ---------- 2. Navbar: fade-in no load + estado no scroll (sentinel) ---------- */
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
  const countersWrap = document.getElementById("counters");
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
      if (p < 1) requestAnimationFrame(tick);
      else el.textContent = prefix + (decimals ? target.toFixed(decimals) : (plain ? target : target.toLocaleString("pt-BR"))) + suffix;
    }
    requestAnimationFrame(tick);
  }

  if (countersWrap) {
    if ("IntersectionObserver" in window && !prefersReduced) {
      const co = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            countersWrap.querySelectorAll(".counter__num").forEach(runCounter);
            obs.disconnect();
          });
        },
        { threshold: 0.3 }
      );
      co.observe(countersWrap);
    } else {
      countersWrap.querySelectorAll(".counter__num").forEach((el) => {
        const d = parseInt(el.dataset.decimals || "0", 10);
        const t = parseFloat(el.dataset.target);
        el.textContent = (el.dataset.prefix || "") + (d ? t.toFixed(d) : t) + (el.dataset.suffix || "");
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
