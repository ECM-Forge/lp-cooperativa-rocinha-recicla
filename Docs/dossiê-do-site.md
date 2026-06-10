Quero que você crie o Site institucional "Impacto Verde" em 3 arquivos (index.html, style.css e script.js), usando APENAS HTML5 semântico, CSS3 (Flexbox, Grid, variáveis CSS) e JavaScript Vanilla ES6, sem qualquer framework ou biblioteca externa.
REGRA: Use imagens genéricas premium (Unsplash) relacionadas ao nicho caso não haja imagens reais. Inclua URLs diretas das imagens.
IDENTIDADE VISUAL BASE:
Paleta: #3A7D44 (verde floresta), #F5F0E8 (areia/creme), #1C1C1C (quase preto), #F4A01C (âmbar/garra), #FFFFFF (branco)
Tipografia: "Space Grotesk" (títulos, peso 700/800) + "Inter" (corpo, peso 400/500) — Google Fonts
Estilo: Ativismo urbano com sofisticação sustentável — contrastes fortes, texturas brutas, tipografia grande
Sensação: Força popular + responsabilidade ambiental + orgulho comunitário
LAYOUT ESCOLHIDO:
Hero: Opção A — Split assimétrico 60/40: texto e tagline impactante à esquerda com fundo #1C1C1C, foto do galpão de triagem com overlay verde #3A7D44 em clip-path diagonal à direita
Serviços: Opção F — Numeração grande (01, 02, 03…) como elemento visual dominante, com linha horizontal separadora e texto descritivo ao lado
Depoimentos: Opção A — Marquee infinito horizontal com cards em fundo #3A7D44 e texto branco
Sobre/Credenciais: Opção A — Counters animados (anos de atuação, toneladas processadas, famílias beneficiadas) + texto institucional + foto da equipe
ANIMAÇÕES DO PROJETO (derivadas do breakdown dos templates):

Logo/Nav: opacity: 0 → 1 em 400ms, easing: ease-out, trigger: load
Headline hero: translateY(40px) → translateY(0) + opacity: 0 → 1 em 700ms, easing: cubic-bezier(0.16,1,0.3,1), trigger: load, delay: 200ms
Subtítulo hero: mesma animação, delay: 400ms
Imagem hero (clip-path diagonal): scaleX(0) → scaleX(1) da esquerda para direita em 900ms, easing: cubic-bezier(0.16,1,0.3,1), trigger: load, delay: 300ms
Cards de serviço (numeração 01,02,03): translateY(60px) opacity:0 → translateY(0) opacity:1 em 600ms, easing: ease-out, trigger: IntersectionObserver (threshold 0.2), stagger: 150ms entre itens
Counters (sobre): incremento numérico de 0 ao valor final em 1800ms, easing: linear, trigger: IntersectionObserver
Seção de fotos (galeria impacto): scale(0.92) opacity:0 → scale(1) opacity:1 em 500ms, easing: ease-out, trigger: IntersectionObserver, stagger: 100ms
FAQ accordion: max-height: 0 → auto com opacity: 0 → 1 em 300ms, easing: ease-in-out, trigger: click
Barra marquee parceiros/serviços: loop infinito horizontal a 40px/s, trigger: load
Botões CTA: background: transparente → #3A7D44 + translateY(-2px) em 200ms, easing: ease, trigger: hover

SEÇÕES OBRIGATÓRIAS:

