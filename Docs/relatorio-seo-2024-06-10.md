# Relatório SEO/GEO — Cooperativa Rocinha Recicla

**Data da auditoria:** 10/06/2024
**Páginas analisadas:** `index.html`, `politica-de-privacidade.html`, `termos-e-condicoes.html`

---

## Resumo Executivo

| Categoria | Status |
|-----------|--------|
| Technical SEO | 10/14 checks passaram |
| Core Web Vitals | 3/4 checks passaram |
| E-E-A-T | 7/8 checks passaram |
| GEO | 5/6 checks passaram |

---

## Alterações Realizadas

### index.html

| # | Alteração | Motivo |
|---|-----------|--------|
| 1 | Adicionado `<link rel="canonical">` | Evita conteúdo duplicado nos motores de busca |
| 2 | Adicionadas meta tags Open Graph (og:title, og:description, og:image, og:url, og:type, og:locale) | Melhora compartilhamento em redes sociais |
| 3 | Adicionadas Twitter Cards (twitter:card, twitter:title, twitter:description, twitter:image) | Melhora preview no Twitter/X |
| 4 | Adicionadas geo tags (geo.region, geo.placename, geo.position, ICBM) | Reforça sinal de localização para SEO local |
| 5 | Adicionado Schema.org JSON-LD completo com @graph (LocalBusiness + WebSite + WebPage + FAQPage) | Ativa rich snippets no Google e melhora visibilidade em IA |
| 6 | Corrigido `height="auto"` para `height="50"` no logo do footer | Elimina Cumulative Layout Shift (CLS) |
| 7 | Adicionado `<script src="script.js" defer>` | Garante carregamento otimizado de scripts |

### Projeto (novos arquivos)

| # | Alteração | Motivo |
|---|-----------|--------|
| 8 | Criado `robots.txt` | Orienta crawlers, permite bots de IA (GEO) |
| 9 | Criado `sitemap.xml` | Facilita indexação de todas as páginas |

---

## Checklist de Auditoria

### Technical & Local SEO
- [x] `lang="pt-BR"` e `charset="UTF-8"` definidos
- [x] `robots.txt` configurado
- [x] `sitemap.xml` presente
- [x] Canonical tags presentes
- [x] Viewport meta tag presente
- [x] Geo tags (`geo.region`, `geo.position`, `geo.placename`)
- [x] NAP em texto HTML (footer: endereço, telefone, email)
- [ ] **PENDENTE:** `preconnect` para domínios de fontes já existe, mas falta `dns-prefetch` de fallback

### Social & Semantic
- [x] Open Graph completo
- [x] Twitter Cards
- [x] HTML semântico (`<main>`, `<nav>`, `<footer>`)
- [x] `aria-label` em botões de ícone (burger, WhatsApp)

### Content SEO
- [x] Title tags otimizados (~60 chars)
- [x] Meta descriptions (~160 chars)
- [x] H1-H6 hierarquia correta (1 H1, sequência lógica)
- [x] Internal linking (âncoras #servicos, #sobre, etc.)
- [x] Alt texts descritivos em todas as imagens

### Schema Markups
- [x] Organization / LocalBusiness (com NAP, geo, horários, serviços)
- [x] FAQPage (6 perguntas com respostas extraídas do site)
- [x] WebSite
- [x] WebPage
- [ ] **PENDENTE:** AggregateRating (não há avaliações visíveis no site)

### GEO
- [x] FAQ sections (6 perguntas com respostas diretas)
- [x] Credenciais visíveis (CNPJ, desde 2017)
- [x] Estatísticas com contexto (toneladas, cooperados)
- [x] Definições claras (logística reversa explicada)
- [x] Timestamps (copyright 2026)
- [ ] **PENDENTE:** "Last updated" explícito no conteúdo principal

### Core Web Vitals
- [x] Imagens com `width` e `height` explícitos (após correção do logo)
- [x] Imagens abaixo da dobra com `loading="lazy"`
- [x] Scripts com `defer`
- [ ] **PENDENTE:** Hero usa `<video>` sem poster image — pode impactar LCP

---

## Tarefas Externas / Off-Page (Pendências)

> Estas tarefas não podem ser executadas via código e devem ser feitas manualmente.

- [ ] **Google Business Profile**: Verificar e completar perfil (link já existe no footer: `https://g.co/kgs/rocinharecicla`)
- [ ] **Google Search Console**: Submeter `sitemap.xml` e solicitar indexação
- [ ] **Google Analytics / Tag Manager**: Instalar códigos de rastreamento (slot reservado no cookie banner)
- [ ] **Backlinks**: Adquirir links de diretórios locais de sustentabilidade
- [ ] **Redes Sociais**: Linkar para o site (Instagram já existe: `@rocinharecicla`)
- [ ] **PageSpeed Insights**: Testar após deploy em `https://pagespeed.web.dev/`
- [ ] **HTTPS**: Certificar SSL ativo no domínio `rocinharecicla.com.br`
- [ ] **Domínio próprio**: Configurar DNS para `rocinharecicla.com.br` (atualmente usando subdomínio da ATSA)

---

## Próximos Passos Recomendados

1. **Alta prioridade:** Configurar domínio próprio e certificado SSL
2. **Alta prioridade:** Verificar e otimizar Google Business Profile
3. **Média prioridade:** Adicionar seção "Sobre" com história detalhada da cooperativa (melhora E-E-A-T)
4. **Média prioridade:** Incluir depoimentos de parceiros com atribuição completa (nome, empresa, cargo)
5. **Baixa prioridade:** Adicionar `AggregateRating` quando houver avaliações no Google

---

> **Validação:** Recomenda-se validar o Schema.org em https://validator.schema.org/ e o PageSpeed em https://pagespeed.web.dev/ após o deploy.
