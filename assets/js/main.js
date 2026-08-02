/* ============================================================
   PHAROS CONSULTORIA — interações
   Vanilla JS, sem dependências. Progressivo e acessível.
   ============================================================ */
(function () {
  "use strict";

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Footer compartilhado (injeta nas páginas internas) ----------
     data-base permite que páginas em subpasta (artigos/) usem ".." nos links. */
  const footerSlot = document.querySelector("[data-include-footer]");
  if (footerSlot) {
    const base = footerSlot.dataset.base ? footerSlot.dataset.base.replace(/\/$/, "") + "/" : "";
    footerSlot.outerHTML = `
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <a class="brand" href="${base}index.html" aria-label="Pharos Consultoria">
            <img class="brand__mark" src="${base}assets/img/logo-farol.svg" alt="" width="40" height="40" loading="lazy" />
            <span class="brand__name">PHAROS</span>
          </a>
          <p>Consultoria empresarial em gestão, finanças, estratégia e processos.</p>
          <p style="margin-top:var(--space-4)"><strong style="color:#cfd3ca">Fortaleza</strong><br>R. Monsenhor Bruno, 1153, Aldeota<br>Fortaleza, CE</p>
          <p style="margin-top:var(--space-3)"><strong style="color:#cfd3ca">Rio de Janeiro</strong><br>Av. Emb. Abelardo Bueno, 1300a, Barra Olímpica<br>Rio de Janeiro, RJ</p>
          <div class="socials">
            <a href="https://wa.me/5585991820220" aria-label="WhatsApp" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 00-8.6 15l-1.3 4.8 4.9-1.3A10 10 0 1012 2zm0 18a8 8 0 01-4.1-1.1l-.3-.2-2.9.8.8-2.8-.2-.3A8 8 0 1112 20zm4.4-6c-.2-.1-1.4-.7-1.6-.8s-.4-.1-.5.1-.6.8-.8 1-.3.2-.5.1a6.5 6.5 0 01-1.9-1.2 7.2 7.2 0 01-1.3-1.7c-.1-.2 0-.4.1-.5l.4-.4.2-.4a.5.5 0 000-.4c0-.1-.5-1.3-.7-1.7s-.4-.4-.5-.4h-.5a.9.9 0 00-.7.3 2.8 2.8 0 00-.9 2.1 4.9 4.9 0 001 2.6 11 11 0 004.3 3.8c2 .8 2 .5 2.4.5a2.5 2.5 0 001.6-1.2 2 2 0 00.1-1.2c0-.1-.2-.2-.4-.3z"/></svg></a>
            <a href="https://www.linkedin.com/company/pharosconsultoria/" aria-label="LinkedIn" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5A2.5 2.5 0 002.5 6a2.5 2.5 0 005 0 2.5 2.5 0 00-2.52-2.5zM3 8.98h4v12H3v-12zM9 8.98h3.8v1.64h.05a4.2 4.2 0 013.77-2.07c4 0 4.75 2.63 4.75 6.05v6.38h-4v-5.66c0-1.35 0-3.08-1.88-3.08s-2.17 1.47-2.17 3v5.74H9v-12z"/></svg></a>
            <a href="https://www.instagram.com/pharosconsultoria/" aria-label="Instagram" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="0"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg></a>
            <a href="https://www.facebook.com/pharosconsultoria?locale=pt_BR" aria-label="Facebook" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22 12a10 10 0 10-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.51 1.5-3.9 3.77-3.9 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0022 12z"/></svg></a>
            <a href="https://www.threads.com/@pharosconsultoria" aria-label="Threads" target="_blank" rel="noopener"><i class="icon-mask icon-mask--threads" aria-hidden="true"></i></a>
          </div>
        </div>
        <nav class="footer-col" aria-label="Empresa">
          <h2 class="footer-col__titulo">A Pharos</h2>
          <a href="${base}sobre.html">Nós</a><a href="${base}metodologia.html">Metodologia</a><a href="${base}cases.html">Cases</a><a href="${base}blog.html">Artigos</a><a href="${base}contato.html">Contato</a>
        </nav>
        <nav class="footer-col" aria-label="Soluções">
          <h2 class="footer-col__titulo">Soluções</h2>
          <a href="${base}servicos.html#planejamento-estrategico">Planejamento Estratégico</a><a href="${base}servicos.html#gestao-comercial">Gestão Comercial</a><a href="${base}servicos.html#gestao-financeira">Gestão Financeira</a><a href="${base}servicos.html#valuation">Valuation</a><a href="${base}servicos.html">Ver todas</a>
        </nav>
        <div class="footer-col footer-news">
          <h2 class="footer-col__titulo">Newsletter</h2>
          <p>Receba conteúdos de gestão e estratégia no seu&nbsp;e-mail.</p>
          <form class="news-form" data-form data-ok="Pronto. Você vai receber nossos próximos conteúdos." action="https://formsubmit.co/leandro1heliov@gmail.com" method="POST" aria-label="Assinar newsletter">
            <input type="hidden" name="_subject" value="Nova inscrição na newsletter da Pharos" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_next" data-next="${base}obrigado.html" value="" />
            <input type="text" name="_honey" tabindex="-1" autocomplete="off" aria-hidden="true" style="position:absolute;left:-9999px;width:1px;height:1px;opacity:0" />
            <label class="sr-only" for="nl-email">Seu e-mail</label>
            <input id="nl-email" type="email" name="E-mail" placeholder="Seu melhor e-mail" required autocomplete="email" />
            <button type="submit" aria-label="Assinar"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></button>
          </form>
          <p data-form-note hidden role="status" aria-live="polite" style="color:var(--gold-400); margin-top:var(--space-3)">Pronto. Você vai receber nossos próximos conteúdos.</p>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© <span data-year>2026</span> Pharos Consultoria. Todos os direitos reservados.</p>
        <p class="slogan">Você define o destino. Nós mostramos o caminho.</p>
      </div>
    </div>
  </footer>`;
  }

  /* ---------- Header: estado ao rolar ---------- */
  const header = document.querySelector(".site-header");
  if (header) {
    const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---------- Menu mobile ---------- */
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav");
  if (toggle && nav) {
    nav.classList.add("is-mobile");
    toggle.setAttribute("aria-expanded", "false");
    const closeMenu = () => {
      document.body.classList.remove("menu-open");
      toggle.setAttribute("aria-expanded", "false");
    };
    toggle.addEventListener("click", () => {
      const open = document.body.classList.toggle("menu-open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", closeMenu));
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && document.body.classList.contains("menu-open")) closeMenu();
    });
  }

  /* ---------- Reveal on scroll ---------- */
  const revealEls = document.querySelectorAll("[data-reveal]");
  if (revealEls.length) {
    if (prefersReduced || !("IntersectionObserver" in window)) {
      revealEls.forEach((el) => el.classList.add("is-in"));
    } else {
      const io = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-in");
              obs.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
      );
      revealEls.forEach((el) => io.observe(el));
    }
  }

  /* ---------- Contadores animados ---------- */
  const counters = document.querySelectorAll("[data-count]");
  if (counters.length && !prefersReduced && "IntersectionObserver" in window) {
    const animate = (el) => {
      const target = parseFloat(el.dataset.count);
      const suffix = el.dataset.suffix || "";
      const prefix = el.dataset.prefix || "";
      const dur = 1600;
      const start = performance.now();
      const step = (now) => {
        const p = Math.min((now - start) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        const val = Math.floor(eased * target);
        el.textContent = prefix + val.toLocaleString("pt-BR") + suffix;
        if (p < 1) requestAnimationFrame(step);
        else el.textContent = prefix + target.toLocaleString("pt-BR") + suffix;
      };
      requestAnimationFrame(step);
    };
    const co = new IntersectionObserver((entries, obs) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { animate(e.target); obs.unobserve(e.target); }
      });
    }, { threshold: 0.6 });
    counters.forEach((c) => co.observe(c));
  } else {
    counters.forEach((el) => {
      const t = parseFloat(el.dataset.count);
      el.textContent = (el.dataset.prefix || "") + t.toLocaleString("pt-BR") + (el.dataset.suffix || "");
    });
  }

  /* ---------- Marquee: duplica itens para loop contínuo ---------- */
  document.querySelectorAll("[data-marquee]").forEach((track) => {
    const originais = [...track.children];
    /* clonar os nós em vez de reescrever o innerHTML: o `innerHTML += innerHTML`
       jogava fora as imagens já carregadas e mandava o navegador baixar tudo de
       novo, o que fazia os logos demorarem a aparecer no celular. */
    originais.forEach((item) => track.appendChild(item.cloneNode(true)));
    track.setAttribute("aria-hidden", "false");

    /* Velocidade constante em px/s, em qualquer tela e com qualquer quantidade
       de logos. O deslocamento certo é o offset do primeiro clone: isso fecha o
       loop exato, sem o meio gap que sobrava no translateX(-50%). */
    const VELOCIDADE = 55; // px/s
    const ajusta = () => {
      const clone = track.children[originais.length];
      if (!clone) return;
      const volta = clone.offsetLeft;
      if (volta <= 0) return; // imagens ainda sem largura, espera o load
      track.style.setProperty("--marquee-shift", volta + "px");
      track.style.animationDuration = (volta / VELOCIDADE).toFixed(2) + "s";
    };

    ajusta();
    addEventListener("resize", ajusta);
    addEventListener("load", ajusta);
    track.querySelectorAll("img").forEach((img) => {
      if (!img.complete) img.addEventListener("load", ajusta, { once: true });
    });
  });

  /* ---------- Mapas: só carregam ao chegar perto ----------
     Cada iframe do Google traz ~750 KB de script proprio. Adiando isso, a
     pagina de contato abre leve e o mapa entra quando o visitante desce ate ele. */
  const mapas = document.querySelectorAll("iframe[data-src]");
  if (mapas.length) {
    const carrega = (f) => {
      if (f.dataset.src) { f.src = f.dataset.src; delete f.dataset.src; }
    };
    if (!("IntersectionObserver" in window)) {
      mapas.forEach(carrega);
    } else {
      const mo = new IntersectionObserver((entries, obs) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { carrega(e.target); obs.unobserve(e.target); }
        });
      }, { rootMargin: "300px 0px" });   // começa a carregar um pouco antes de aparecer
      mapas.forEach((f) => mo.observe(f));
    }
  }

  /* ---------- Ano no rodapé ---------- */
  const yearEl = document.querySelector("[data-year]");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Solução pré-selecionada no formulário ----------
     Os CTAs da página de Soluções chegam como contato.html?servico=valuation,
     então quem clicou em "Avaliar meu negócio" já encontra a opção escolhida. */
  const campoAssunto = document.getElementById("assunto");
  if (campoAssunto) {
    const pedido = new URLSearchParams(window.location.search).get("servico");
    if (pedido) {
      const opcao = Array.from(campoAssunto.options).find((o) => o.dataset.slug === pedido);
      if (opcao) {
        campoAssunto.value = opcao.value;
        campoAssunto.classList.add("is-prefilled");
        // avisa quem usa leitor de tela que o campo já veio preenchido
        const aviso = document.createElement("p");
        aviso.className = "field-hint";
        aviso.textContent = `Solução escolhida: ${opcao.textContent.trim()}. Pode trocar se preferir.`;
        campoAssunto.insertAdjacentElement("afterend", aviso);
      }
    }
  }

  /* ---------- Mensagens de erro em português ----------
     O texto padrão do navegador varia conforme o idioma do sistema; aqui a
     mensagem é sempre a mesma e fala a língua do visitante. */
  const mensagem = (campo) => {
    const v = campo.validity;
    if (v.valueMissing) {
      if (campo.type === "email") return "Informe o seu e-mail.";
      if (campo.type === "tel") return "Informe um telefone com DDD.";
      return "Preencha este campo.";
    }
    if (v.typeMismatch && campo.type === "email") return "Esse e-mail parece incompleto. Confira o endereço.";
    if (v.tooShort) return `Escreva pelo menos ${campo.minLength} caracteres.`;
    return "";
  };
  document.querySelectorAll("form[data-form] :is(input, select, textarea)").forEach((campo) => {
    const revalida = () => {
      campo.setCustomValidity("");
      if (!campo.checkValidity()) campo.setCustomValidity(mensagem(campo));
    };
    campo.addEventListener("input", revalida);
    campo.addEventListener("invalid", revalida);
    campo.addEventListener("blur", () => { revalida(); campo.classList.toggle("is-invalid", !campo.checkValidity()); });
  });

  /* ---------- Máscara de WhatsApp ----------
     Só formata o que a pessoa digita: (85) 99182-0220. Sem biblioteca e sem
     atrapalhar quem cola o número já pronto ou apaga no meio. */
  document.querySelectorAll('input[type="tel"]').forEach((campo) => {
    campo.addEventListener("input", () => {
      const d = campo.value.replace(/\D/g, "").slice(0, 11);
      if (!d) { campo.value = ""; return; }
      if (d.length <= 2) campo.value = "(" + d;
      else if (d.length <= 6) campo.value = `(${d.slice(0, 2)}) ${d.slice(2)}`;
      else if (d.length <= 10) campo.value = `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
      else campo.value = `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
    });
  });

  /* ---------- Envio dos formulários ----------
     O site é estático, então quem entrega o e-mail é o FormSubmit (o endereço
     de destino está no `action` de cada form). Aqui o envio é por fetch, para
     a pessoa receber a confirmação sem sair da página; se o fetch falhar, o
     formulário é submetido do jeito tradicional em vez de perder a mensagem.
     Sem JS nada disso roda e o POST normal do HTML resolve sozinho. */
  document.querySelectorAll("form[data-form]").forEach((form) => {
    // _next só serve ao fallback sem JS, e precisa de URL absoluta
    const next = form.querySelector("[data-next]");
    if (next) next.value = new URL(next.dataset.next, window.location.href).href;

    const btn = form.querySelector("[type=submit]");
    const rotulo = btn ? btn.innerHTML : "";
    // no rodapé o aviso vive fora do <form> (irmão), então procura também no pai
    const note =
      form.querySelector("[data-form-note]") ||
      (form.parentElement && form.parentElement.querySelector("[data-form-note]"));

    const avisa = (texto, erro) => {
      if (!note) return;
      note.textContent = texto;
      note.hidden = false;
      note.classList.add("is-visible");
      note.classList.toggle("is-erro", !!erro);
    };

    form.addEventListener("submit", (e) => {
      if (!form.checkValidity()) return;   // deixa o navegador apontar o campo
      e.preventDefault();
      // o botão da newsletter é só ícone: nesse não faz sentido trocar o texto
      if (btn) { btn.disabled = true; if (btn.textContent.trim()) btn.textContent = "Enviando..."; }

      const destino = form.action.replace("formsubmit.co/", "formsubmit.co/ajax/");
      fetch(destino, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      })
        .then((r) => { if (!r.ok) throw new Error(r.status); return r.json(); })
        .then(() => {
          avisa(form.dataset.ok || "Recebido. Em breve entramos em contato com você.");
          form.reset();
        })
        .catch(() => {
          // rede caiu ou o serviço recusou: manda do jeito tradicional
          form.submit();
        })
        .finally(() => {
          if (btn) { btn.disabled = false; btn.innerHTML = rotulo; }
        });
    });
  });

  /* ---------- Filtro de artigos + "ver mais" ----------
     Os cards já estão na página; aqui só se mostra e esconde, então filtrar e
     expandir é instantâneo. Sem JS, todos aparecem — nada fica inacessível.
     Regra: 6 visíveis por vez em qualquer tema; o resto entra no "Ver mais". */
  const grade = document.querySelector("[data-post-grid]");
  const botoes = document.querySelectorAll(".post-filter__btn");
  if (grade && botoes.length) {
    const POR_VEZ = 6;
    const cards = Array.from(grade.querySelectorAll(".post-card"));
    const contador = document.querySelector("[data-post-count]");
    const verMais = document.querySelector("[data-ver-mais]");
    let expandido = false;

    const aplica = (tema) => {
      const doTema = cards.filter((c) => tema === "todos" || c.dataset.cat === tema);
      const mostrar = expandido ? doTema : doTema.slice(0, POR_VEZ);
      cards.forEach((c) => { c.hidden = true; });
      mostrar.forEach((c) => { c.hidden = false; });

      botoes.forEach((b) => {
        const ativo = b.dataset.filtro === tema;
        b.classList.toggle("is-active", ativo);
        b.setAttribute("aria-pressed", String(ativo));
      });

      const restam = doTema.length - mostrar.length;
      if (verMais) {
        verMais.hidden = restam === 0;
        verMais.textContent = `Ver mais ${restam} ${restam === 1 ? "artigo" : "artigos"}`;
      }
      if (contador) {
        contador.textContent = doTema.length === mostrar.length
          ? `${doTema.length} ${doTema.length === 1 ? "artigo" : "artigos"}${tema === "todos" ? "" : " em " + tema}`
          : `Mostrando ${mostrar.length} de ${doTema.length} artigos${tema === "todos" ? "" : " em " + tema}`;
      }

      const url = new URL(window.location);
      if (tema === "todos") url.searchParams.delete("tema");
      else url.searchParams.set("tema", tema);
      history.replaceState(null, "", url);
    };

    const temaAtual = () =>
      document.querySelector(".post-filter__btn.is-active")?.dataset.filtro || "todos";

    botoes.forEach((b) =>
      b.addEventListener("click", () => {
        expandido = false;              // trocar de tema recolhe de volta para 6
        aplica(b.dataset.filtro);
      })
    );

    if (verMais) {
      verMais.addEventListener("click", () => {
        const antes = cards.filter((c) => !c.hidden).length;
        expandido = true;
        aplica(temaAtual());
        // leva o foco ao primeiro card novo, para quem navega por teclado
        const novos = cards.filter((c) => !c.hidden);
        const alvo = novos[antes];
        if (alvo) {
          const link = alvo.querySelector("h3 a");
          if (link) link.focus({ preventScroll: true });
          alvo.scrollIntoView({ block: "center", behavior: prefersReduced ? "auto" : "smooth" });
        }
      });
    }

    // permite chegar pelo link direto: blog.html?tema=Finanças
    const inicial = new URLSearchParams(window.location.search).get("tema");
    const existe = inicial && Array.from(botoes).some((b) => b.dataset.filtro === inicial);
    aplica(existe ? inicial : "todos");
  }

  /* ---------- Mapas de atuação (home) ----------
     Os lugares onde a Pharos atua já são pintados pelo CSS (lista de fill em
     styles.css) — isso continua valendo sem JS. Aqui entra o extra: marcar
     esses paths como .is-ativo e mostrar o nome por extenso embaixo do país.

     Duas formas de usar, porque celular não tem cursor:
       - com mouse: passar por cima destaca (o :hover fica no CSS);
       - sem mouse: tocar o estado no mapa OU tocar o botão com a sigla, que o
         JS monta abaixo de cada país e o CSS só exibe em telas sem cursor.
     Mexeu nesta lista, mexa também na lista de fill do CSS. */
  const LUGARES = {
    uf: {
      ce: "Ceará", rn: "Rio Grande do Norte", pb: "Paraíba", pe: "Pernambuco",
      pi: "Piauí", ma: "Maranhão", ba: "Bahia", mg: "Minas Gerais",
      sp: "São Paulo", rj: "Rio de Janeiro", pr: "Paraná",
    },
    us: { ca: "Califórnia", ga: "Geórgia", va: "Virgínia" },
    pt: { li: "Lisboa" },
  };

  const paises = [];  // {limpa} de cada país, pra um só listener de clique fora

  document.querySelectorAll(".atuacao__pais").forEach((pais) => {
    const slot = pais.querySelector("[data-estado]");
    const mapa = pais.querySelector(".atuacao__mapa");
    if (!slot || !mapa) return;

    // guarda o nome no próprio path: evita reconsultar o dicionário a cada hover
    const ativos = [];
    Object.keys(LUGARES).forEach((grupo) => {
      mapa.querySelectorAll("[data-" + grupo + "]").forEach((path) => {
        const sigla = path.dataset[grupo];
        const nome = LUGARES[grupo][sigla];
        if (!nome) return;
        path.classList.add("is-ativo");
        path.dataset.nome = nome;
        // no Brasil o botão cabe como sigla (CE, RN...); nos outros, o nome
        path.dataset.curto = grupo === "uf" ? sigla.toUpperCase() : nome;
        ativos.push(path);
      });
    });
    if (!ativos.length) return;

    /* SVG não tem z-index: quem vem depois no arquivo é desenhado por cima.
       Como o estado destacado cresce um pouco, os vizinhos seguintes cortavam
       o desenho (via-se bem em Lisboa). A saída é uma cópia de cada estado no
       fim do SVG, invisível em repouso: é ela que ganha o destaque, sempre por
       cima de todo mundo. A cópia não recebe ponteiro, então o mapa continua
       sendo clicado exatamente como antes.
       (Reordenar os originais resolveria o desenho, mas quebrava o clique:
       Minas Gerais passava a cobrir o Rio de Janeiro.) */
    const svg = mapa.querySelector("svg");
    ativos.forEach((path) => {
      const eco = path.cloneNode(false);
      eco.removeAttribute("class");
      Object.keys(eco.dataset).forEach((k) => delete eco.dataset[k]);
      eco.setAttribute("class", "atuacao__eco");
      svg.appendChild(eco);
      path.eco = eco;
    });

    const chips = document.createElement("div");
    chips.className = "atuacao__chips";

    const limpa = () => {
      slot.textContent = "";
      ativos.forEach((p) => p.eco.classList.remove("is-destacado"));
      chips.querySelectorAll("[aria-pressed='true']").forEach((b) =>
        b.setAttribute("aria-pressed", "false")
      );
    };

    const destaca = (path) => {
      limpa();
      slot.textContent = path.dataset.nome;
      path.eco.classList.add("is-destacado");
      const chip = chips.querySelector("[data-alvo='" + path.dataset.nome + "']");
      if (chip) chip.setAttribute("aria-pressed", "true");
    };

    // --- mouse: passar por cima mostra o nome, sair limpa ---
    mapa.addEventListener("pointerover", (e) => {
      if (e.pointerType !== "mouse") return;   // toque é tratado no clique
      const path = e.target.closest(".is-ativo");
      if (path) destaca(path);
    });
    mapa.addEventListener("pointerout", (e) => {
      if (e.pointerType !== "mouse") return;
      // só limpa ao sair de vez do mapa, não ao passar de um estado pro outro
      if (!e.relatedTarget || !mapa.contains(e.relatedTarget)) limpa();
    });

    // --- toque no próprio mapa ---
    mapa.addEventListener("click", (e) => {
      const path = e.target.closest(".is-ativo");
      if (!path) return limpa();
      destaca(path);
    });

    // --- botões, para quem não tem cursor ---
    // na ordem do dicionário (a do portfólio), não na ordem dos paths do SVG,
    // que sai embaralhada
    const ordem = Object.keys(LUGARES).flatMap((g) =>
      Object.keys(LUGARES[g]).map((sigla) => LUGARES[g][sigla])
    );
    ativos.sort((a, b) => ordem.indexOf(a.dataset.nome) - ordem.indexOf(b.dataset.nome));

    ativos.forEach((path) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "atuacao__chip";
      btn.textContent = path.dataset.curto;
      btn.dataset.alvo = path.dataset.nome;
      btn.setAttribute("aria-pressed", "false");
      btn.setAttribute("aria-label", path.dataset.nome);
      btn.addEventListener("click", () => {
        const jaAtivo = btn.getAttribute("aria-pressed") === "true";
        limpa();
        if (!jaAtivo) destaca(path);
      });
      chips.appendChild(btn);
    });
    pais.querySelector("figcaption").appendChild(chips);

    paises.push({ raiz: pais, limpa });
  });

  if (paises.length) {
    // clicar longe de qualquer mapa desfaz a seleção
    document.addEventListener("click", (e) => {
      paises.forEach((m) => { if (!m.raiz.contains(e.target)) m.limpa(); });
    });
  }

})();