Navbar — logo à esquerda, links âncora à direita, fundo transparente que vira #1C1C1C no scroll, CTA "Fale Conosco" em #F4A01C
Hero Split 60/40 — tagline "Transformando Resíduos em Oportunidade" / "Da Rocinha para o Mundo"
Seção Dor + Solução — "Seu lixo tem destino? O da Rocinha tem." — fundo #F5F0E8, texto sobre o problema do descarte incorreto e a solução da cooperativa
Barra animada horizontal (marquee) — nome / serviços / área de atendimento / CNPJ
Serviços — numeração 01→09 com descrição, ícone SVG e linha separadora
Galeria de Impacto — 6 fotos reais disponíveis (fardos de PET, plásticos, papelão, galpão) + complementar com Unsplash
Sobre / Credenciais — counters animados: 9 anos de atuação | fundada em 2017 | Rio de Janeiro | Coleta seletiva desde a Rocinha — foto da equipe + história institucional
Avaliações Google — seção com logo Google, nota 4.5★ (dado real do Place ID) e cards animados em marquee
FAQ — perguntas sobre coleta seletiva, como fechar parceria, logística reversa, documentação ambiental
Localização — endereço R. Bertha Lutz, 84 - Rocinha + iframe do mapa + botão "Como Chegar" + contatos
CTA com formulário — "Seja um parceiro ou agende sua coleta" + campos: Nome, Empresa, Telefone, Tipo de Parceria, Mensagem
Rodapé + Créditos

RODAPÉ — coluna de contato (com ícones, todos clicáveis):

Nome → Cooperativa Rocinha Recicla (link Google Business Place ID: ChIJD7TikCDUmwAR7_NAAT179cg)
Endereço → R. Bertha Lutz, 84 - Rocinha, Rio de Janeiro - RJ, 22450-290 → link Google Maps rota: https://www.google.com/maps/dir//Complexo+Esportivo+da+Rocinha...
Telefone/WhatsApp: (21) 99733-1428 → link https://wa.me/5521997331428
E-mail: rocinharecicla@gmail.com → mailto:
Instagram: @rocinharecicla → https://www.instagram.com/rocinharecicla/
Horário: Seg–Sex 08h–17h / Sáb 08h–12h / Dom Fechado

