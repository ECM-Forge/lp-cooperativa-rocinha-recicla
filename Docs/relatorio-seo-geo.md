# Relatório de Auditoria e Otimização SEO & GEO (AI Search)

**Projeto:** Cooperativa Rocinha Recicla  
**Data:** 20 de Julho de 2026  
**Especialista:** SEO & GEO Specialist Agent  

---

## 1. Otimizações Realizadas em Código (On-Page)

### 🏷️ 1.1 Otimização de Títulos e Meta Tags (Front-loading Strategy)
- **`index.html` Title:** Atualizado de `Cooperativa Rocinha Recicla — Transformando Resíduos em Oportunidade` para `Coleta Seletiva e Reciclagem na Rocinha RJ | Rocinha Recicla` (Front-loading de palavra-chave principal + localização + marca).
- **Tags Canônicas (`rel="canonical"`):** Adicionadas em todas as páginas (`index.html`, `politica-de-privacidade.html`, `termos-e-condicoes.html`).
- **Geo Tags Localizadas:** Inseridas tags de geolocalização (`geo.region: BR-RJ`, `geo.placename: Rio de Janeiro, Rocinha`, coordenadas `geo.position`).

### 📱 1.2 Redes Sociais & Compartilhamento (Open Graph & Twitter Cards)
- Adicionadas tags `og:locale`, `og:type`, `og:title`, `og:description`, `og:url`, `og:site_name`, `og:image` (apontando para o galpão da cooperativa) e `twitter:card`.

### 🤖 1.3 Dados Estruturados Schema.org / JSON-LD (Foco em GEO & Citações de IA)
- **`RecyclingCenter` (LocalBusiness):** Estruturado contendo Nome, CNPJ, Endereço completo (R. Bertha Lutz, 84), Coordenadas GPS, Telefone/WhatsApp, Email, Horário de Funcionamento e Avaliação no Google (4.5★ com 389 avaliações).
- **`FAQPage`:** Dados estruturados JSON-LD mapeando todas as 6 perguntas e respostas frequentes para captura direta por Snippets do Google, ChatGPT, Claude e Perplexity.

### ⚙️ 1.4 Arquivos Técnicos de Indexação
- **`robots.txt`:** Criado na raiz permitindo especificamente web crawlers de IA (`GPTBot`, `ChatGPT-User`, `ClaudeBot`, `PerplexityBot`, `Google-Extended`, `Amazonbot`) para garantir que o projeto seja citado em buscas conversacionais.
- **`sitemap.xml`:** Criado com prioridade e frequência de atualização das páginas do projeto.

### ⚡ 1.5 Performance & Core Web Vitals
- Adicionado o atributo `defer` ao script principal `script.js` para liberar o parseador HTML e melhorar o tempo de interatividade (INP/LCP).

---

## 2. Checklist de Dependências Externas (Off-Page / Fora do Código)

> ⚠️ **Importante:** Estas ações dependem de contas de terceiros e ações manuais fora do código do site.

- [ ] **Google Meu Negócio (GMB):** Verificar se os dados de Name, Address, Phone (NAP) no perfil do Google Maps batem exatamente com `R. Bertha Lutz, 84 — Rocinha, Rio de Janeiro - RJ, 22450-290` e telefone `(21) 99733-1428`.
- [ ] **Google Search Console:** Enviar o arquivo `sitemap.xml` (`https://www.rocinharecicla.com.br/sitemap.xml`) e solicitar indexação da URL principal.
- [ ] **Google Analytics / GA4:** Conectar o ID de acompanhamento no site caso deseje métricas de tráfego em tempo real.
- [ ] **PageSpeed Insights:** Testar a URL final após a publicação no servidor de hospedagem para validar a pontuação de LCP, CLS e INP em servidor real.
- [ ] **HTTPS / Certificado SSL:** Garantir o redirecionamento automático de HTTP para HTTPS na hospedagem.
- [ ] **Backlinks e Redes Sociais:** Manter o link oficial da Landing Page na bio do Instagram (`@rocinharecicla`), mapas e parceiros institucionais.
