# Game & Talent League — GitHub + Netlify

Volledige, statische website voor de gratis Fortnite-community van SOL voor jongeren van 14 tot en met 19 jaar.

## Publiceren met GitHub en Netlify

1. Upload de **inhoud** van deze map rechtstreeks naar de hoofdmap van je GitHub-repository. Plaats de bestanden niet in een extra submap.
2. Koppel deze GitHub-repository aan Netlify.
3. Gebruik deze instellingen als Netlify erom vraagt:

   - **Base directory:** leeg laten.
   - **Build command:** `npm run build`.
   - **Publish directory:** `out`.
   - **Node version:** `22`.

4. Kies **Deploy site**. Als de repository eerder verkeerd was ingesteld, kies dan **Deploys → Trigger deploy → Clear cache and deploy site**.

Het bestand `netlify.toml` bevat deze instellingen al. Controleer wel dat oude instellingen in het Netlify-dashboard deze configuratie niet overschrijven.

## Lokaal bekijken

```bash
npm ci
npm run dev
```

De versie voor Netlify bouwen en controleren:

```bash
npm test
```

## Pagina’s

- `/` — homepage met de jongerenreis.
- `/de-league/` — Fortnite, community, XP en talentontwikkeling.
- `/programma/` — activiteiten van oktober tot en met december 2026.
- `/community/` — begeleiding en online community.
- `/over-ons/` — een initiatief van SOL.
- `/aanmelden/` — interactief aanmeldformulier.
- `/privacy/` — toelichting op privacy en de demonstratie.

De aanmelding ondersteunt leeftijden van 14 tot en met 19 jaar. Onder de 17 jaar verschijnen automatisch de verplichte velden voor toestemming en het e-mailadres van een ouder of verzorger. Deelnemers zonder eigen apparaat kunnen aangeven dat zij via een Huis van de Wijk willen meedoen.

**Let op:** het aanmeldformulier is een interactieve demonstratie. Het verstuurt en bewaart nog geen persoonsgegevens. Voor echte aanmeldingen moeten een goedgekeurde aanmeldservice, bevestigingsmails en de Discord-uitnodiging apart worden aangesloten.

Gedeelde teksten, leeftijden, platforms en programmadata staan in `lib/content.ts`.