CRÉDITOS:
Esquerda: © Cooperativa Rocinha Recicla 2026
Direita: Desenvolvido por ATSA Consultoria (em destaque na cor #3A7D44, link para www.atsaconsultoria.com.br)
DIRETRIZES ANTI-GENÉRICO:

Sem hero centralizado com fundo escuro e texto branco genérico
Sem fade-up igual em todas as seções
Sem paleta azul + branco + cinza
Sem 3 colunas de ícone + título + texto

QUALIDADE DE CÓDIGO:

HTML semântico + IDs de ancoragem em todas as seções
Variáveis CSS no :root para cores, fontes e espaçamentos
Mobile-first com media queries
IntersectionObserver para animações de scroll (nunca scroll event direto)
will-change: transform, @media (prefers-reduced-motion), lazy loading
Formulário com validação real (campos obrigatórios, formato de e-mail, feedback visual)

OPCIONAL aplicável ao nicho:

Barra animada horizontal: "Rocinha Recicla ♻ Coleta Seletiva ♻ Logística Reversa ♻ Rio de Janeiro ♻ CNPJ 28.695.111/0001-89"
Seção de avaliações Google com logo oficial e cards animados (nota 4.5 — base real fornecida)


1 — MÍDIAS PRINCIPAIS
Disponíveis (13 fotos + logo + 6 vídeos):
#ArquivoDescriçãoUso sugerido1logo-desktop-cooperativa_rocinha_recicla.webpLogo circular verde com ilustração da Rocinha e setas de reciclagemNavbar, rodapé, favicon2cooperativa_rocinha_recicla-reciclagem-rocinha__1_.webpFardo de embalagens/papelão prensadoSeção de impacto / galeria3cooperativa_rocinha_recicla-reciclagem-rocinha__2_.webpFardo de plásticos vermelhos/cestos prensadosSeção de impacto / galeria4cooperativa_rocinha_recicla-reciclagem-rocinha__3_.webpGalpão interno com sacões de garrafas PET e banner "Aqui Funciona um Polo"Destaque na seção Sobre5cooperativa_rocinha_recicla-reciclagem-rocinha__4_.webpFardo de plásticos azuis/HDPE prensadosSeção de impacto / galeria6cooperativa_rocinha_recicla-reciclagem-rocinha__9_.webpFardo de garrafas PET misto (coloridas)Hero ou galeria7Print-instagram.pngPrintscreen do perfil Instagram — feed variado com equipe, eventos, parcerias, educaçãoReferência de conteúdo
Ausentes (ver checklist): Foto da fachada externa, fotos de equipe em ação (triagem), foto dos fundadores/proprietários, mais fotos do espaço interno. 6 vídeos citados, mas não enviados.

2 — INFORMAÇÕES DA EMPRESA
Nome: Cooperativa Rocinha Recicla
CNPJ: 28.695.111/0001-89
Nicho: Cooperativa de Reciclagem, Gestão de Resíduos e Logística Reversa
Fundação: Julho de 2017 (cooperativa) | 9 anos de atuação na área
Localização: R. Bertha Lutz, 84 - Rocinha, Rio de Janeiro - RJ, CEP 22450-290
Descrição institucional: A Cooperativa Rocinha Recicla atua na coleta seletiva, triagem e destinação correta de resíduos recicláveis, promovendo impacto ambiental positivo, geração de renda e inclusão social através da reciclagem e da logística reversa.
Proposta de valor: Revolucionar a reciclagem dentro e fora das favelas do Rio, transformando resíduos em oportunidade de renda e inclusão social.
Público-alvo: Empresas e condomínios que precisam de coleta seletiva e documentação ambiental; órgãos públicos parceiros; moradores da Rocinha e entorno; organizações que buscam logística reversa.
Principais serviços (5):

Coleta seletiva (residencial, comercial e em eventos)
Triagem e separação de resíduos recicláveis
Logística reversa
Destinação ambientalmente adequada de resíduos
Educação ambiental e ações socioambientais

Lista completa de serviços: Coleta seletiva residencial / Coleta seletiva comercial / Coleta seletiva em eventos / Triagem de resíduos recicláveis / Comercialização de recicláveis / Logística reversa / Emissão de documentação ambiental e relatórios / Apoio a projetos socioambientais / Educação ambiental / Palestras e oficinas / Gestão de resíduos para empresas / Parcerias com condomínios e comércios / Apoio a ações comunitárias / Projetos de inclusão produtiva e geração de renda / Consultoria básica em descarte consciente
Diferenciais: Origem comunitária (Rocinha) / Impacto social direto + ambiental / Parcerias institucionais com órgãos públicos e empresas / 9 anos de atuação / Emissão de documentação ambiental / Modelo de startup de reciclagem dentro da favela
História: Nasceu da comunidade da Rocinha com foco em reciclagem, sustentabilidade e geração de oportunidades. Ao longo dos anos ampliou parcerias com empresas, órgãos públicos e instituições de gestão de resíduos, fortalecendo ações ambientais e sociais dentro e fora da comunidade.
Contato:

Telefone/WhatsApp: (21) 99733-1428
E-mail: rocinharecicla@gmail.com
Endereço: R. Bertha Lutz, 84 - Rocinha, Rio de Janeiro - RJ, 22450-290
Horário: Seg–Sex 08h–17h / Sáb 08h–12h / Dom Fechado

Links:

Instagram: https://www.instagram.com/rocinharecicla/ (@rocinharecicla)
Google Maps rota: https://www.google.com/maps/dir//Complexo+Esportivo+da+Rocinha+-+R.+Bertha+Lutz,+84+-+Rocinha,+Rio+de+Janeiro+-+RJ,+22450-290/...
Place ID Google: ChIJD7TikCDUmwAR7_NAAT179cg
Site atual: não informado


3 — AVALIAÇÕES
(Nota: As avaliações do Google com texto individual não foram fornecidas no formulário. Os dados do Place ID indicam 389 avaliações com nota 4.5, mas os textos individuais dos clientes não foram anexados ao material enviado. Não é possível listar avaliações sem inventar dados.)
Plataforma: Google Meu Negócio
Total de avaliações: 389 (referência ao Complexo Esportivo da Rocinha — Place ID fornecido)
Nota média: 4.5 ★
⚠️ ATENÇÃO: Os textos das avaliações individuais não foram enviados no material. O site deverá exibir a nota e o volume como prova social, mas os textos de depoimentos precisam ser coletados diretamente da conta Google ou fornecidos pelo cliente antes da construção da seção de depoimentos.

4 — ANÁLISE DE BRANDING
Nicho: Cooperativa de Reciclagem / Gestão de Resíduos / Impacto Social
Posicionamento: Médio-popular com viés de propósito e ativismo — não é luxury, mas deve ser tratado com seriedade e orgulho institucional acima da média do segmento
Estilo visual predominante:
Ativismo Sustentável Urbano — mescla de design de impacto social (tipografia pesada, contrastes fortes, energia gráfica) com identidade comunitária autêntica. Referência ao movimento de cooperativas cariocas e à estética de organizações de base popular que conquistaram credibilidade institucional.
Paleta de cores recomendada:
CorHexUsoVerde Floresta#3A7D44Primária — ações, botões, destaques, seções âncoraCreme/Areia#F5F0E8Fundo secundário — seções de conteúdo, leiturabilidadeQuase Preto#1C1C1CFundo hero, textos principais, navbar ao scrollÂmbar/Garra#F4A01CAcentuação — CTAs principais, números grandes, destaquesBranco Puro#FFFFFFFundo de cards, textos sobre verde/preto
Justificativa da paleta: O verde vem diretamente da logo e remete à identidade ambiental. O preto quase absoluto dá peso institucional e contrasta com o verde para criar impacto visual. O âmbar (presente nos edifícios coloridos da logo) adiciona energia e urgência sem cair no clichê "ecológico genérico". O creme evita o branco frio e dá textura orgânica ao layout.
Direção estética: Broken grid contido — assimetria controlada com uso de tipografia grande como elemento visual, fotos de trabalho real (fardos, galpão) sem glamour excessivo, mostrando autenticidade. Evitar: paletas totalmente verdes, ícones genéricos de folha/planeta, estética "greenwashing corporativo".
Sensação de marca: "Isso é real. Isso é daqui. Isso funciona." — orgulho de origem, seriedade ambiental, energia popular carioca.
Referências premium do mesmo nicho:

Cataki (app de reciclagem BR) — identidade visual forte, tipografia ousada
Recology (EUA) — institucional sólido para cooperativas de resíduos
Green City Solutions (Alemanha) — impacto + design contemporâneo
Movimento Nossa Lixo (BR) — ativismo visual com propósito


5 — CHECKLIST DE PENDÊNCIAS
MÍDIAS AUSENTES:

❌ Foto da fachada externa do local (R. Bertha Lutz, 84)
❌ Fotos da equipe em ação (triagem, separação de materiais)
❌ Foto dos fundadores/líderes da cooperativa
❌ Foto de evento ou ação educacional
❌ 6 vídeos citados no formulário — não foram enviados (essenciais para seção de impacto)
❌ Mais fotos do galpão (interior amplo, processo de trabalho)

CONTATOS/LINKS AUSENTES:

❌ Site atual — não informado (confirmar se existe)
❌ Facebook — não informado
❌ LinkedIn — não informado
❌ Link direto do Google Business (perfil verificado) — Place ID fornecido mas perfil consta como "Not Verified"
❌ Link de avaliação direta no Google

CONTEÚDO AUSENTE:

❌ Textos individuais das avaliações Google (389 avaliações / 4.5★ — precisam ser copiados)
❌ Números de impacto mensuráveis (toneladas processadas por mês/ano, famílias beneficiadas, número de cooperados)
❌ Lista de parceiros institucionais com logos (para seção "Nossos Parceiros")
❌ Documentação ambiental / certificados para exibição

DOCUMENTAÇÃO:

✅ CNPJ: 28.695.111/0001-89 — presente
❌ Registro profissional específico (CREA, IBAMA, licença ambiental) — não informado


6 — ANÁLISE DE REFERÊNCIAS WEBFLOW
TEMPLATE 1 — EcoMission
URL: https://webflow.com/templates/html/ecomission-website-template
Preview: https://ecomission-wbs.webflow.io/
HERO: Proporção fullscreen com vídeo em loop ao fundo (natureza/verde). Título centralizado com tamanho ~6–7vw, texto branco, subtítulo menor em ~1.4rem. Elemento diferenciador: badge "Introducing EcoMission" em label pequeno acima do título. Animação de entrada: título faz fade-up em ~600ms + imagem hero aparece à direita com slide da direita para centro em ~800ms, load trigger.
NAV: Fundo transparente vira escuro sólido no scroll. Links com underline deslizante no hover (pseudo-element width 0→100% em 250ms). CTA "Contact Us" em botão verde sólido.
TIPOGRAFIA: Títulos em fonte sans-serif moderna (similar a DM Sans/Plus Jakarta), peso 700-800, ~5–7vw em desktop. Corpo em ~1rem/1.6 line-height, peso 400. Uso criativo: label uppercase tracking-widest em seções como marcador de seção.
CORES USADAS NO TEMPLATE (substituir pela paleta Rocinha): Verde primário (manter #3A7D44), fundo escuro (usar #1C1C1C), branco e creme (usar #F5F0E8).
SERVIÇOS/CARDS: Grade de 4 cards por linha em desktop, cards com ícone SVG no topo, título, texto curto e link "Learn More". Espaçamento generoso ~40px gap. Fundo branco com sombra sutil no hover.
ANIMAÇÕES:

Cards serviços → translateY(30px) opacity:0 → translateY(0) opacity:1 em 500ms, easing: ease-out, trigger: IntersectionObserver, stagger: sim (100ms)
Números (counters) → incremento de 0 ao valor em 2000ms, easing: ease-in-out, trigger: IntersectionObserver
Seção hero imagem → clip-path: inset(0 100% 0 0) → inset(0 0% 0 0) em 900ms, trigger: load
Barra de parceiros → marquee/ticker infinito horizontal, sem pausa, velocidade constante

MICRO-INTERAÇÕES: Botões com scale(1.02) no hover + sombra verde. Cards levantam 4px no hover com transição de sombra.
ELEMENTOS DECORATIVOS: Formas SVG orgânicas (blob) em verde translúcido no canto das seções. Linha divisória horizontal fina entre seções. Textura sutil de ruído no hero.
RESUMO CONSTRUTIVO: Recriar o EcoMission para a Rocinha Recicla significa manter a estrutura de impacto com vídeo/imagem dominante no hero, mas substituir a estética "natureza verde suave" pela força urbana carioca. Usar o preto como fundo do hero ao invés de imagem, colocar a foto real do galpão em clip diagonal e aplicar os counters de impacto com os dados reais da cooperativa. A estrutura de serviços com cards funcionou bem — adaptar com numeração em vez de ícones, seguindo a escolha do layout F.

TEMPLATE 2 — GreenPulse
URL: https://webflow.com/templates/html/greenpulse-charity-website-template
Preview: https://greenpulse-template.webflow.io/
HERO: Fullscreen com imagem fotográfica de alta saturação cobrindo 100% do viewport. Título de ~5vw centralizado, branco sobre imagem com overlay escuro. Badge introdutório "Introducing GreenPulse" acima do título. CTA primário "Book an appointment" em verde sólido + CTA secundário outline. Elemento diferenciador: contadores de impacto imediatamente abaixo do hero (70+ reforestation, 75k acres, 175M trees, 750+ volunteers) em linha horizontal — muito eficaz para credibilidade imediata.
NAV: Sticky com fundo escuro desde o início. Logo SVG branca à esquerda. Links brancos com hover em verde. Sem hamburger em desktop.
TIPOGRAFIA: Títulos em serif moderno (similar a Playfair) para headlines + sans-serif para corpo. Contraste interessante que pode ser adaptado para Space Grotesk (mais urbano) na Rocinha Recicla.
CORES: Verde escuro #2A6B3C (adaptar para #3A7D44), amarelo ocre em destaques (adaptar para #F4A01C), branco e cinza claro.
SERVIÇOS/CARDS: Seção "Our Features" com 3 cards por linha, ícone SVG personalizado + título + texto. Grade simétrica com padding interno generoso. Background alternando entre branco e verde escuro em seções intercaladas — técnica de alternância de fundos que mantém o scroll dinâmico.
ANIMAÇÕES:

Hero imagem de fundo → Ken Burns effect (scale 1→1.05) contínuo em 8000ms, easing: linear, loop infinito, trigger: load
Badges "label" → translateX(-20px) opacity:0 → translateX(0) opacity:1 em 400ms, delay: 100ms, trigger: load
Contadores → incremento numérico de 0 ao final em 1500ms, trigger: IntersectionObserver
Depoimentos → carrossel com fade cross-dissolve entre cards em 300ms, trigger: auto-interval (5000ms) + clique

MICRO-INTERAÇÕES: Cards com border-left verde aparecendo no hover (width 0→4px em 200ms). Botões verdes com background escurecendo 10% no hover.
ELEMENTOS DECORATIVOS: Linha horizontal fina abaixo do nav. Divisórias de seção com wave SVG suave entre seções de cor diferente. Quotes com aspas tipográficas em tamanho ~80px como decoração.
RESUMO CONSTRUTIVO: O GreenPulse traz uma abordagem mais "cause marketing" com foco em números de impacto logo após o hero — extremamente aplicável à Rocinha Recicla. Replicar a faixa de counters horizontais logo abaixo do hero, usando dados reais da cooperativa. A alternância de seções claras/escuras com o verde como cor de separação cria ritmo de leitura excelente. Adaptar substituindo a paleta genérica verde-claro pela identidade mais urbana e quente da Rocinha, com o âmbar #F4A01C substituindo os destaques amarelados do template original.

7 — SISTEMA DE VARIAÇÃO DE LAYOUT
HERO: ✅ A) Split assimétrico 60/40 — texto e tagline poderosa à esquerda (fundo #1C1C1C), foto real do galpão/fardos com clip-path diagonal à direita (overlay #3A7D44 40% opacity). Elemento diferenciador: tag "Desde 2017 • Rocinha • Rio de Janeiro" acima do título em uppercase tracking amplo.
TIPO DE FUNDO HERO: Foto real do galpão interno (imagem 4 — sacões de PET com banner "Aqui Funciona um Polo") com overlay diagonal verde, ou fardo de garrafas PET coloridas (imagem 9) como textura de fundo em corte diagonal.
SERVIÇOS: ✅ F) Numeração grande (01, 02, 03…) — números em #F4A01C tamanho ~8vw como elemento decorativo, com linha horizontal fina separadora e título + texto curto à direita. Disposição em lista vertical fluindo naturalmente.
DEPOIMENTOS: ✅ A) Marquee infinito horizontal — cards em fundo #3A7D44, texto branco, estrelas âmbar. Velocidade moderada, pausa no hover. Exibir nota 4.5★ com logo Google e "389 avaliações" como credencial fixa acima da faixa.
SOBRE / CREDENCIAIS: ✅ A) Counters animados + texto — 4 counters em linha: 9 anos de atuação / 2017 fundação / 5 tipos de serviço / + parcerias públicas e privadas. Texto institucional curto ao lado (split 50/50). Foto do galpão (imagem 3 com banner) como background com overlay.