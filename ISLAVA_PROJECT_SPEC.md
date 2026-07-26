# ISLAVA — Especificação Funcional do Projeto

> **Website de referência:** [https://www.islava.eu/pt](https://www.islava.eu/pt)  
> **Versão do documento:** 1.1  
> **Última atualização:** Julho 2026

---

## Índice

1. [Visão Geral](#1-visão-geral)
2. [Objetivo Principal](#2-objetivo-principal)
3. [Stack Tecnológica](#3-stack-tecnológica)
4. [Organização do Projeto](#4-organização-do-projeto)
5. [Design e Identidade Visual](#5-design-e-identidade-visual)
6. [Responsividade](#6-responsividade)
7. [Componentes](#7-componentes)
8. [Conteúdo](#8-conteúdo)
9. [Internacionalização (i18n)](#9-internacionalização-i18n)
10. [Galeria](#10-galeria)
11. [Gestão da Galeria](#11-gestão-da-galeria)
12. [Cores](#12-cores)
13. [Tipografia](#13-tipografia)
14. [SEO](#14-seo)
15. [Performance](#15-performance)
16. [Acessibilidade](#16-acessibilidade)
17. [Padrões de Código](#17-padrões-de-código)
18. [Fora de Âmbito](#18-fora-de-âmbito)
19. [Filosofia de Desenvolvimento](#19-filosofia-de-desenvolvimento)
20. [Objetivo Final](#20-objetivo-final)
21. [Processo de Desenvolvimento e Critérios de Conclusão](#21-processo-de-desenvolvimento-e-critérios-de-conclusão)

---

## 1. Visão Geral

### 1.1 Descrição do Projeto

Desenvolver um **novo website institucional** para a **ISLAVA** — loja de mega hair — recriando visualmente o website atual disponível em [https://www.islava.eu/pt](https://www.islava.eu/pt).

### 1.2 Princípios Fundamentais

| Princípio | Descrição |
|-----------|-----------|
| **Recriação visual** | O resultado deve ser visualmente muito semelhante ao website atual, de forma que qualquer visitante o reconheça imediatamente. |
| **Código novo** | O objetivo **não** é copiar o código existente. Todo o website deve ser desenvolvido **de raiz**. |
| **Stack moderna** | Utilizar tecnologias atuais, organizadas e fácies de manter. |
| **Simplicidade** | Website institucional simples, elegante e preparado para pequenas atualizações futuras. |

### 1.3 Website de Referência — Estrutura Atual

Com base na análise do website existente, identificam-se as seguintes secções e conteúdos a reproduzir:

| Secção | Conteúdo principal |
|--------|-------------------|
| **Hero / Banner** | Slogan principal, mensagem institucional, call-to-action |
| **Produtos** | Mega Hair Natural, Cacheado, Liso; sistemas Tape e Keratin |
| **Benefícios** | Sem quantidade mínima, entrega em 48h, preços premium, troca facilitada, garantia 100% natural, atendimento personalizado |
| **Galeria** | Fotografias e vídeos de trabalhos realizados |
| **Sobre nós** | Apresentação da empresa e equipa |
| **FAQ** | Perguntas frequentes sobre extensões de cabelo |
| **Contacto** | Formulário (nome, email, telefone, mensagem) |
| **Cabeçalho** | Navegação, logótipo, alternância de idioma |
| **Rodapé** | Informações institucionais, links e contactos |

> **Nota:** Durante o desenvolvimento, analisar cuidadosamente **todas** as páginas e rotas do website atual e recriá-las integralmente.

---

## 2. Objetivo Principal

O principal objetivo deste projeto é que o **proprietário consiga manter o website praticamente sem conhecimentos de programação**.

### 2.1 Contexto de Manutenção

- As alterações devem ser simples de efetuar utilizando o **Cursor** ou outra ferramenta de IA.
- O website será atualizado apenas **uma ou duas vezes por ano**.
- Privilegiar sempre soluções **simples e intuitivas**.
- Evitar **overengineering**.
- Sempre que existirem duas soluções técnicas equivalentes, **escolher a mais simples**.

### 2.2 Pergunta Orientadora

Antes de qualquer decisão técnica, validar:

> *"Será que isto torna a manutenção mais fácil para uma pessoa que apenas atualiza o website duas vezes por ano?"*

Se a resposta for **não**, escolher uma solução mais simples.

---

## 3. Stack Tecnológica

| Tecnologia | Finalidade |
|------------|------------|
| **React 19** | Framework UI |
| **Vite** | Build tool e dev server |
| **TypeScript** | Tipagem estática |
| **Tailwind CSS** | Estilização utilitária |
| **React Router** | Navegação e rotas |
| **react-i18next** | Internacionalização (PT / EN) |
| **Supabase** | Apenas preparado para utilização futura (sem implementação ativa) |

### 3.1 Política de Dependências

- **Evitar** instalar bibliotecas npm desnecessárias.
- Antes de adicionar uma nova dependência, verificar se a funcionalidade pode ser implementada **facilmente** apenas com **React**, **TypeScript** e **Tailwind CSS**.
- Sempre que existirem duas soluções equivalentes, preferir **zero dependências extra**.
- Exemplos de funcionalidades a implementar nativamente quando possível: accordion (FAQ), lightbox, carousel simples, alternância de idioma, animações CSS.

---

## 4. Organização do Projeto

### 4.1 Estrutura de Pastas

```
src/
├── assets/          # Imagens, ícones, logótipos
├── components/      # Componentes reutilizáveis
├── layouts/         # Layouts de página (ex.: MainLayout)
├── pages/           # Páginas / rotas
├── hooks/           # Custom hooks
├── services/        # Serviços (ex.: Supabase, fetch da galeria)
├── styles/          # Estilos globais, tokens de design
├── types/           # Tipos TypeScript
├── utils/           # Funções utilitárias
└── locales/         # Ficheiros de tradução
    ├── pt.json
    └── en.json

public/
├── gallery/
│   ├── images/      # Fotografias da galeria
│   ├── videos/      # Vídeos da galeria
│   └── gallery.json # Metadados da galeria
├── robots.txt
└── favicon
```

### 4.2 Princípios de Arquitetura

- **Não** criar arquiteturas demasiado complexas.
- **Não** utilizar padrões enterprise.
- Estrutura **fácil de compreender** por qualquer pessoa com conhecimentos básicos de React.
- Cada pasta deve ter um propósito claro e único.

---

## 5. Design e Identidade Visual

### 5.1 Objetivo

Analisar cuidadosamente o website atual e reproduzir fielmente:

- Identidade visual
- Disposição das secções
- Cores
- Tipografia
- Logótipos
- Ícones
- Rodapé
- Cabeçalho
- Banners
- Aparência geral

### 5.2 Requisitos

- Qualquer visitante deve **reconhecer imediatamente** o website.
- Melhorar apenas aquilo que fizer sentido, **sem alterar a identidade visual**.
- **Não copiar** HTML nem CSS do website existente — implementar tudo em React com Tailwind.

---

## 6. Responsividade

O website deve funcionar corretamente em todos os dispositivos:

| Dispositivo | Requisito |
|-------------|-----------|
| **Desktop** | Layout completo, todas as secções visíveis |
| **Laptop** | Adaptação fluida do layout desktop |
| **Tablet** | Navegação e secções reorganizadas |
| **Smartphone** | Menu mobile, secções empilhadas, galeria com swipe |

Todo o layout deve adaptar-se corretamente, sem quebras visuais ou funcionalidades inacessíveis.

---

## 7. Componentes

### 7.1 Abordagem

Criar componentes reutilizáveis **apenas quando fizer sentido**. Evitar criar dezenas de componentes pequenos sem necessidade.

### 7.2 Componentes Previstos

| Componente | Responsabilidade |
|------------|------------------|
| `Navbar` | Cabeçalho, navegação, alternância de idioma |
| `Footer` | Rodapé institucional |
| `Hero` | Banner principal com CTA |
| `Section` | Wrapper genérico para secções de conteúdo |
| `Gallery` | Grid de fotografias e vídeos |
| `Lightbox` | Visualização ampliada de media |
| `Card` | Cartões de produto, benefício, etc. |
| `Button` | Botões reutilizáveis |
| `Container` | Limitador de largura e padding consistente |

---

## 8. Conteúdo

### 8.1 Separação Conteúdo / Layout

- **Não** escrever textos diretamente dentro dos componentes React.
- Sempre que possível, **separar o conteúdo do layout**.
- Textos visíveis ao utilizador devem residir nos ficheiros de tradução (`locales/`).
- Conteúdo estruturado (ex.: lista de benefícios, FAQ) pode residir em ficheiros JSON ou nos locales, conforme fizer mais sentido para manutenção.

---

## 9. Internacionalização (i18n)

### 9.1 Idiomas Suportados

| Código | Idioma |
|--------|--------|
| `pt` | Português (idioma predefinido) |
| `en` | Inglês |

### 9.2 Implementação

- Utilizar **react-i18next**.
- Criar os ficheiros:
  - `src/locales/pt.json`
  - `src/locales/en.json`
- **Todos** os textos devem estar nestes ficheiros.
- **Proibido** texto hardcoded nos componentes.

### 9.3 Alternância de Idioma

- Criar um **botão simples** para alternar entre PT e EN.
- **Guardar** o idioma escolhido (ex.: `localStorage`) para persistir entre visitas.
- URLs devem refletir o idioma ativo (ex.: `/pt`, `/en` ou prefixo equivalente).

---

## 10. Galeria

A galeria deve ser **completamente redesenhada** com experiência moderna.

### 10.1 Comportamento

Ao clicar numa fotografia ou vídeo, abrir um **Lightbox** com as seguintes características:

| Funcionalidade | Descrição |
|----------------|-----------|
| Imagem em tamanho grande | Visualização em alta resolução |
| Vídeo em tamanho grande | Reprodução inline no lightbox |
| Fundo escurecido | Overlay semi-transparente |
| Animação suave | Transições de abertura, fecho e navegação |
| Botão fechar | Controlo visual explícito |
| Tecla ESC | Fecha o lightbox |
| Clicar fora | Fecha o lightbox |
| Navegação | Botões seguinte / anterior |
| Swipe | Navegação por gesto em dispositivos móveis |
| Zoom | Ampliar imagens dentro do lightbox |

---

## 11. Gestão da Galeria

### 11.1 Objetivo

Permitir adicionar fotografias e vídeos **sem editar código React**.

### 11.2 Estrutura de Ficheiros

```
public/gallery/
├── images/       # Fotografias (.jpg, .png, .webp, etc.)
├── videos/       # Vídeos (.mp4, .webm, etc.)
└── gallery.json  # Metadados de todos os items
```

### 11.3 Formato do `gallery.json`

```json
[
  {
    "type": "image",
    "file": "evento01.jpg",
    "title_pt": "Cerimónia",
    "title_en": "Ceremony"
  },
  {
    "type": "video",
    "file": "apresentacao.mp4",
    "title_pt": "Apresentação",
    "title_en": "Presentation"
  }
]
```

### 11.4 Procedimento para Adicionar Media

1. Copiar o ficheiro para `public/gallery/images/` ou `public/gallery/videos/`.
2. Adicionar uma entrada correspondente em `public/gallery/gallery.json`.

**Nada mais.** Sem alterações em componentes, sem rebuild especial, sem painel de administração.

---

## 12. Cores

- Identificar automaticamente a **paleta de cores** utilizada pelo website atual.
- **Centralizar** todas as cores num único local (ex.: `tailwind.config.js` ou ficheiro de tokens em `src/styles/`).
- **Evitar** cores espalhadas ou hardcoded nos componentes.
- Utilizar variáveis semânticas quando possível (ex.: `primary`, `secondary`, `accent`, `background`).

---

## 13. Tipografia

- Identificar automaticamente a **fonte** utilizada no website atual.
- Caso não seja possível obter a fonte original, utilizar a **mais semelhante disponível no Google Fonts**.
- Centralizar a configuração tipográfica (família, pesos, tamanhos) num único local.
- Garantir legibilidade em todos os tamanhos de ecrã.

---

## 14. SEO

Preparar os seguintes elementos:

| Elemento | Descrição |
|----------|-----------|
| `robots.txt` | Instruções para motores de busca |
| **Favicon** | Ícone do website em múltiplos formatos |
| **Open Graph** | Meta tags para partilha em redes sociais (`og:title`, `og:description`, `og:image`, etc.) |
| **Meta tags** | `title`, `description`, `keywords`, `lang`, viewport |

As meta tags devem ser configuráveis por idioma.

---

## 15. Performance

| Técnica | Aplicação |
|---------|-----------|
| **Lazy loading** | Imagens e componentes abaixo da dobra |
| **Code splitting** | Rotas carregadas sob demanda (React Router + Vite) |
| **Imagens otimizadas** | Formatos modernos (WebP), dimensões adequadas, compressão |

---

## 16. Acessibilidade

| Requisito | Implementação |
|-----------|---------------|
| **Texto alternativo** | Atributo `alt` em todas as imagens |
| **Labels ARIA** | `aria-label` em botões e controlos sem texto visível |
| **Contraste** | Cores com contraste adequado (WCAG AA mínimo) |
| **Navegação por teclado** | Todos os elementos interativos acessíveis via teclado |
| **Focus visible** | Indicadores de foco visíveis em elementos interativos |

---

## 17. Padrões de Código

Todo o código deve:

- Utilizar **TypeScript** (sem `any` desnecessários).
- Ser **modular** — funções e componentes com responsabilidade única.
- Ser **simples** — legível por alguém com conhecimentos básicos de React.
- Ser **facilmente legível** — nomes descritivos, estrutura previsível.
- **Evitar duplicação** — extrair lógica comum quando repetida.
- Utilizar **Tailwind CSS** para estilização (sem ficheiros CSS gigantes).

### 17.1 Dependências npm

- **Não adicionar** bibliotecas npm sem necessidade real.
- Antes de instalar qualquer pacote, avaliar se a funcionalidade pode ser resolvida com **React + TypeScript + Tailwind**.
- Manter o `package.json` enxuto — cada dependência deve ter justificação clara.

### 17.2 Código Morto e Higiene do Repositório

Eliminar sempre código morto. O projeto **não deve conter**:

| Proibido | Ação |
|----------|------|
| Componentes não utilizados | Remover ou integrar onde fizer sentido |
| Imports não utilizados | Remover antes de concluir cada tarefa |
| Ficheiros temporários | Remover (ex.: `_analysis_*`, `_extract_*`, rascunhos de debug) |
| Código comentado obsoleto | Remover — o histórico fica no Git |
| Variáveis e funções sem uso | Remover |

### 17.3 Verificação Antes de Concluir

Antes de considerar uma tarefa terminada:

1. Executar o linter (`npm run lint`) e corrigir avisos.
2. Confirmar que não existem imports, componentes ou ficheiros órfãos.
3. Confirmar que não ficaram ficheiros temporários na raiz ou em `src/`.

---

## 18. Fora de Âmbito

As seguintes tecnologias e funcionalidades **não** devem ser utilizadas ou implementadas:

| Exclusão | Motivo |
|----------|--------|
| Bootstrap | Stack definida: Tailwind CSS |
| jQuery | Obsoleto; React cobre todas as necessidades |
| CSS gigante | Tailwind + tokens centralizados |
| Componentes enormes | Manter componentes pequenos e focados |
| Arquiteturas complexas | Simplicidade de manutenção |
| CMS | Complica manutenção desnecessariamente |
| Painel de administração | Conteúdo gerido via JSON e ficheiros |
| Base de dados para conteúdos | Ficheiros estáticos são suficientes |
| Login / autenticação | Website institucional público |
| Upload automático | Adição manual de ficheiros à pasta `gallery/` |

> Qualquer funcionalidade que complique desnecessariamente a manutenção deve ser rejeitada.

---

## 19. Filosofia de Desenvolvimento

### Regra de Ouro

> Sempre que existir uma decisão de arquitetura, perguntar:  
> *"Será que isto torna a manutenção mais fácil para uma pessoa que apenas atualiza o website duas vezes por ano?"*

### Prioridades (por ordem)

1. **Facilidade de manutenção** com Cursor ou IA
2. **Fidelidade visual** ao website atual
3. **Qualidade técnica** (TypeScript, performance, acessibilidade)
4. Sofisticação arquitetural

A principal prioridade **não** é utilizar a arquitetura mais sofisticada.  
A principal prioridade **é** que qualquer alteração futura seja simples de realizar.

---

## 20. Objetivo Final

Terminar o projeto com:

- Website **visualmente equivalente** ao atual.
- Código **completamente desenvolvido de raiz**.
- Organização **moderna, clara e extremamente fácil de manter**.
- Qualquer alteração futura realizável de forma simples com o **Cursor**.

---

## 21. Processo de Desenvolvimento e Critérios de Conclusão

### 21.1 Fases de Desenvolvimento

1. **Análise** — Estudar cuidadosamente todo o website existente; identificar todas as páginas, secções, cores, tipografia e assets.
2. **Setup** — Configurar projeto Vite + React 19 + TypeScript + Tailwind + React Router + i18next.
3. **Design tokens** — Extrair e centralizar cores, tipografia e espaçamentos.
4. **Layouts e componentes base** — Navbar, Footer, Container, Section, Button.
5. **Páginas e secções** — Recriar todas as páginas e secções do website atual.
6. **Galeria e Lightbox** — Implementar galeria com gestão via JSON.
7. **i18n** — Traduzir todo o conteúdo para PT e EN.
8. **SEO e assets** — robots.txt, favicon, Open Graph, meta tags.
9. **Otimização** — Performance, lazy loading, code splitting.
10. **Validação final** — Checklist de conclusão (abaixo).

### 21.2 Regras Durante o Desenvolvimento

- Analisar cuidadosamente todo o website existente.
- Identificar **todas** as páginas.
- Recriar **todas** as páginas, componentes e layouts.
- Melhorar aquilo que fizer sentido.
- Manter **toda** a identidade visual.
- **Não** copiar HTML.
- **Não** copiar CSS.
- Implementar **tudo** em React.

### 21.3 Checklist de Conclusão

O projeto só é considerado **concluído** quando todos os pontos abaixo estiverem validados:

- [ ] **Todas as rotas** funcionam corretamente
- [ ] **Responsividade** testada em desktop, laptop, tablet e smartphone
- [ ] **TypeScript** sem erros de compilação
- [ ] **Lighthouse** — scores aceitáveis (Performance, Accessibility, Best Practices, SEO)
- [ ] **Acessibilidade** — alt, aria-label, contraste, navegação por teclado
- [ ] **Traduções** — PT e EN completos, sem texto hardcoded
- [ ] **Galeria** — lightbox funcional, gestão via JSON operacional
- [ ] **Navegação** — links, menu mobile, alternância de idioma
- [ ] **Higiene do código** — sem imports/componentes/ficheiros não utilizados, sem ficheiros temporários, `npm run lint` sem erros

---

*Documento de referência para o desenvolvimento do website ISLAVA. Qualquer alteração a estes requisitos deve ser registada neste ficheiro.*
