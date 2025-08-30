# Regolamento della repository **greenvalley**

Versione: 1.0
Stato: **Attivo**
Proprietà: Green Valley FC (GVFC)

---

## 0) Scopo e ambito

Definire regole chiare e scalabili per lo sviluppo, la gestione e la pubblicazione del sito/strumenti di Green Valley FC. Si applica a **tutti i contributori** (dev, designer, content editor).

---

## 1) Struttura della repo

Per il sito statico:

```
/                 # pagine html di primo livello (es. index.html, squadra.html)
/css/             # fogli di stile (SCSS opzionale in /css/scss)
/js/              # script client (module-first, no var globali)
/images/          # raster (jpg/png/webp) compressi
/icons/           # svg, favicon, manifest
```

> I file di configurazione (es. `.editorconfig`, `.prettierrc`, `.eslintrc`) stanno in **root**.

---

## 2) Branching model

* **main**: produzione, protetto (no push diretto).
* **develop** *(opzionale)*: integrazione continua se il team è >3 dev.
* **feature/**, **fix/**, **hotfix/**: lavoro quotidiano.

**Naming**: `feature/gvfc-<id>-kebab-title` (es. `feature/gvfc-42-hero-anim`).
**Commit**: **Conventional Commits**.

Esempi:

* `feat(ui): aggiunge hero con scia verde`
* `fix(contact): allowed origins emailjs`
* `chore(ci): attiva deploy pages`

---

## 3) Versioning & Release

* **Semantic Versioning**: `vMAJOR.MINOR.PATCH` (es. `v1.3.0`).
* Tag su `main` + **CHANGELOG.md** mantenuto (formato *Keep a Changelog*).
* **Release** tramite PR “release/\*” → merge → tag automatico da Action.

---

## 4) Regole per le Pull Request

**Obbligatorie**:

* PR da branch dedicato → `main` (o `develop`).
* Minimo **1 review** approvata (2 se modifica >300 LOC o file critici).
* Status checks verdi (lint, build, link-check, pages build).
* Niente file generati nel diff (minify, cache, `node_modules`, immagini grezze > 1 MB).

**Checklist PR** (da compilare nella descrizione):

* [ ] Scopo chiaro e screenshot/gif del cambiamento.
* [ ] Responsività testata (≥360px, 768px, ≥1200px).
* [ ] A11y: alt per immagini, colori con contrasto, focus visibile.
* [ ] Performance: immagini **WebP** o ottimizzate; no asset non usati.
* [ ] SEO di base: `<title>`, `meta description`, H1 unico.
* [ ] Nessun secret/versione `.env` nel commit.

---

## 5) Stile di codice

**HTML**

* Semantico (header/nav/main/section/footer).
* Un solo `h1` per pagina.
* Attributi `alt`/`aria-*` corretti.

**CSS**

* BEM (Block\_\_Element--Modifier) per nomi classi.
* Variabili CSS per colori brand: `--gv-green`, `--gv-white`.
* File unici per pagina o componenti; evitare CSS non usato.

**JS**

* ES Modules, `const/let`, niente variabili globali.
* Funzioni pure dove possibile, no side-effect in import.
* Lint con ESLint + Prettier.

---

## 6) Asset & Media

* Immagini raster: `.webp` preferito; fallback solo se necessario.
* SVG per icone e loghi (inline quando serve accessibilità/colore).
* Limite **1 MB** per file singolo; usare **Git LFS** oltre il limite o ridurre.
* Nominare in kebab-case (`hero-chiesa-valverde.webp`).

---

## 7) Sicurezza, segreti e configurazioni

* Non committare **segreti**: usare `.env` (mai in repo) e `Secrets` di GitHub Actions.
* Fornire `.env.example` con chiavi mock/placeholder.
* **EmailJS**: in client si usa solo **public key**; Service/Template ID non sono segreti ma vanno documentati. Configurare **Allowed Origins** in dashboard.
* GDPR: moduli di contatto → informativa privacy e consenso esplicito.

**`.gitignore` minimo**

```
# ambiente
.env
*.local

# dipendenze
node_modules/

# build e cache
.dist/
build/
.cache/
*.log
.DS_Store
```

---

## 8) CI/CD (GitHub Actions)

Obiettivi: lint, link-check, build, deploy **GitHub Pages**.

**Workflow esempio** `.github/workflows/pages.yml`:

```yaml
name: build-and-deploy
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20 }
      - run: npm ci --ignore-scripts || true
      - run: npx htmlhint "**/*.html" || true
      - run: npx eslint js/** || true
      - run: npx linkinator . --skip "^mailto:" || true
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: .

  deploy:
    needs: build
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

> In **Settings → Pages** selezionare “GitHub Actions” come origine.

---

## 9) Issue Tracking & Project

* Usare **issue template** (Bug/Feature/Task).
* Label standard: `bug`, `enhancement`, `design`, `docs`, `ci`, `a11y`, `performance`, `good-first-issue`, `blocked`, `urgent`.
* Milestone per sprint o rilasci (`v1.2.0`).
* Collegare PR all’issue (`Closes #<id>`).

**Template Bug (estratto)**

```
**Descrizione**
Comportamento atteso vs ottenuto.

**Passi per riprodurre**
1. ...

**Ambiente**
Browser/OS, risoluzione, console error.
```

---

## 10) Documentazione obbligatoria

* `README.md`: overview, setup, comandi, deploy, contatti.
* `CONTRIBUTING.md`: flusso git, commit policy, come aprire PR.
* `CODE_OF_CONDUCT.md`: comportamento atteso nel team.
* `SECURITY.md`: come segnalare vulnerabilità.
* `LICENSE`: predefinita **MIT**, salvo diversa indicazione.

---

## 11) Accessibilità (A11y) & Qualità

* Contrasto WCAG AA, focus visibile, navigazione tastiera.
* Test con screen reader (NVDA/VoiceOver) per pagine principali.
* Lighthouse score target: **Perf ≥ 90**, **A11y ≥ 90** su homepage e contatto.

---

## 12) Contenuti & Branding

* Palette: **verde GVFC** `#0e8a3a` e **bianco** `#ffffff` (+ shade scure/accese).
* Tipografia consigliata: **Teko** (titoli), **Inter** (testi).
* Immagini con liberatoria/diritti; niente loghi terzi senza permesso.

---

## 13) Governo del codice & responsabilità

* `CODEOWNERS` assegna revisori automatici per cartelle chiave (`/css`, `/js`, `/images`).
* Maintainer principali possono **merge** e **taggare** release.

---

## 14) Manutenzione & Dipendenze

* Aggiornamenti automatici via **Dependabot** (settimanale).
* Versione Node supportata: **20 LTS**.
* Unico package manager: **npm** (lockfile in repo).

---

## 15) Incidenti & Rollback

* Rollback veloce: `git revert <sha>` del commit difettoso su `main`.
* Se il sito è rotto: disabilitare Pages dal tab **Actions** (temporaneo) e ripristinare ultima release stabile (`git checkout tags/vX.Y.Z`).

---

## 16) Contatti & Ownership

* Maintainer: `@owner1`, `@owner2`.
* Canale supporto: `#greenvalley-dev` (Slack/Discord).
* SLA issue critiche: presa in carico **24h**, fix **72h**.

---

## 17) Appendice – Snippet utili

**`.env.example`**

```
# EmailJS (client)
VITE_EMAILJS_PUBLIC_KEY=YOUR_PUBLIC_KEY
VITE_EMAILJS_SERVICE_ID=service_xxx
VITE_EMAILJS_TEMPLATE_ID=template_xxx
```

**`PULL_REQUEST_TEMPLATE.md` (estratto)**

```
## Scopo

## Screenshot / Video

## Checklist
- [ ] Responsivo (mobile/tablet/desktop)
- [ ] A11y base (alt, label, focus)
- [ ] Immagini ottimizzate
- [ ] Lint OK / Link OK
- [ ] CHANGELOG aggiornato (se user-facing)
```

---

> Questo regolamento è vivo: proporre modifiche con PR al file in `/docs/regolamento.md`. Ogni modifica deve avere consenso dei maintainer.
