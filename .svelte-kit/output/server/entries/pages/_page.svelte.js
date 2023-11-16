import { c as create_ssr_component, d as each, e as escape, f as add_attribute, v as validate_component } from "../../chunks/ssr.js";
import { N as Navbar, F as Footer } from "../../chunks/Footer.js";
const Home_svelte_svelte_type_style_lang = "";
const css$a = {
  code: "main.svelte-1z09e50.svelte-1z09e50{overflow-x:hidden;overflow-y:hidden}.home-title.svelte-1z09e50.svelte-1z09e50{color:var(--darkblue);font-size:1.5rem;font-weight:var(--font-medium);margin-bottom:0.5rem;margin-top:-16em}.home-content.svelte-1z09e50.svelte-1z09e50{color:var(--spat);display:block;font-size:1rem;font-weight:var(--font-semi-bold);margin-bottom:0.5rem}.home-scroll.svelte-1z09e50.svelte-1z09e50{color:var(--green);font-size:0.8em;text-decoration:none}.parallax2.svelte-1z09e50.svelte-1z09e50{display:none}.parallax.svelte-1z09e50.svelte-1z09e50{margin-top:6em;position:relative;display:flex;justify-content:center;align-items:center;height:50rem}#text.svelte-1z09e50.svelte-1z09e50{position:absolute;margin-left:2em}.parallax.svelte-1z09e50 img.svelte-1z09e50{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}@media screen and (min-width: 454px){.home-title.svelte-1z09e50.svelte-1z09e50{margin-top:-13em}.home-content.svelte-1z09e50.svelte-1z09e50{font-size:1.4em}.home-scroll.svelte-1z09e50.svelte-1z09e50{font-size:1.2em}#text.svelte-1z09e50.svelte-1z09e50{padding-left:1rem}.parallax.svelte-1z09e50.svelte-1z09e50{margin-top:-4rem;height:60rem}}@media screen and (min-width: 568px){.home-title.svelte-1z09e50.svelte-1z09e50{font-size:2.5em;margin-top:-12em}.home-content.svelte-1z09e50.svelte-1z09e50{font-size:1.7em}.home-scroll.svelte-1z09e50.svelte-1z09e50{font-size:1.4em}.parallax.svelte-1z09e50.svelte-1z09e50{margin-top:-5rem;height:75rem}}@media screen and (min-width: 720px){#text.svelte-1z09e50.svelte-1z09e50{padding:0 3em 0 3em}.home-title.svelte-1z09e50.svelte-1z09e50{font-size:2.8em;margin-top:-14.3em}.home-scroll.svelte-1z09e50.svelte-1z09e50{font-size:1.4em}.parallax.svelte-1z09e50.svelte-1z09e50{height:95rem}}@media screen and (min-width: 720px){#text.svelte-1z09e50.svelte-1z09e50{padding:0 7em 0 7em}.home-title.svelte-1z09e50.svelte-1z09e50{font-size:2.8em;margin-top:-13em}}@media screen and (min-width: 820px){#text.svelte-1z09e50.svelte-1z09e50{padding:0 7em 0 7em}.home-title.svelte-1z09e50.svelte-1z09e50{font-size:2.8em;margin-top:-13em}}@media screen and (min-width: 960px){#text.svelte-1z09e50.svelte-1z09e50{padding:0 5em 0 5em}.parallax.svelte-1z09e50.svelte-1z09e50{height:100rem}}@media screen and (min-width: 1024px){.parallax.svelte-1z09e50.svelte-1z09e50{display:none}#text.svelte-1z09e50.svelte-1z09e50{display:none}.parallax.svelte-1z09e50 img.svelte-1z09e50{display:none}.parallax2.svelte-1z09e50.svelte-1z09e50{position:relative;display:flex;justify-content:center;align-items:center;height:75rem}#text2.svelte-1z09e50.svelte-1z09e50{position:relative;margin-left:1em}.parallax2.svelte-1z09e50 img.svelte-1z09e50{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.home-content2.svelte-1z09e50.svelte-1z09e50{color:var(--spat);font-size:1.5em;display:block;font-weight:var(--font-semi-bold);margin-bottom:var(--mb-0-75)}.home-title2.svelte-1z09e50.svelte-1z09e50{color:var(--darkblue);font-size:2rem;margin-bottom:0.5rem;margin-top:-15em}.home-scroll2.svelte-1z09e50.svelte-1z09e50{color:var(--green);font-size:1em}}@media screen and (min-width: 1250px){.parallax.svelte-1z09e50.svelte-1z09e50{display:none}#text.svelte-1z09e50.svelte-1z09e50{display:none}.parallax.svelte-1z09e50 img.svelte-1z09e50{display:none}.parallax2.svelte-1z09e50.svelte-1z09e50{position:relative;display:flex;justify-content:center;align-items:center;height:100rem;margin-top:-12em}#text2.svelte-1z09e50.svelte-1z09e50{position:absolute;margin-left:-30em}.parallax2.svelte-1z09e50 img.svelte-1z09e50{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}}",
  map: null
};
const Home = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$a);
  return `<main class="svelte-1z09e50" data-svelte-h="svelte-1w6r0wi"><section class="home" id="home"><section class="parallax svelte-1z09e50"><img src="assets/city.png" id="city" alt="city illustratie" class="svelte-1z09e50"> <img src="assets/water.png" id="water" alt="water illustratie" class="svelte-1z09e50"> <img src="assets/berg4.png" id="layer1" alt="berg illustratie" class="svelte-1z09e50"> <img src="assets/berg3.png" id="layer2" alt="berg illustratie" class="svelte-1z09e50"> <img src="assets/berg2.png" id="layer3" alt="berg illustratie" class="svelte-1z09e50"> <img src="assets/huis.png" id="layer4" alt="huis illustratie" class="svelte-1z09e50"> <img src="assets/bergje1.png" id="layer5" alt="berg illustratie" class="svelte-1z09e50"> <div id="text" class="svelte-1z09e50"><h1 class="home-title svelte-1z09e50">Een nieuwe generatie hydrologen</h1> <h2><span class="home-content svelte-1z09e50">Concreet op water en bodem</span></h2> <h3 class="home-scroll svelte-1z09e50">scroll<span class="material-symbols-outlined">arrow_downward</span></h3></div> <img src="assets/grondmobilee.png" id="ground" alt="grond illustratie" class="svelte-1z09e50"> <img src="assets/bird.png" id="bird" alt="vogel illustratie" class="svelte-1z09e50"></section> <section class="parallax2 svelte-1z09e50"><img src="assets/city-full.png" id="city2" alt="city illustratie" class="svelte-1z09e50"> <img src="assets/water-full.png" id="water2" alt="water illustratie" class="svelte-1z09e50"> <img src="assets/berg4-full.png" id="layer1-2" alt="berg illustratie" class="svelte-1z09e50"> <img src="assets/berg3-full.png" id="layer2-2" alt="berg illustratie" class="svelte-1z09e50"> <img src="assets/berg2-full.png" id="layer3-2" alt="berg illustratie" class="svelte-1z09e50"> <img src="assets/huisje-full.png" id="layer4-2" alt="huis illustratie" class="svelte-1z09e50"> <img src="assets/berg1-full.png" id="layer5-2" alt="berg illustratie" class="svelte-1z09e50"> <div id="text2" class="svelte-1z09e50"><h1 class="home-title2 svelte-1z09e50">Een nieuwe generatie hydrologen</h1> <span class="home-content2 svelte-1z09e50">Concreet op water en bodem</span> <h3 class="home-scroll2 svelte-1z09e50">scroll<span class="material-symbols-outlined">arrow_downward</span></h3></div> <img src="assets/backgroundfullfinall.png" id="ground2" alt="grond illustratie" class="svelte-1z09e50"> <img src="assets/bird-full.png" id="bird2" alt="vogel illustratie" class="svelte-1z09e50"></section></section> </main>`;
});
const Over_svelte_svelte_type_style_lang = "";
const css$9 = {
  code: "section.svelte-d09muj{width:100%;padding-top:5rem;padding-bottom:5rem;margin-bottom:5rem;background:var(--lg-bg)}.inner-section.svelte-d09muj{width:70%;margin-left:15%;margin-bottom:3rem}h2.svelte-d09muj{padding:0rem;color:var(--spat);margin-bottom:1rem}.horizontal-flex-row.svelte-d09muj{width:100%;display:flex;gap:10%}.text-container.svelte-d09muj{width:50%}img.svelte-d09muj{height:20rem;object-fit:cover;border-radius:.5rem}@media only screen and (max-width: 1100px){.horizontal-flex-row.svelte-d09muj{flex-direction:column}.text-container.svelte-d09muj{width:100%}.image-container.svelte-d09muj{width:100%;margin-top:1rem}img.svelte-d09muj{height:10rem;width:100%;z-index:-1;object-fit:contain}.inner-section.svelte-d09muj{width:70%;margin-bottom:2rem}}",
  map: null
};
const Over = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$9);
  return ` <section class="climate-container svelte-d09muj" data-svelte-h="svelte-1eaxp08"><div class="inner-section svelte-d09muj"><div class="horizontal-flex-row svelte-d09muj"><div class="text-container svelte-d09muj"><h2 class="svelte-d09muj">Over SPATwater</h2> <p>SPATwater bestaat uit een nieuwe generatie enthousiaste hydrologen die met een technische achtergrond nét wat anders kijken naar ruimtelijke opgaven. De uitdagingen zijn enorm, maar de kansen die het biedt nog groter.</p> <p>Met expertise op het gebied van waterkwaliteit, de Kaderrichtlijn Water en klimaatadaptatie helpt SPATwater overheden en bedrijven om toekomstbestendig en waterrobuust te worden.</p> <p>Wij voeren geen analyse uit zonder handelingsperspectief en bieden zowel creatieve als praktische oplossingen.</p> <a href="#expertise" class="button">Onze expertise</a></div> <div class="image-container svelte-d09muj"><img src="assets/tree.png" alt="boom illustratie" class="svelte-d09muj"></div></div></div> </section>`;
});
const Expertise_svelte_svelte_type_style_lang = "";
const css$8 = {
  code: ".expertise.svelte-sagv8x.svelte-sagv8x{background-color:white;display:flex;flex-direction:column;position:relative}.expertise-title.svelte-sagv8x.svelte-sagv8x{font-size:1.5rem;color:var(--spat);font-weight:600;text-align:left;margin-left:2.5rem}.expertise.svelte-sagv8x h3.svelte-sagv8x{font-size:1.3rem;color:var(\n      --darkblue\n    );font-weight:600;text-align:center;padding-bottom:1em}.expertise__wrapper.svelte-sagv8x.svelte-sagv8x{display:flex;flex-direction:column;justify-content:space-around;padding:4rem 2rem;gap:3rem}.expertise__card.svelte-sagv8x.svelte-sagv8x{margin:0 auto;height:25em;width:18em;border-radius:4px;display:flex;flex-direction:column;justify-content:center;align-items:center;box-shadow:0\n      4px 6px\n      rgba(\n        174,\n        190,\n        205,\n        0.3\n      );background-color:var(\n      --lg-bg\n    );color:var(\n      --darkblue\n    );transition:0.3s\n      ease-in}.expertise__card.svelte-sagv8x img.svelte-sagv8x{width:250px;padding-bottom:2em}.expertise__card.svelte-sagv8x .expertise2.svelte-sagv8x{width:250px;padding-top:1em;padding-bottom:0.5em}.expertise__card.svelte-sagv8x.svelte-sagv8x:nth-child(\n      2\n    ){background-color:var(\n      --lg-bg\n    )}.expertise__card.svelte-sagv8x.svelte-sagv8x:nth-child(\n      3\n    ){background-color:var(\n      --lg-bg\n    )}.expertise__card.svelte-sagv8x.svelte-sagv8x:hover{transform:scale(\n      1.075\n    );transition:0.3s\n      ease-in;cursor:pointer}.button.svelte-sagv8x.svelte-sagv8x{display:inline-block;background-color:var(\n      --green\n    );color:white;padding:0.7rem\n      1rem;height:50px;border-radius:5px;font-weight:var(\n      --font-semi-bold\n    );transition:0.3s;text-decoration:none}.button_text2.svelte-sagv8x.svelte-sagv8x{text-decoration:none;color:white;font-size:1rem}@media screen and (min-width: 1024px){.expertise__wrapper.svelte-sagv8x.svelte-sagv8x{flex-direction:row;justify-content:space-around;padding:4rem 8rem;gap:3rem}.expertise-title.svelte-sagv8x.svelte-sagv8x{margin-left:14rem}}",
  map: null
};
const Expertise = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$8);
  return `<section class="expertise section svelte-sagv8x" data-svelte-h="svelte-drytdf"><h2 class="expertise-title svelte-sagv8x">Expertise</h2> <div class="expertise__wrapper svelte-sagv8x"><div class="expertise__card svelte-sagv8x"><img class="expertise3 svelte-sagv8x" src="assets/Untitled4.png" alt="Illustratie klimaatadaptatie"> <h3 class="svelte-sagv8x">Klimaatadaptatie</h3> <a href="#klimaat" class="button svelte-sagv8x"><p class="button_text2 svelte-sagv8x">Meer informatie</p></a></div> <div class="expertise__card svelte-sagv8x"><img class="expertise2 svelte-sagv8x" src="assets/Untitled3.png" alt="Illustratie waterkwaliteit"> <h3 class="svelte-sagv8x">Waterkwaliteit</h3> <a href="#waterkwaliteit" class="button svelte-sagv8x"><p class="button_text2 svelte-sagv8x">Meer informatie</p></a></div> <div class="expertise__card svelte-sagv8x"><img class="expertise2 svelte-sagv8x" src="assets/brainlogo.png" alt="Illustratie B-Rain"> <h3 class="svelte-sagv8x">B-Rain</h3> <a href="#brain" class="button svelte-sagv8x"><p class="button_text2 svelte-sagv8x">Meer informatie</p></a></div></div> </section>`;
});
const Klimaatadaptatie_svelte_svelte_type_style_lang = "";
const css$7 = {
  code: "section.svelte-16ksd9y{width:100%}.first-section.svelte-16ksd9y{margin-top:5rem}.light-background.svelte-16ksd9y{background:var(\n      --lg-bg\n    );padding:1rem\n      0rem 2rem 0rem}.inner-section.svelte-16ksd9y{width:70%;margin-left:15%;margin-bottom:3rem}h2.svelte-16ksd9y{padding:0rem;color:var(\n      --spat\n    );margin-bottom:1rem}.bold-text.svelte-16ksd9y{font-weight:600}ul.svelte-16ksd9y{list-style:none;font-size:0.8rem;color:var(\n      --darkblue\n    )}.horizontal-flex-row.svelte-16ksd9y{width:100%;display:flex;gap:10%}.text-container.svelte-16ksd9y{width:50%}img.svelte-16ksd9y{height:20rem;object-fit:cover;border-radius:0.5rem}@media only screen and (max-width: 1100px){.horizontal-flex-row.svelte-16ksd9y{flex-direction:column}.text-container.svelte-16ksd9y{width:100%}.image-container.svelte-16ksd9y{width:100%;margin-top:1rem}img.svelte-16ksd9y{height:10rem;width:100%;object-fit:cover}.mobile-image.svelte-16ksd9y{display:none}.inner-section.svelte-16ksd9y{width:70%;margin-bottom:2rem}}",
  map: null
};
const Klimaatadaptatie = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$7);
  return ` <div class="light-background svelte-16ksd9y" data-svelte-h="svelte-1oomrqz"><section class="first-section svelte-16ksd9y"><div class="inner-section svelte-16ksd9y"><div class="horizontal-flex-row svelte-16ksd9y"><div class="text-container svelte-16ksd9y"><h2 class="svelte-16ksd9y">Klimaatadaptatie</h2> <p class="bold-text svelte-16ksd9y">Als meer
            dan 60%
            van een
            gemeente
            private
            grond
            is… dan
            is het
            noodzakelijk
            om deze
            grond
            klimaatadaptief
            te
            maken.</p> <p>Ons
            vertrekpunt
            is dat
            een
            groot
            deel van
            een
            gemeente
            bestaat
            uit
            private
            grond
            (tuinen,
            daken,
            bedrijventerreinen)
            en dat
            het
            absoluut
            noodzakelijk
            is dat
            deze
            private
            ruimte
            klimaatadaptief
            ingericht
            moet
            worden.
            Elk
            perceel
            vraagt
            om
            maatwerk,
            maar het
            is
            onmogelijk
            om elke
            tuin in
            te gaan.</p> <ul class="svelte-16ksd9y"><li><i class="fa fa-arrow-right" aria-hidden="true"></i> Hoe
              los je
              dit probleem
              op?</li> <li><i class="fa fa-arrow-right" aria-hidden="true"></i> Hoe
              zet je
              subsidiestromen
              efficiënt
              in?</li> <li><i class="fa fa-arrow-right" aria-hidden="true"></i> Hoe
              activeer
              je bewoners?</li></ul></div> <div class="image-container svelte-16ksd9y"><img src="assets/projects1.png" alt="" class="svelte-16ksd9y"></div></div></div></section> <section class="svelte-16ksd9y"><div class="inner-section svelte-16ksd9y"><div class="horizontal-flex-row svelte-16ksd9y"><div class="image-container svelte-16ksd9y"><img class="mobile-image svelte-16ksd9y" src="assets/projects4.png" alt=""></div> <div class="text-container svelte-16ksd9y"><h2 class="svelte-16ksd9y">Gemeenten</h2> <p class="bold-text svelte-16ksd9y">Wij
            kunnen
            elke
            bewoner
            in uw
            gemeente
            een
            persoonlijk
            klimaatadaptief
            advies
            geven
            zonder
            elke
            tuin in
            te gaan.</p> <p>Wij
            gebruiken
            ruimtelijke
            data en
            sociale
            kennis
            uit de
            buurt om
            de
            gemeente
            gedetailleerd
            in kaart
            te
            brengen.
            In
            combinatie
            met
            veldwerk
            kunnen
            wij op
            postcode,
            buurt of
            wijkniveau
            klimaatadaptieve
            maatregelen
            personaliseren
            en
            prioriteren
            in de
            private
            ruimte.
            Hiermee
            maken
            wij de
            private
            ruimte
            waterrobuust,
            waterveilig,
            hitte-
            en
            droogtebestendig.</p></div></div></div></section> <section class="svelte-16ksd9y"><div class="inner-section svelte-16ksd9y"><div class="horizontal-flex-row svelte-16ksd9y"><div class="text-container svelte-16ksd9y"><h2 class="svelte-16ksd9y">Bedrijventerreinen</h2> <p class="bold-text svelte-16ksd9y">Bedrijventerreinen
            zijn
            vaak
            versteend,
            privaat
            terrein
            met veel
            oppervlakte.</p> <p>SPATwater
            richt
            zich op
            het
            activeren
            van
            werknemers
            en
            bedrijven
            door
            vraag en
            aanbod
            op het
            gebied
            van
            water
            bij
            elkaar
            te
            brengen
            door
            middel
            van
            ruimtelijke
            data en
            geeft
            handvatten
            om
            bedrijventerreinen
            te
            vergroenen.</p> <ul class="svelte-16ksd9y"><li><i class="fa fa-arrow-right" aria-hidden="true"></i> Het
              uitvoeren
              van stakeholders/netwerk
              analyses</li> <li><i class="fa fa-arrow-right" aria-hidden="true"></i> Co-creatie
              sessie
              organiseren</li> <li><i class="fa fa-arrow-right" aria-hidden="true"></i> Het
              uitvoeren
              van restwaterscans</li> <li><i class="fa fa-arrow-right" aria-hidden="true"></i> Het
              uitvoeren
              van klimaatanalyses
              en het
              koppelen
              van relevante
              maatregelen</li></ul></div> <div class="image-container svelte-16ksd9y"><img src="assets/verg.png" alt="" class="svelte-16ksd9y"></div></div></div></section> </div>`;
});
const Waterkwaliteit_svelte_svelte_type_style_lang = "";
const css$6 = {
  code: "section.svelte-cl267n{width:100%}.first-section.svelte-cl267n{margin-top:5rem;margin-bottom:5rem}.inner-section.svelte-cl267n{width:70%;margin-left:15%;margin-bottom:3rem}h2.svelte-cl267n{padding:0rem;color:var(--spat);margin-bottom:1rem}.bold-text.svelte-cl267n{font-weight:600}ul.svelte-cl267n{list-style:none;font-size:.8rem;color:var(--darkblue)}.horizontal-flex-row.svelte-cl267n{width:100%;display:flex;gap:10%}.text-container.svelte-cl267n{width:50%;margin-top:8rem}img.svelte-cl267n{height:20rem;object-fit:cover;border-radius:.5rem}@media only screen and (max-width: 1100px){.horizontal-flex-row.svelte-cl267n{flex-direction:column}.text-container.svelte-cl267n{width:100%;margin-top:1rem}.image-container.svelte-cl267n{width:100%;margin-top:0rem}img.svelte-cl267n{height:10rem;width:100%;object-fit:cover}.inner-section.svelte-cl267n{width:70%;margin-bottom:2rem}}",
  map: null
};
const Waterkwaliteit = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$6);
  return `<main data-svelte-h="svelte-1nbdp1y"><section class="first-section svelte-cl267n"><div class="inner-section svelte-cl267n"><div class="horizontal-flex-row svelte-cl267n"><div class="image-container svelte-cl267n"><h2 class="svelte-cl267n">Waterkwaliteit</h2> <p class="bold-text svelte-cl267n">Wat betekent de Kaderrichtlijn Water voor jou?</p> <img src="assets/Aquathermie.png" alt="foto aquathermie" class="svelte-cl267n"></div> <div class="text-container svelte-cl267n"><p>De Kaderrichtlijn Water (KRW) is een Europese richtlijn die regelt dat oppervlaktewateren en het grondwater van voldoende kwaliteit zijn. Toch voldoen pas enkele wateren aan deze norm. We staan nu op een keerpunt. Binnen 5 jaar, in 2027, moeten alle oppervlaktewateren en ons grondwater voldoen aan de KRW. Vergelijkingen met de stikstofcrisis zijn snel gemaakt, maar de KRW biedt ook kansen in proposities, aanbestedingen en vergunningverlening.</p> <p>SPATwater biedt hulp aan organisaties bij het identificeren van de implicaties van de KRW voor hun specifieke situatie. Dit doen wij onder andere door middel van:</p> <ul class="svelte-cl267n"><li><i class="fa fa-arrow-right" aria-hidden="true"></i> Het verzorgen van kennissessies</li> <li><i class="fa fa-arrow-right" aria-hidden="true"></i> Analyse van huidige KRW-risico’s en kansen</li> <li><i class="fa fa-arrow-right" aria-hidden="true"></i> Propositieverbetering</li></ul></div></div></div></section> </main>`;
});
const Brain_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: "section.svelte-isxzik{width:100%;padding-top:5rem;padding-bottom:3rem;margin-bottom:5rem;background:var(--lg-bg)}.inner-section.svelte-isxzik{width:70%;margin-left:15%;margin-bottom:3rem}h2.svelte-isxzik{padding:0rem;color:var(--spat);margin-bottom:1rem}.bold-text.svelte-isxzik{font-weight:600}.horizontal-flex-row.svelte-isxzik{width:100%;display:flex;gap:10%}.text-container.svelte-isxzik{width:60%}img.svelte-isxzik{height:20rem;object-fit:cover;border-radius:.5rem}@media only screen and (max-width: 1100px){.horizontal-flex-row.svelte-isxzik{flex-direction:column}.text-container.svelte-isxzik{width:100%}.image-container.svelte-isxzik{width:100%;margin-top:1rem}img.svelte-isxzik{height:20rem;width:100%;z-index:-1;object-fit:cover}.inner-section.svelte-isxzik{width:70%;margin-bottom:2rem}}",
  map: null
};
const Brain = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$5);
  return `<main data-svelte-h="svelte-bmfzz1"><section class="climate-container svelte-isxzik"><div class="inner-section svelte-isxzik"><div class="horizontal-flex-row svelte-isxzik"><div class="text-container svelte-isxzik"><h2 class="svelte-isxzik">b-RAIN</h2> <p class="bold-text svelte-isxzik">b-RAIN is het project rondom het koppelen van weerberichten aan wateropvang/gebruik in de tuin.</p> <p>Weersextremen in Nederland nemen steeds verder toe. Enerzijds komen in periodes van droogte, watertekorten vaker voor en anderzijds hebben we vaker te maken met extreme neerslag, met wateroverlast tot gevolg.</p> <p>B-rain wil bewoners positief betrokken houden bij het bufferen van regenwater en het groen houden van hun tuin. Door enkele gegevens in een app aan te geven, geeft deze app terug wanneer de regenwaterbuffer vol zit, wanneer deze geleegd moet worden (als er bijvoorbeeld een grote regenbui aan komt) en wanneer het lang niet regent (waardoor je zoveel mogelijk water in de regenwaterbuffer wil vasthouden).</p> <a href="#brain" class="button">Bekijk project</a></div> <div class="image-container svelte-isxzik"><img src="assets/bRAIN.png" alt="" class="svelte-isxzik"></div></div></div></section> </main>`;
});
const Projecten_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: "h2.svelte-1823hjs.svelte-1823hjs.svelte-1823hjs{padding:0rem;color:var(--spat)}.anchor.svelte-1823hjs.svelte-1823hjs.svelte-1823hjs{display:block;position:relative;top:-100px;visibility:hidden}section.svelte-1823hjs.svelte-1823hjs.svelte-1823hjs{margin-top:5rem;height:95vh;background:white}a.svelte-1823hjs.svelte-1823hjs.svelte-1823hjs{text-decoration:none}.mobile-project-header.svelte-1823hjs.svelte-1823hjs.svelte-1823hjs{display:none}.project-view-container.svelte-1823hjs.svelte-1823hjs.svelte-1823hjs{display:flex;gap:1rem;padding:0rem 2.5rem}.projects.svelte-1823hjs.svelte-1823hjs.svelte-1823hjs{width:40%;display:flex;flex-direction:column;height:85vh;gap:1rem}.filter-row.svelte-1823hjs.svelte-1823hjs.svelte-1823hjs{height:20vh}.filter-item-list.svelte-1823hjs.svelte-1823hjs.svelte-1823hjs{list-style:none;padding:0;display:flex;margin:2rem 0rem 1rem 0rem;color:#2B3F5A}.filter-item-list.svelte-1823hjs li.svelte-1823hjs.svelte-1823hjs{margin-right:1.5rem;padding:.2rem .6rem;cursor:pointer;font-size:.8rem;-webkit-user-select:none;-ms-user-select:none;user-select:none}.active.svelte-1823hjs.svelte-1823hjs.svelte-1823hjs{background-color:#4ECD5D;color:#FFFFFF;border-radius:.5rem}.searchbar.svelte-1823hjs.svelte-1823hjs.svelte-1823hjs{width:99%;padding:.5rem .6rem;border-radius:.5rem;border:none;box-shadow:rgba(0, 0, 0, 0.14) 0px 3px 8px}.searchbar.svelte-1823hjs.svelte-1823hjs.svelte-1823hjs::placeholder{color:#B7B7B7}.project-list-container.svelte-1823hjs.svelte-1823hjs.svelte-1823hjs{height:65vh;overflow-y:scroll}.project-list-container.svelte-1823hjs.svelte-1823hjs.svelte-1823hjs::-webkit-scrollbar{display:none}.project-list.svelte-1823hjs.svelte-1823hjs.svelte-1823hjs{list-style:none;padding:0;width:100%}.project-list.svelte-1823hjs li.svelte-1823hjs.svelte-1823hjs{background-color:#FFFFFF;box-shadow:rgba(0, 0, 0, 0.14) 0px 3px 8px;border-radius:.5rem;cursor:pointer;margin-bottom:1rem;width:99%}.project-list.svelte-1823hjs .horizontal-flex.svelte-1823hjs.svelte-1823hjs{display:flex}.project-list.svelte-1823hjs img.svelte-1823hjs.svelte-1823hjs{width:25%;aspect-ratio:1;object-fit:cover;padding:0;margin:0;border-radius:.5rem 0rem 0rem .5rem}.project-list.svelte-1823hjs .project-text.svelte-1823hjs.svelte-1823hjs{padding:.5rem 1rem;position:relative}.project-list.svelte-1823hjs span.svelte-1823hjs.svelte-1823hjs{color:#2B3F5A;font-weight:600;font-size:.9rem}.project-list.svelte-1823hjs h3.svelte-1823hjs.svelte-1823hjs{color:#7FAEC5;margin-bottom:.5rem}.project-list.svelte-1823hjs p.svelte-1823hjs.svelte-1823hjs{color:#2B3F5A;font-size:.8rem;margin-bottom:.5rem;line-height:1.2rem}.project-list.svelte-1823hjs i.svelte-1823hjs.svelte-1823hjs{position:absolute;right:0;bottom:0;padding:.6rem 1.2rem;color:#73CA6A;transition:.2s}.project-list.svelte-1823hjs li.svelte-1823hjs:hover i.svelte-1823hjs{transform:translateX(.5rem)}.project-map.svelte-1823hjs.svelte-1823hjs.svelte-1823hjs{width:60%}#map.svelte-1823hjs.svelte-1823hjs.svelte-1823hjs{height:85vh;pointer-events:none;border-radius:.5rem;box-shadow:rgba(0, 0, 0, 0.14) 0px 3px 8px}.mobile-porject-list.svelte-1823hjs.svelte-1823hjs.svelte-1823hjs{display:none}@media only screen and (max-width: 1100px){section.svelte-1823hjs.svelte-1823hjs.svelte-1823hjs{height:95vh}#map.svelte-1823hjs.svelte-1823hjs.svelte-1823hjs{height:65vh;pointer-events:none}.project-view-container.svelte-1823hjs.svelte-1823hjs.svelte-1823hjs{display:block}.projects.svelte-1823hjs.svelte-1823hjs.svelte-1823hjs{display:none}.project-map.svelte-1823hjs.svelte-1823hjs.svelte-1823hjs{width:100%}.mobile-porject-list.svelte-1823hjs.svelte-1823hjs.svelte-1823hjs{height:16vh;width:100%;display:block}.mobile-porject-list.svelte-1823hjs ul.svelte-1823hjs.svelte-1823hjs{list-style:none;margin:0;padding:0;display:flex;flex-wrap:nowrap;overflow-x:auto;width:100%;gap:1rem}.mobile-porject-list.svelte-1823hjs ul.svelte-1823hjs.svelte-1823hjs::-webkit-scrollbar{display:none}.mobile-porject-list.svelte-1823hjs li.svelte-1823hjs.svelte-1823hjs{width:16rem;background:var(--lg-bg);box-shadow:rgba(0, 0, 0, 0.34) 0px 3px 8px;border-radius:.5rem;margin-bottom:.5rem;position:relative}.mobile-porject-list.svelte-1823hjs img.svelte-1823hjs.svelte-1823hjs{width:4rem;height:6rem;object-fit:cover;border-radius:.5rem 0rem 0rem .5rem}.horizontal-flex.svelte-1823hjs.svelte-1823hjs.svelte-1823hjs{display:flex}.project-text.svelte-1823hjs.svelte-1823hjs.svelte-1823hjs{padding:.5rem}.mobile-porject-list.svelte-1823hjs span.svelte-1823hjs.svelte-1823hjs{color:#2B3F5A;font-weight:600;font-size:.7rem}.mobile-porject-list.svelte-1823hjs h3.svelte-1823hjs.svelte-1823hjs{color:#7FAEC5;font-size:1rem;line-height:1.2rem;margin-bottom:.5rem}.mobile-project-header.svelte-1823hjs.svelte-1823hjs.svelte-1823hjs{display:block;padding:0rem 0rem 1rem 2.5rem}.mobile-project-header.svelte-1823hjs .searchbar.svelte-1823hjs.svelte-1823hjs{width:calc(100% - 2.5rem)}.filter-item-list.svelte-1823hjs li.svelte-1823hjs.svelte-1823hjs{margin-right:.1rem;padding:.2rem .6rem;cursor:pointer;font-size:.7rem;-webkit-user-select:none;-ms-user-select:none;user-select:none}i.svelte-1823hjs.svelte-1823hjs.svelte-1823hjs{position:absolute;right:0;bottom:0;padding:.6rem 1.2rem;color:#73CA6A}}",
  map: null
};
const Projecten = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css$4);
  return `<section class="svelte-1823hjs"> <div class="mobile-project-header svelte-1823hjs" data-svelte-h="svelte-ibxate"><h2 class="svelte-1823hjs">Projecten</h2> <ul class="filter-item-list svelte-1823hjs" id="filterList-mobile"><li class="active svelte-1823hjs">Klimaatadaptatie</li> <li class="svelte-1823hjs">Waterkwaliteit</li> <li class="svelte-1823hjs">B-RAIN</li></ul> <input class="searchbar svelte-1823hjs" type="search" id="search" name="search" placeholder="Zoek een project"></div>  <div class="project-view-container svelte-1823hjs"><article class="projects svelte-1823hjs"><div class="set-max-height"><span class="anchor svelte-1823hjs" id="projecten"></span> <div class="filter-row svelte-1823hjs" data-svelte-h="svelte-1h2x86q"><h2 class="svelte-1823hjs">Projecten</h2> <ul class="filter-item-list svelte-1823hjs" id="filterList"><li class="active svelte-1823hjs">Klimaatadaptatie</li> <li class="svelte-1823hjs">Waterkwaliteit</li> <li class="svelte-1823hjs">B-RAIN</li></ul> <input class="searchbar svelte-1823hjs" type="search" id="search" name="search" placeholder="Zoek een project"></div> <div class="project-list-container svelte-1823hjs"><ul class="project-list svelte-1823hjs"> ${each(data.projectens, (project) => {
    return `<a href="${"/projecten/" + escape(project.slug, true)}" class="svelte-1823hjs"><li${add_attribute("id", project.slug, 0)} class="svelte-1823hjs"><div class="horizontal-flex svelte-1823hjs"><img${add_attribute("src", project.image.url, 0)} alt="" class="svelte-1823hjs"> <div class="project-text svelte-1823hjs"><span class="svelte-1823hjs">${escape(project.categorie)}</span> <h3 class="svelte-1823hjs">${escape(project.title)}</h3> <p class="svelte-1823hjs">${escape(project.intro)}</p> <i class="fa fa-arrow-right svelte-1823hjs" aria-hidden="true"></i></div> </div></li> </a>`;
  })}</ul></div></div></article> <div class="mobile-porject-list svelte-1823hjs"><ul class="svelte-1823hjs"> ${each(data.projectens, (project) => {
    return `<a href="${"/projecten/" + escape(project.slug, true)}" class="svelte-1823hjs"><li id="${escape(project.slug, true) + "-mobile"}" class="svelte-1823hjs"><div class="horizontal-flex svelte-1823hjs"><img${add_attribute("src", project.image.url, 0)} alt="" class="svelte-1823hjs"> <div class="project-text svelte-1823hjs"><span class="svelte-1823hjs">${escape(project.categorie)}</span> <h3 class="svelte-1823hjs">${escape(project.title)}</h3> <i class="fa fa-arrow-right svelte-1823hjs" aria-hidden="true"></i></div> </div></li> </a>`;
  })}</ul></div> <article class="project-map svelte-1823hjs" data-svelte-h="svelte-18zrqqm"><div id="map" class="svelte-1823hjs"></div></article></div> </section>`;
});
const Kennisbank_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: 'h2.svelte-orbbeh.svelte-orbbeh{padding-top:6rem;color:var(--spat)}section.svelte-orbbeh.svelte-orbbeh{margin-top:5rem;height:100%;padding-bottom:5rem;background:var(--lg-bg)}.mobile-blog-header.svelte-orbbeh.svelte-orbbeh{display:none}.intro-text.svelte-orbbeh.svelte-orbbeh{display:none}a.svelte-orbbeh.svelte-orbbeh{text-decoration:none}.blog-view-container.svelte-orbbeh.svelte-orbbeh{display:grid;padding:0.7rem 2.5rem;grid-template-columns:0.9fr 0.9fr 1fr;grid-template-rows:0.1fr 1fr;gap:2rem;row-gap:1rem;grid-template-areas:"latest latest bloglist"\n      "blog2 blog3 bloglist"}.latest.svelte-orbbeh.svelte-orbbeh{grid-area:latest}.blog2.svelte-orbbeh.svelte-orbbeh{background-color:#ffffff;height:25rem;box-shadow:rgba(0, 0, 0, 0.14) 0px 3px 8px;border-radius:0.5rem;cursor:pointer;grid-area:blog2}.blog3.svelte-orbbeh.svelte-orbbeh{height:25rem;background-color:#ffffff;box-shadow:rgba(0, 0, 0, 0.14) 0px 3px 8px;border-radius:0.5rem;cursor:pointer;grid-area:blog3}.bloglist.svelte-orbbeh.svelte-orbbeh{grid-area:bloglist}.blog.svelte-orbbeh.svelte-orbbeh{width:100%;display:flex;flex-direction:column;height:85vh;gap:1rem}.filter-container.svelte-orbbeh.svelte-orbbeh{gap:1rem;padding:0rem 2.7rem 0rem 2.5rem}.hygraph-html.svelte-orbbeh.svelte-orbbeh{max-width:29rem;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:5;line-clamp:5;-webkit-box-orient:vertical}.hygraph-html2.svelte-orbbeh.svelte-orbbeh{max-width:25rem;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:4;line-clamp:4;-webkit-box-orient:vertical;padding-left:1.5rem}.hygraph-html3.svelte-orbbeh.svelte-orbbeh{max-width:25rem;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:4;line-clamp:4;-webkit-box-orient:vertical;padding-left:1.5rem}.content-field2.svelte-orbbeh.svelte-orbbeh,.content-field3.svelte-orbbeh.svelte-orbbeh{display:flex;justify-content:space-between;padding-left:1.5rem;padding-top:1rem;padding-right:1.5rem;padding-bottom:1rem;color:#2b3f5a}.filter-row.svelte-orbbeh.svelte-orbbeh{display:flex;align-items:center;width:100%;justify-content:space-between}.filter-item-list.svelte-orbbeh.svelte-orbbeh{list-style:none;padding:0;display:flex;justify-content:space-between;align-items:center;margin:2rem 0rem 1rem 0rem;color:#2b3f5a}.filter-item-list.svelte-orbbeh li.svelte-orbbeh{margin-right:1.5rem;padding:0.2rem 0.6rem;cursor:pointer;font-size:0.8rem;-webkit-user-select:none;-ms-user-select:none;user-select:none}.active.svelte-orbbeh.svelte-orbbeh{background-color:#4ecd5d;color:#ffffff;border-radius:0.5rem}.searchbar-container.svelte-orbbeh.svelte-orbbeh{margin:1rem 0rem 1rem 0rem}.searchbar.svelte-orbbeh.svelte-orbbeh{width:30.2rem;padding:0.5rem 0.6rem;border-radius:0.5rem;border:none;box-shadow:rgba(0, 0, 0, 0.14) 0px 3px 8px}.searchbar.svelte-orbbeh.svelte-orbbeh::placeholder{color:#b7b7b7}.blog-list-container.svelte-orbbeh.svelte-orbbeh{height:80vh;overflow-y:scroll}.blog-list-container.svelte-orbbeh.svelte-orbbeh::-webkit-scrollbar{display:none}.blog-list.svelte-orbbeh.svelte-orbbeh{list-style:none;padding:0;height:100vh;width:100%}.blog-list.svelte-orbbeh li.svelte-orbbeh{background-color:#ffffff;box-shadow:rgba(0, 0, 0, 0.14) 0px 3px 8px;border-radius:0.5rem;cursor:pointer;display:flex;margin-bottom:1rem;height:8rem;width:99%}.blog-info-row.svelte-orbbeh.svelte-orbbeh{display:flex;justify-content:space-between;align-items:center;gap:3rem}.author.svelte-orbbeh.svelte-orbbeh{position:absolute;font-size:0.6rem !important;padding-top:0.2rem;right:1.5rem}.author2.svelte-orbbeh.svelte-orbbeh,.author3.svelte-orbbeh.svelte-orbbeh{font-size:0.7rem !important;padding-top:0.2rem}.blog-list.svelte-orbbeh img.svelte-orbbeh{width:10rem;height:auto;object-fit:cover;padding:0;margin:0;border-radius:0.5rem 0rem 0rem 0.5rem}.blog-list.svelte-orbbeh .blog-text.svelte-orbbeh{padding:1rem 1rem;position:relative}.blog-list.svelte-orbbeh span.svelte-orbbeh{color:#2b3f5a;font-size:0.8rem;margin-bottom:0.5rem}.blog-list.svelte-orbbeh h3.svelte-orbbeh{color:#7faec5;margin-bottom:0.5rem}.main-post.svelte-orbbeh.svelte-orbbeh{width:100%;height:17rem;display:flex;box-shadow:rgba(0, 0, 0, 0.14) 0px 3px 8px;border-radius:0.5rem;background-color:#ffffff;position:relative;overflow:hidden}.main-post.svelte-orbbeh img.svelte-orbbeh{width:20rem;object-fit:cover;border-radius:0.5rem 0rem 0rem 0.5rem}.main-post.svelte-orbbeh .content-field.svelte-orbbeh{max-width:35rem;padding:1.5rem}.main-post.svelte-orbbeh span.svelte-orbbeh{color:#2b3f5a;font-size:0.9rem}.main-post.svelte-orbbeh h3.svelte-orbbeh{color:#7faec5;margin-bottom:0.5rem;margin-top:1rem}.main-post2.svelte-orbbeh h3.svelte-orbbeh,.main-post3.svelte-orbbeh h3.svelte-orbbeh{padding-left:1.5rem;color:#7faec5;margin-bottom:0.5rem;font-size:1rem}.main-post2.svelte-orbbeh img.svelte-orbbeh,.main-post3.svelte-orbbeh img.svelte-orbbeh{width:100%;height:10rem;object-fit:cover;border-radius:0.5rem 0.5rem 0rem 0rem}.main-post2.svelte-orbbeh.svelte-orbbeh,.main-post3.svelte-orbbeh.svelte-orbbeh{overflow:hidden}.read-more-container.svelte-orbbeh.svelte-orbbeh{margin-top:1.8rem}.read-more-container2.svelte-orbbeh.svelte-orbbeh,.read-more-container3.svelte-orbbeh.svelte-orbbeh{height:5rem;margin-top:1.5rem;margin-left:1.5rem}.read-more-link.svelte-orbbeh.svelte-orbbeh{width:6.5rem;bottom:1rem;cursor:pointer;font-size:0.9rem;color:#4ecd5d;border-radius:0.5rem}.read-more-link2.svelte-orbbeh.svelte-orbbeh,.read-more-link3.svelte-orbbeh.svelte-orbbeh{color:#4ecd5d;border-radius:0.5rem;width:6.5rem;font-size:0.9rem}.read-more-small.svelte-orbbeh i.svelte-orbbeh{position:absolute;right:1.5rem;bottom:1rem;color:#73ca6a;transition:0.2s}.read-more-small.svelte-orbbeh:hover i.svelte-orbbeh{transform:translateX(0.5rem)}#map.svelte-orbbeh.svelte-orbbeh{height:85vh;pointer-events:none}@media only screen and (max-width: 1100px){.blog.svelte-orbbeh.svelte-orbbeh{width:100%}.blog-view-container.svelte-orbbeh.svelte-orbbeh{display:block}.blog2.svelte-orbbeh.svelte-orbbeh,.blog3.svelte-orbbeh.svelte-orbbeh{display:none}.main-post.svelte-orbbeh.svelte-orbbeh{display:none}.filter-row.svelte-orbbeh.svelte-orbbeh{display:none}.filter-item-list.svelte-orbbeh.svelte-orbbeh{display:flex;flex-wrap:wrap;row-gap:0.5rem}.mobile-blog-header.svelte-orbbeh.svelte-orbbeh{display:flex;flex-wrap:wrap;justify-content:space-between;margin-bottom:1rem}.blog-list.svelte-orbbeh li.svelte-orbbeh{display:flex;flex-direction:column;height:23rem}.blog-list.svelte-orbbeh img.svelte-orbbeh{width:100%;height:8rem;border-radius:0.5rem 0.5rem 0rem 0rem}.intro-text.svelte-orbbeh.svelte-orbbeh{display:block}.mobile-blog-header.svelte-orbbeh li.svelte-orbbeh{display:flex;flex-wrap:wrap;justify-content:space-between;margin-right:0.1rem;font-size:0.7rem}}',
  map: null
};
const Kennisbank = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  console.log(data);
  let lastPost1 = data.kennisbanks[data.kennisbanks.length - 1];
  let lastPost2 = data.kennisbanks[data.kennisbanks.length - 2];
  let lastPost3 = data.kennisbanks[data.kennisbanks.length - 3];
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css$3);
  return `<section class="svelte-orbbeh"><div class="filter-container svelte-orbbeh" data-svelte-h="svelte-g1ubca"><h2 id="kennisbank" class="svelte-orbbeh">Kennisbank</h2> <div class="mobile-blog-header svelte-orbbeh"><ul class="filter-item-list svelte-orbbeh" id="filterList-mobile"><li class="active svelte-orbbeh">Alles</li> <li class="svelte-orbbeh">Klimaatadaptatie</li> <li class="svelte-orbbeh">Waterkwaliteit</li> <li class="svelte-orbbeh">B-RAIN</li></ul> <input class="searchbar svelte-orbbeh" type="search" id="search" name="search" placeholder="Zoek een project"></div> <div class="filter-row svelte-orbbeh"><div class="filter-list-container"><ul class="filter-item-list svelte-orbbeh" id="filterList"><li class="active svelte-orbbeh">Alles</li> <li class="svelte-orbbeh">Klimaatadaptatie</li> <li class="svelte-orbbeh">Waterkwaliteit</li> <li class="svelte-orbbeh">B-RAIN</li></ul></div> <div class="searchbar-container svelte-orbbeh"><input class="searchbar svelte-orbbeh" type="search" id="search" name="search" placeholder="Zoek een post"></div></div></div> <div class="blog-view-container svelte-orbbeh"><div class="latest svelte-orbbeh"><article class="main-post svelte-orbbeh">${data.kennisbanks.length > 0 ? `<img${add_attribute("src", lastPost1.image.url, 0)} alt="" class="svelte-orbbeh"> <div class="content-field svelte-orbbeh"><span class="category svelte-orbbeh">${escape(lastPost1.categorie)}</span> <span class="author svelte-orbbeh">Door ${escape(lastPost1.author)} op ${escape(lastPost1.date)}</span> <h3 class="svelte-orbbeh">${escape(lastPost1.title)}</h3> <div class="hygraph-html svelte-orbbeh"><!-- HTML_TAG_START -->${lastPost1.content.html}<!-- HTML_TAG_END --></div> <div class="read-more-container svelte-orbbeh"><a class="read-more-link svelte-orbbeh" href="${"/post/" + escape(lastPost1.slug, true)}">Verder lezen</a></div></div>` : ``}</article></div> <div class="blog2 svelte-orbbeh"><article class="main-post2 svelte-orbbeh">${data.kennisbanks.length > 0 ? `<img${add_attribute("src", lastPost2.image.url, 0)} alt="" class="svelte-orbbeh"> <div class="content-field2 svelte-orbbeh"><span class="category2">${escape(lastPost2.categorie)}</span> <span class="author2 svelte-orbbeh">Door ${escape(lastPost2.author)} op ${escape(lastPost2.date)}</span></div> <h3 class="svelte-orbbeh">${escape(lastPost2.title)}</h3> <div class="hygraph-html2 svelte-orbbeh"><!-- HTML_TAG_START -->${lastPost2.content.html}<!-- HTML_TAG_END --></div> <div class="read-more-container2 svelte-orbbeh"><a class="read-more-link2 svelte-orbbeh" href="${"/post/" + escape(lastPost2.slug, true)}">Verder lezen</a></div>` : ``}</article></div> <div class="blog3 svelte-orbbeh"><article class="main-post3 svelte-orbbeh">${data.kennisbanks.length > 0 ? `<img${add_attribute("src", lastPost3.image.url, 0)} alt="" class="svelte-orbbeh"> <div class="content-field3 svelte-orbbeh"><span class="category3">${escape(lastPost3.categorie)}</span> <span class="author3 svelte-orbbeh">Door ${escape(lastPost3.author)} op ${escape(lastPost3.date)}</span></div> <h3 class="svelte-orbbeh">${escape(lastPost3.title)}</h3> <div class="hygraph-html3 svelte-orbbeh"><!-- HTML_TAG_START -->${lastPost3.content.html}<!-- HTML_TAG_END --></div> <div class="read-more-container3 svelte-orbbeh"><a class="read-more-link3 svelte-orbbeh" href="${"/post/" + escape(lastPost3.slug, true)}">Verder lezen</a></div>` : ``}</article></div> <div class="bloglist svelte-orbbeh"><article class="blog svelte-orbbeh"><div class="set-max-height"><div class="blog-list-container svelte-orbbeh"><ul class="blog-list svelte-orbbeh">${each(data.kennisbanks, (post) => {
    return `<a href="${"/post/" + escape(post.slug, true)}" class="svelte-orbbeh"><li${add_attribute("id", post.slug, 0)} class="svelte-orbbeh"><img${add_attribute("src", post.image.url, 0)} alt="" class="svelte-orbbeh"> <div class="blog-text svelte-orbbeh"><div class="blog-info-row svelte-orbbeh"><span class="category svelte-orbbeh">${escape(post.categorie)}</span> <span class="author svelte-orbbeh">Door ${escape(post.author)} op ${escape(post.date)}</span></div> <h3 class="svelte-orbbeh">${escape(post.title)}</h3> <p class="intro-text svelte-orbbeh" data-svelte-h="svelte-x21ad4">Het is tijd om Nederlanders bewust te maken van de hoeveelheid regenwater op- en rondom het huis. Onze oplossing is het grootschalig inzetten vanmicro-maatregelen.</p> <a class="read-more-small svelte-orbbeh" href="${"/post/" + escape(post.slug, true)}"><i class="fa fa-arrow-right svelte-orbbeh" aria-hidden="true"></i></a> </div></li> </a>`;
  })}</ul></div></div></article></div></div> </section>`;
});
const Team_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: 'section.svelte-ozquov{height:100vh;background:white}.team2.svelte-ozquov{display:none}.team-title.svelte-ozquov{padding:4rem 2.5rem;color:var(--spat)}.team.svelte-ozquov{position:relative;background-color:white;height:100vh;padding-top:6em;padding-bottom:3em}.team-container.svelte-ozquov{padding:2em 4em 2em 4em;overflow:hidden}.team-card.svelte-ozquov{width:300px;height:240px;border-radius:10px}.team-text.svelte-ozquov{position:absolute;bottom:1rem;left:1rem}.team-name.svelte-ozquov,.team-mail.svelte-ozquov{color:white}.team-mail.svelte-ozquov{display:block;font-size:0.75rem}.team-img.svelte-ozquov{transition:0.3s;width:100%}.team-img.svelte-ozquov:hover{transform:scale(1.1)}@media screen and (min-width: 720px){.team.svelte-ozquov{display:none}h2.svelte-ozquov{font-size:1rem;padding:4rem 2rem}.team2.svelte-ozquov{position:relative;background-color:white;display:grid;padding:0 0.4em 4em 0.4em}.team2-title.svelte-ozquov{font-size:2rem;color:var(--spat);font-weight:600;padding-top:4em}.team2-wrapper.svelte-ozquov{display:grid;justify-content:center;gap:2em;padding-bottom:3em;margin:0 auto;grid-template-columns:repeat(3, 1fr)}.team2-mees.svelte-ozquov{background-image:url("assets/Mees1_fullscreen.png");background-size:100%;background-repeat:no-repeat;border-radius:10px;width:250px;height:300px}.team2-timo.svelte-ozquov{background-image:url("assets/Timo1_fullscreen.png");background-size:100%;background-repeat:no-repeat;border-radius:10px;width:250px;height:300px}.team2-jesse.svelte-ozquov{background-image:url("assets/Jesse1_fullscreen.png");background-size:100%;background-repeat:no-repeat;border-radius:10px;width:250px;height:300px}.name.svelte-ozquov{font-size:1.5rem;display:block;color:white}.mail.svelte-ozquov{font-size:0.8rem;display:block;color:white}.personal-information.svelte-ozquov{margin:14.5em 0em 0.3em 1em}.team2-mees.svelte-ozquov:hover{background-image:url("assets/Mees2_fullscreen.png");background-size:100%;background-repeat:no-repeat;border-radius:10px;width:250px;height:300px;transition:0.2s ease-in}.team2-timo.svelte-ozquov:hover{background-image:url("assets/Timo2_fullscreen.png");background-size:100%;background-repeat:no-repeat;border-radius:10px;width:250px;height:300px;transition:0.2s ease-in}.team2-jesse.svelte-ozquov:hover{background-image:url("assets/Jesse2_fullscreen.png");background-size:100%;background-repeat:no-repeat;border-radius:10px;width:250px;height:300px;transition:0.2s ease-in}}',
  map: null
};
const Team = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  console.log(data);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css$2);
  return `<section class="team section svelte-ozquov" data-svelte-h="svelte-ttod4e"><h2 class="team-title svelte-ozquov">Team</h2> <div class="team-container swiper-container svelte-ozquov"><div class="swiper-wrapper"> <div class="team-card swiper-slide svelte-ozquov"><img src="assets/mees1.png" alt="foto Mees" class="team-img svelte-ozquov">  <div class="team-text svelte-ozquov"><h2 class="team-name svelte-ozquov">Mees</h2> <h3 class="team-mail svelte-ozquov">m.vmilligen@spatwater.nl</h3></div></div>  <div class="team-card swiper-slide svelte-ozquov"><img src="assets/timo.png" alt="foto Mees" class="team-img svelte-ozquov"> <div class="team-text svelte-ozquov"><h2 class="team-name svelte-ozquov">Timo</h2> <h3 class="team-mail svelte-ozquov">t.vdberg@spatwater.nl</h3></div></div>  <div class="team-card swiper-slide svelte-ozquov"><img src="assets/jesse.png" alt="foto Mees" class="team-img svelte-ozquov"> <div class="team-text svelte-ozquov"><h2 class="team-name svelte-ozquov">Jesse</h2> <h3 class="team-mail svelte-ozquov">j.schoenmakers@spatwater.nl</h3></div></div></div></div></section>  <section class="team2 discover svelte-ozquov" id="team2" data-svelte-h="svelte-vax9zl"><h2 class="team2-title svelte-ozquov">Team</h2> <div class="team2-wrapper svelte-ozquov"><div class="team2-mees svelte-ozquov"><div class="personal-information svelte-ozquov"><h3 class="name svelte-ozquov">Mees</h3> <h4 class="mail svelte-ozquov">m.vmilligen@spatwater.nl</h4></div></div> <div class="team2-timo svelte-ozquov"><div class="personal-information svelte-ozquov"><h3 class="name svelte-ozquov">Timo</h3> <h4 class="mail svelte-ozquov">t.vdberg@spatwater.nl</h4></div></div> <div class="team2-jesse svelte-ozquov"><div class="personal-information svelte-ozquov"><h3 class="name svelte-ozquov">Jesse</h3> <h4 class="mail svelte-ozquov">j.schoenmakers@spatwater.nl</h4></div></div></div> </section>`;
});
const Contact_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".contact.svelte-1t3t98c{padding:4rem 3rem;height:auto;background-color:var(--lg-bg)}.contact-text.svelte-1t3t98c{font-size:0.8em;color:var(--darkblue)}.contact-data.svelte-1t3t98c{color:var(--spat)}",
  map: null
};
const Contact = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<section class="contact section svelte-1t3t98c" id="experience" data-svelte-h="svelte-1cvlhgl"><div class="contact-container container grid"><div class="contact-data svelte-1t3t98c"><div class="contact-text svelte-1t3t98c"><h2>We houden van korte lijntjes, jij toch ook?</h2> <h2>Kom met ons in gesprek!</h2> <span class="send-us">Stuur ons een mail</span></div> <p class="mail-text"><strong>info@spatwater.nl</strong></p></div></div> </section>`;
});
const Partners_svelte_svelte_type_style_lang = "";
const css = {
  code: ".sponsor.svelte-1tgr4oh{position:relative;padding:6rem\n      3.5rem}.sponsor__container.svelte-1tgr4oh{display:grid;grid-template-columns:repeat(\n      auto-fit,\n      minmax(\n        110px,\n        1fr\n      )\n    );justify-items:center;row-gap:3.5rem;align-items:center}.sponsor-img.svelte-1tgr4oh{width:90px;height:auto;opacity:0.5;filter:invert(\n      0.7\n    );transition:0.3s}@media screen and (min-width: 720px){.sponsor__container.svelte-1tgr4oh{grid-template-columns:repeat(\n        3,\n        1fr\n      );justify-items:center;row-gap:3.5rem}.sponsor-img.svelte-1tgr4oh{width:80px;opacity:0.5;filter:invert(\n        0.7\n      );transition:0.3s}}@media screen and (min-width: 768px){.sponsor-img.svelte-1tgr4oh{width:90px}}",
  map: null
};
const Partners = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  console.log(data);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<section class="sponsor section svelte-1tgr4oh"><div class="sponsor__container container grid svelte-1tgr4oh">${each(data.partner, (partner) => {
    return `<a${add_attribute("href", partner.link, 0)}><img${add_attribute("src", partner.image.url, 0)} alt="logo's partners" class="sponsor-img svelte-1tgr4oh"></a>`;
  })}</div> </section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})} ${validate_component(Home, "Home").$$render($$result, {}, {}, {})} ${validate_component(Over, "Over").$$render($$result, {}, {}, {})} ${validate_component(Expertise, "Expertise").$$render($$result, {}, {}, {})} ${validate_component(Klimaatadaptatie, "Klimaatadaptatie").$$render($$result, {}, {}, {})} ${validate_component(Waterkwaliteit, "Waterkwaliteit").$$render($$result, {}, {}, {})} ${validate_component(Brain, "Brain").$$render($$result, {}, {}, {})} ${validate_component(Projecten, "Projecten").$$render($$result, { data }, {}, {})} ${validate_component(Kennisbank, "Kennisbank").$$render($$result, { data }, {}, {})} ${validate_component(Team, "Team").$$render($$result, { data }, {}, {})} ${validate_component(Contact, "Contact").$$render($$result, {}, {}, {})} ${validate_component(Partners, "Partners").$$render($$result, { data }, {}, {})} ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
