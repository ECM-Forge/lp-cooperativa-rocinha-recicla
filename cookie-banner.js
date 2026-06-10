/**
 * Cookie Banner — Cooperativa Rocinha Recicla
 * Baseado no Skill ATSA v2.1.0
 * LGPD compliant · Vanilla JS · Sem dependências
 */

(function () {
    'use strict';

    var CONFIG = {
        storageKey: 'rocinha_recicla_consent',
        expiryDays: 365,
        bannerDelay: 800,
        showFloatingBtn: false,
        privacyPolicyUrl: 'politica-de-privacidade.html',
    };

    var TOGGLE_MAP = {
        'ck-functional': 'functional',
        'ck-analytics': 'analytics',
        'ck-performance': 'performance',
        'ck-advertising': 'advertising',
    };

    var lastFocusedElement = null;
    var state = {
        necessary: true,
        functional: false,
        analytics: false,
        performance: false,
        advertising: false,
        decided: false,
        timestamp: null,
    };

    function load() {
        try {
            var raw = localStorage.getItem(CONFIG.storageKey);
            return raw ? JSON.parse(raw) : null;
        } catch (e) { return null; }
    }

    function save(prefs) {
        try {
            prefs.timestamp = Date.now();
            prefs.version = '2.1.0';
            prefs.decided = true;
            localStorage.setItem(CONFIG.storageKey, JSON.stringify(prefs));
        } catch (e) {}
    }

    function isExpired(timestamp) {
        if (!timestamp) return true;
        return Date.now() - timestamp > CONFIG.expiryDays * 86400000;
    }

    function showBanner() {
        var el = document.getElementById('ck-banner');
        if (!el) return;
        el.classList.add('ck-banner--visible');
        el.removeAttribute('aria-hidden');
    }

    function hideBanner() {
        var el = document.getElementById('ck-banner');
        if (!el) return;
        el.classList.remove('ck-banner--visible');
        el.classList.add('ck-banner--hidden');
        el.setAttribute('aria-hidden', 'true');
    }

    function openModal() {
        lastFocusedElement = document.activeElement;
        var modal = document.getElementById('ck-modal');
        if (!modal) return;
        if (modal.classList.contains('ck-modal--visible')) return;
        syncToggles();
        modal.classList.add('ck-modal--visible');
        modal.removeAttribute('aria-hidden');
        document.body.style.overflow = 'hidden';
        setTimeout(function () {
            var closeBtn = document.getElementById('ck-modal-close');
            if (closeBtn) closeBtn.focus();
        }, 100);
    }

    function closeModal() {
        var modal = document.getElementById('ck-modal');
        if (!modal) return;
        modal.classList.remove('ck-modal--visible');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
            lastFocusedElement.focus();
        }
    }

    function syncToggles() {
        Object.keys(TOGGLE_MAP).forEach(function (id) {
            var key = TOGGLE_MAP[id];
            var el = document.getElementById(id);
            if (el) el.checked = !!state[key];
        });
    }

    function readToggles() {
        var result = { necessary: true };
        Object.keys(TOGGLE_MAP).forEach(function (id) {
            var key = TOGGLE_MAP[id];
            var el = document.getElementById(id);
            result[key] = el ? el.checked : false;
        });
        return result;
    }

    /* ============================================================
       TOGGLE VISUAL DO RODAPÉ
       ============================================================ */
    function updateFooterToggleIcon() {
        var toggle = document.getElementById('cookie-toggle');
        if (!toggle) return;
        var prefs = load();
        if (prefs && prefs.decided) {
            var hasOptional = prefs.functional || prefs.analytics || prefs.performance || prefs.advertising;
            if (hasOptional) {
                toggle.classList.remove('inactive');
                toggle.classList.add('active');
            } else {
                toggle.classList.remove('active');
                toggle.classList.add('inactive');
            }
        }
        /* sem decisão: CSS padrão = ativo (âmbar) */
    }

    function acceptAll() {
        state = { necessary: true, functional: true, analytics: true, performance: true, advertising: true, decided: true };
        save(state);
        dispatch(state);
        hideBanner();
        closeModal();
        toast('Todos os cookies aceitos.');
        announce('Todos os cookies aceitos.');
        updateFooterToggleIcon();
    }

    function rejectAll() {
        state = { necessary: true, functional: false, analytics: false, performance: false, advertising: false, decided: true };
        save(state);
        dispatch(state);
        hideBanner();
        closeModal();
        toast('Apenas cookies necessários salvos.');
        announce('Apenas cookies necessários salvos.');
        updateFooterToggleIcon();
    }

    function saveCustom() {
        var custom = readToggles();
        state = Object.assign({}, custom, { decided: true });
        save(state);
        dispatch(state);
        hideBanner();
        closeModal();
        toast('Suas preferências foram salvas.');
        announce('Suas preferências foram salvas.');
        updateFooterToggleIcon();
    }

    function dispatch(prefs) {
        try {
            window.dispatchEvent(new CustomEvent('cookieConsentUpdated', { detail: { preferences: prefs } }));
        } catch (e) {}
    }

    function toast(message) {
        var existing = document.getElementById('ck-toast');
        if (existing) existing.remove();
        var el = document.createElement('div');
        el.id = 'ck-toast';
        el.className = 'ck-toast';
        el.setAttribute('role', 'status');
        el.setAttribute('aria-live', 'polite');
        el.textContent = '✓ ' + message;
        document.body.appendChild(el);
        requestAnimationFrame(function () {
            requestAnimationFrame(function () { el.classList.add('ck-toast--visible'); });
        });
        setTimeout(function () {
            el.classList.remove('ck-toast--visible');
            setTimeout(function () { el.remove(); }, 350);
        }, 3000);
    }

    function announce(message) {
        var region = document.getElementById('ck-live-region');
        if (!region) return;
        region.textContent = '';
        setTimeout(function () { region.textContent = message; }, 50);
    }

    function on(id, event, handler) {
        var el = document.getElementById(id);
        if (el) el.addEventListener(event, handler);
    }

    function bindEvents() {
        on('ck-accept-all', 'click', acceptAll);
        on('ck-reject', 'click', rejectAll);
        on('ck-customize', 'click', openModal);
        on('ck-modal-close', 'click', closeModal);
        on('ck-modal-overlay', 'click', closeModal);
        on('ck-modal-accept-all', 'click', acceptAll);
        on('ck-modal-reject', 'click', rejectAll);
        on('ck-modal-save', 'click', saveCustom);
        on('ck-prefs-link', 'click', function (e) { e.preventDefault(); openModal(); });

        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') {
                var modal = document.getElementById('ck-modal');
                if (modal && modal.classList.contains('ck-modal--visible')) closeModal();
            }
            if (e.key === 'Enter' && document.activeElement && document.activeElement.id === 'ck-modal-save') {
                saveCustom();
            }
        });
    }

    function init() {
        var saved = load();
        if (saved && saved.decided && !isExpired(saved.timestamp)) {
            state = Object.assign({}, state, saved);
            dispatch(state);
            updateFooterToggleIcon();
            return;
        }
        updateFooterToggleIcon();
        setTimeout(showBanner, CONFIG.bannerDelay);
    }

    window.CookieBanner = {
        open: openModal,
        acceptAll: acceptAll,
        rejectAll: rejectAll,
        saveCustom: saveCustom,
        getPreferences: load,
        hasDecided: function () { var s = load(); return !!(s && s.decided && !isExpired(s.timestamp)); },
        reset: function () {
            localStorage.removeItem(CONFIG.storageKey);
            state = { necessary: true, functional: false, analytics: false, performance: false, advertising: false, decided: false, timestamp: null };
            showBanner();
        },
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function () { bindEvents(); init(); });
    } else {
        bindEvents();
        init();
    }

})();
