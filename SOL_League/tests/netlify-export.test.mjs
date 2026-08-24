import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";
import { join } from "node:path";
import test from "node:test";

const routes = [
  ["index.html", "Jouw game."],
  ["de-league/index.html", "Fortnite"],
  ["programma/index.html", "Voorronde"],
  ["community/index.html", "community"],
  ["over-ons/index.html", "SOL"],
  ["aanmelden/index.html", "Leeftijd"],
  ["privacy/index.html", "privacy"],
];

for (const [filename, expectedText] of routes) {
  test(`Netlify-pagina beschikbaar: ${filename}`, async () => {
    const html = await readFile(join("out", filename), "utf8");
    assert.match(html, new RegExp(expectedText, "i"));
    assert.match(html, /<html[^>]*lang="nl"/);
  });
}

test("SOL-logo en hero-afbeelding zijn meegeleverd", async () => {
  for (const filename of ["images/sol-logo.png", "images/hero-gaming.png"]) {
    assert.ok((await stat(join("out", filename))).size > 0);
  }
});

test("Leeftijdscontrole voor ouders is aanwezig in de registratiepagina", async () => {
  const html = await readFile(join("out", "aanmelden/index.html"), "utf8");
  assert.match(html, /14/);
  assert.match(html, /19/);
  assert.match(html, /Huis van de Wijk/i);
});
