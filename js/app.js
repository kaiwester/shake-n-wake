// Texts. Shared strings per language, plus one block per clock model (m["107"], m["180"]).
const T = {
  de: {
    h1: "Shake-n-Wake: welche Taste macht was?",
    lede1: "Für den kleinen Vibrationswecker mit einer AAA-Batterie.",
    lede2: "Funktion auswählen – die Tasten zum Drücken leuchten orange, die Zahlen zeigen die Reihenfolge.",
    modelQ: "Welcher Wecker? Die Modellnummer steht auf der Rückseite.",
    modelShort: "Wecker:",
    slideL: "Vibration", slideR: "Ton",
    nav: "Funktionen",
    groups: {tonight:"Heute Abend", buzz:"Wenn er weckt", later:"Ab und zu"},
    svg: "Wecker von oben mit markierten Tasten",
    foot: "Inoffizielle Kurzanleitung, nicht vom Hersteller. Zusammengefasst aus der",
    legend: "Zwei Namen an einer Taste = eine Taste. Fett ist der Name, den der Schritt meint.",
    hold:"halten", or:"oder", both:"beide", hold3:"3 s",
    m: {
      "107": {
        pick: "Tasten Mode und Reset, 1\u00a0Weckzeit",
        tip: "Wecker reagiert seltsam? Batterie herausnehmen, ein paar Minuten warten, wieder einlegen. Er startet neu in der Uhrzeit-Anzeige – danach Uhrzeit und Weckzeit neu einstellen und den Wecker wieder einschalten.",
        footLink: "Original-Anleitung des Shake-n-Wake PI-107 (PDF)",
        f: {
          zeit: {n:"Uhrzeit und Datum", s:["In der Uhrzeit-Anzeige Mode 3× drücken – die Sekunden blinken.","Adjust ändert den blinkenden Wert (Sekunden: zurück auf 00).","Time Set springt zum nächsten Feld: Sekunden → Minuten → Stunden → Tag → Monat → Wochentag.","Mode drücken – fertig."], note:"12 oder 24 Stunden: Bei den Stunden mit Adjust weiterdrücken, bis das gewünschte Format erscheint."},
          alarm: {n:"Weckzeit einstellen", s:["In der Uhrzeit-Anzeige Mode 2× drücken – die Weck-Stunde blinkt.","Adjust ändert die Stunde.","Time Set wechselt zu den Minuten, wieder mit Adjust ändern.","Mode drücken – fertig.","Prüfen: Alarm-Symbol im Display = der Wecker ist an. Kein Symbol? Siehe „[[an]]“."], note:"Der Wecker klingelt jeden Tag. Den blinkenden Wochentag beim Einstellen einfach ignorieren."},
          an: {n:"Wecker an oder aus", s:["In der Uhrzeit-Anzeige Time Set und Adjust gleichzeitig drücken.","Alarm-Symbol im Display = an. Kein Symbol = aus."], note:""},
          zeig: {n:"Weckzeit anzeigen", s:["Reset drücken – das Display zeigt die eingestellte Weckzeit."], note:""},
          snooze: {n:"Schlummern", s:["Wenn er weckt: Start/Stop drücken – 5 Minuten Ruhe."], note:"Zum Beenden für heute eine andere Taste drücken (siehe „Wecken beenden“). Achtung: „Wecker aus“ (Time Set + Adjust) schaltet ihn auch für morgen aus."},
          beenden: {n:"Wecken beenden", s:["Wenn er weckt: Mode, Reset oder die Lampen-Taste drücken – Ruhe bis morgen."], note:"Start/Stop beendet das Wecken nicht, sondern schlummert nur 5 Minuten. Der Wecker bleibt an und weckt morgen wieder."},
          stopp: {n:"Stoppuhr", s:["In der Uhrzeit-Anzeige Mode 1× drücken – Stoppuhr-Modus.","Start/Stop startet und stoppt.","Reset setzt auf 00:00 zurück.","Mode drücken – zurück zur Uhrzeit."], note:""},
          stunde: {n:"Signal zur vollen Stunde", s:["Time Set gedrückt halten.","Dazu Mode drücken. Alle Wochentage sichtbar = an, verschwunden = aus."], note:""},
          licht: {n:"Licht", s:["Lampen-Taste drücken – das Display leuchtet 3 Sekunden."], note:""},
          vib: {n:"Vibration oder Ton", s:["Schieber an der Unterkante: links = lautlose Vibration, rechts = Piepton."], note:"Tipp: Unters Kopfkissen legen oder mit dem Armband ums Handgelenk tragen."}
        }
      },
      "180": {
        pick: "Tasten Hour, Minute und Snooze, 2\u00a0Weckzeiten",
        slideR: "Ton",
        tip: "Batterie wechseln: Deckel nach links schieben, eine AAA-Batterie einlegen – der Wecker vibriert kurz. Deckel nach rechts zurückschieben. Danach Uhrzeit und Weckzeiten prüfen.",
        footLink: "Original-Anleitung des Shake-n-Wake PI-180SNW (PDF)",
        f: {
          alarm: {n:"Weckzeiten einstellen", s:["Set drücken – die Uhrzeit blinkt.","Set noch einmal drücken – Alarm 1 blinkt. Mit Hour und Minute einstellen.","Set noch einmal drücken – Alarm 2 blinkt. Mit Hour und Minute einstellen.","Set drücken – fertig.","Prüfen: Bei Alarm 1 und Alarm 2 steht eine Uhrzeit. OFF heißt, dieser Alarm ist aus – zum Wiedereinschalten siehe „[[aus]]“."], note:"Jeder Alarm weckt jeden Tag zur eingestellten Zeit, bis er abgeschaltet wird. Nur ein Alarm gebraucht? Den anderen abschalten."},
          vib: {n:"Vibration oder Ton", s:["Schieber an der Unterkante: links = lautlose Vibration, rechts = Ton."], note:"Tipp: Unters Kopfkissen legen oder mit dem Armband ums Handgelenk tragen."},
          aus: {n:"Alarm abschalten", s:["Set/Alarm Off drücken, bis der gewünschte Alarm blinkt.","Hour und Minute zusammen 3 Sekunden halten, bis OFF erscheint.","Set/Alarm Off drücken – OFF hört auf zu blinken, der Alarm ist aus."], note:"Wieder einschalten: Weckzeit neu einstellen. Das steht nicht in der Anleitung – bitte am eigenen Wecker prüfen."},
          snooze: {n:"Schlummern", s:["Wenn er weckt: Snooze drücken (Lampen-Taste unten links) – 5 Minuten Ruhe, ZZZ blinkt."], note:"Höchstens 5× hintereinander. Ohne Tastendruck weckt er 1 Minute lang, pausiert 5 Minuten und wiederholt das 3×."},
          beenden: {n:"Wecken beenden", s:["Wenn er weckt: Set/Alarm Off drücken – Ruhe bis morgen."], note:"Snooze beendet das Wecken nicht, sondern schlummert nur 5 Minuten. Der Alarm bleibt an und weckt morgen wieder."},
          zeit: {n:"Uhrzeit einstellen", s:["Set/Alarm Off drücken – die Uhrzeit blinkt.","Hour und Minute ändern die Uhrzeit.","Set/Alarm Off drücken – fertig."], note:"Weiteres Drücken von Set führt zu Alarm 1 und 2 (siehe „Weckzeiten einstellen“)."},
          h24: {n:"12 oder 24 Stunden", s:["Minute und Snooze zusammen 3 Sekunden halten.","AM oder PM im Display = 12 Stunden. Kein AM/PM = 24 Stunden."], note:""},
          licht: {n:"Licht", s:["Lampen-Taste (Snooze) drücken – das Display leuchtet 5 Sekunden."], note:""}
        }
      }
    }
  },
  en: {
    h1: "Shake-n-Wake: which button does what?",
    lede1: "For the small vibrating alarm clock that runs on one AAA battery.",
    lede2: "Pick a function – the buttons to press light up orange, the numbers show the order.",
    modelQ: "Which clock? The model number is on the back.",
    modelShort: "Clock:",
    slideL: "Vibrate", slideR: "Beep",
    nav: "Functions",
    groups: {tonight:"Tonight", buzz:"When it buzzes", later:"Now and then"},
    svg: "Top view of the clock with highlighted buttons",
    foot: "Unofficial quick guide, not from the manufacturer. Summarised from the",
    legend: "Two names on one button = one button. Bold is the name the step means.",
    hold:"hold", or:"or", both:"both", hold3:"3 s",
    m: {
      "107": {
        pick: "Mode and Reset buttons, 1\u00a0alarm",
        tip: "Clock acting up? Take the battery out, wait a few minutes, put it back. It restarts in time mode – then set the time and alarm again and switch the alarm back on.",
        footLink: "original Shake-n-Wake PI-107 instructions (PDF)",
        f: {
          zeit: {n:"Time and date", s:["In time mode, press Mode 3× – the seconds flash.","Adjust changes the flashing value (seconds: back to 00).","Time Set jumps to the next field: seconds → minutes → hours → day → month → weekday.","Press Mode – done."], note:"12 or 24 hours: while on the hours, keep pressing Adjust until the format you want appears."},
          alarm: {n:"Set the alarm time", s:["In time mode, press Mode 2× – the alarm hour flashes.","Adjust changes the hour.","Time Set moves to the minutes, change them with Adjust.","Press Mode – done.","Check: alarm symbol on the display = the alarm is on. No symbol? See “[[an]]”."], note:"The alarm goes off every day. Ignore the flashing weekday while setting it."},
          an: {n:"Alarm on or off", s:["In time mode, press Time Set and Adjust together.","Alarm symbol on the display = on. No symbol = off."], note:""},
          zeig: {n:"Show alarm time", s:["Press Reset – the display shows the alarm time."], note:""},
          snooze: {n:"Snooze", s:["When it goes off: press Start/Stop – 5 minutes of quiet."], note:"To stop it for today, press another button (see “Stop the alarm”). Careful: “Alarm off” (Time Set + Adjust) also switches it off for tomorrow."},
          beenden: {n:"Stop the alarm", s:["When it goes off: press Mode, Reset or the light button – quiet until tomorrow."], note:"Start/Stop doesn’t end the alarm, it only snoozes for 5 minutes. The alarm stays on and goes off again tomorrow."},
          stopp: {n:"Stopwatch", s:["In time mode, press Mode 1× – stopwatch mode.","Start/Stop starts and stops.","Reset sets it back to 00:00.","Press Mode – back to the time."], note:""},
          stunde: {n:"Hourly chime", s:["Hold Time Set.","Press Mode as well. All weekdays shown = on, gone = off."], note:""},
          licht: {n:"Light", s:["Press the light button – the display lights up for 3 seconds."], note:""},
          vib: {n:"Vibrate or beep", s:["Slider on the bottom edge: left = silent vibration, right = beep."], note:"Tip: put it under your pillow or wear it on the wrist strap."}
        }
      },
      "180": {
        pick: "Hour, Minute and Snooze buttons, 2\u00a0alarms",
        slideR: "Sound",
        tip: "Changing the battery: slide the cover to the left, insert one AAA battery – the clock vibrates briefly. Slide the cover back to the right. Then check the time and alarms.",
        footLink: "original Shake-n-Wake PI-180SNW instructions (PDF)",
        f: {
          alarm: {n:"Set the alarms", s:["Press Set – the time flashes.","Press Set again – Alarm 1 flashes. Set it with Hour and Minute.","Press Set again – Alarm 2 flashes. Set it with Hour and Minute.","Press Set – done.","Check: Alarm 1 and Alarm 2 each show a time. OFF means that alarm is off – to switch it back on, see “[[aus]]”."], note:"Each alarm goes off every day at its time until you switch it off. Need only one? Switch the other one off."},
          vib: {n:"Vibrate or sound", s:["Slider on the bottom edge: left = silent vibration, right = sound."], note:"Tip: put it under your pillow or wear it on the wrist strap."},
          aus: {n:"Switch an alarm off", s:["Press Set/Alarm Off until the alarm you want to switch off flashes.","Hold Hour and Minute together for 3 seconds until OFF appears.","Press Set/Alarm Off – OFF stops flashing, the alarm is off."], note:"To switch it back on, set the alarm time again. This isn’t in the manual – please check on your own clock."},
          snooze: {n:"Snooze", s:["When it goes off: press Snooze (light button, bottom left) – 5 minutes of quiet, ZZZ flashes."], note:"At most 5× in a row. If you press nothing, it goes off for 1 minute, pauses 5 minutes and repeats this 3×."},
          beenden: {n:"Stop the alarm", s:["When it goes off: press Set/Alarm Off – quiet until tomorrow."], note:"Snooze doesn’t end the alarm, it only snoozes for 5 minutes. The alarm stays on and goes off again tomorrow."},
          zeit: {n:"Set the time", s:["Press Set/Alarm Off – the time flashes.","Hour and Minute change the time.","Press Set/Alarm Off – done."], note:"Pressing Set further moves on to Alarm 1 and 2 (see “Set the alarms”)."},
          h24: {n:"12 or 24 hours", s:["Hold Minute and Snooze together for 3 seconds.","AM or PM on the display = 12 hours. No AM/PM = 24 hours."], note:""},
          licht: {n:"Light", s:["Press the light button (Snooze) – the display lights up for 5 seconds."], note:""}
        }
      }
    }
  }
};

// Both models share the drawing: two keys on the left, two on the right, slider
// at the bottom. Key ids name the position: set = top left, light = bottom left,
// adj = top right, mode = bottom right.
// labels: text printed next to each key (same in every language).
// keys per function: n = step number(s) on the badge, c = second badge line
// (press count, or a key into T[lang]), l = which label of a two-name key the
// steps mean (omit = all labels).
const DAYS = ["SU","MO","TU","WE","TH","FR","SA"];
const MODELS = {
  "107": {
    prefix: "",
    labels: {"l-set1":"Reset","l-set2":"Time Set","l-light2":"","l-adj1":"Start/Stop","l-adj2":"Adjust","l-mode":"Mode"},
    keys: {
      zeit:{mode:{n:"1 + 4",c:"3×\u202f+\u202f1×"},adj:{n:"2",l:"l-adj2"},set:{n:"3",l:"l-set2"}},
      alarm:{mode:{n:"1 + 4",c:"2×\u202f+\u202f1×"},adj:{n:"2",l:"l-adj2"},set:{n:"3",l:"l-set2"}},
      an:{set:{n:"1",c:"both",l:"l-set2"},adj:{n:"1",c:"both",l:"l-adj2"}},
      zeig:{set:{n:"1",l:"l-set1"}},
      snooze:{adj:{n:"1",l:"l-adj1"}},
      beenden:{mode:{n:"1",c:"or"},set:{n:"1",c:"or",l:"l-set1"},light:{n:"1",c:"or",l:"l-light"}},
      stopp:{mode:{n:"1 + 4"},adj:{n:"2",l:"l-adj1"},set:{n:"3",l:"l-set1"}},
      stunde:{set:{n:"1",c:"hold",l:"l-set2"},mode:{n:"2"}},
      licht:{light:{n:"1",l:"l-light"}},
      vib:{slide:{n:""}}
    },
    // Functions grouped by the moment you need them, in the order you'd use them.
    groups: [
      {id:"tonight", items:["alarm","vib","an","zeig"]},
      {id:"buzz", items:["snooze","beenden"]},
      {id:"later", items:["zeit","licht","stunde","stopp"]}
    ],
    // The functions where the LCD shows the live time.
    live: ["an","beenden","licht","vib","stunde"],
    // LCD mock, following the PI-107 manual: the display has no words. The
    // weekday letters double as mode indicators (TU blinks while setting the
    // time, MO while setting the alarm, SU/FR/SA in the stopwatch, all letters =
    // hourly chime on), plus an "alarm on" symbol.
    lcd(cur){
      const d = {main:[[now()]]};
      const days = blink => DAYS.flatMap((x,i)=>i ? [[" "],[x, blink.includes(x)]] : [[x, blink.includes(x)]]);
      if (cur==="zeit"){ d.top=days(["TU"]); d.main=[["12:00"]]; d.sub=["00",true]; }
      else if (cur==="alarm"){ d.top=days(["MO"]); d.main=[["6",true],[":30"]]; }
      else if (cur==="an" || cur==="snooze" || cur==="beenden"){ d.bell=true; }
      else if (cur==="zeig"){ d.main=[["6:30"]]; d.bell=true; }
      else if (cur==="stopp"){ d.top=days(["SU","FR","SA"]); d.main=[["0:00"]]; d.sub=["00"]; }
      else if (cur==="stunde"){ d.top=days([]); }
      else if (cur==="licht"){ d.lit=true; }
      return d;
    }
  },
  "180": {
    prefix: "180-",
    labels: {"l-set1":"Set","l-set2":"Alarm Off","l-light2":"Snooze","l-adj1":"","l-adj2":"Hour","l-mode":"Minute"},
    keys: {
      alarm:{set:{n:"1–4",c:"4×"},adj:{n:"2 + 3"},mode:{n:"2 + 3"}},
      vib:{slide:{n:""}},
      aus:{set:{n:"1 + 3"},adj:{n:"2",c:"hold3"},mode:{n:"2",c:"hold3"}},
      snooze:{light:{n:"1",l:"l-light2"}},
      beenden:{set:{n:"1",l:"l-set2"}},
      zeit:{set:{n:"1 + 3"},adj:{n:"2"},mode:{n:"2"}},
      h24:{mode:{n:"1",c:"hold3"},light:{n:"1",c:"hold3",l:"l-light2"}},
      licht:{light:{n:"1",l:"l-light"}}
    },
    groups: [
      {id:"tonight", items:["alarm","vib","aus"]},
      {id:"buzz", items:["snooze","beenden"]},
      {id:"later", items:["zeit","h24","licht"]}
    ],
    live: ["vib","beenden","h24","licht"],
    // LCD mock, following the PI-180SNW manual: the two alarm times on top,
    // the time below, ZZZ while snoozing, OFF for a switched-off alarm.
    lcd(cur){
      const d = {top:[["AL1 6:30 AL2 7:00"]], main:[[now()]]};
      if (cur==="alarm"){ d.top=[["AL1 "],["6:30",true],[" AL2 7:00"]]; }
      else if (cur==="zeit"){ d.main=[["9:20",true]]; }
      else if (cur==="aus"){ d.top=[["AL1 6:30 AL2 "],["OFF",true]]; }
      else if (cur==="snooze"){ d.sub=["zzz",true]; }
      else if (cur==="h24"){ d.main=[["9:20"]]; d.am=true; }
      else if (cur==="licht"){ d.lit=true; }
      return d;
    }
  }
};
const MODEL_IDS = Object.keys(MODELS);
const MODEL_NAMES = {"107":"PI-107","180":"PI-180SNW"};
const ALL = ["set","light","adj","mode","slide"];
const LABELS = {set:["l-set1","l-set2"],light:["l-light","l-light2"],adj:["l-adj1","l-adj2"],mode:["l-mode"],slide:["l-slide","l-slide2"]};
const URLS = {
  "107": "https://cdn.commercev3.net/www.maxiaids.com/downloads/media/904107.pdf",
  "180": "https://m.media-amazon.com/images/I/B1+FXrp5rAS.pdf"
};

const $ = id => document.getElementById(id);
// The language is picked by the inline script in <head> (saved choice, else
// browser language) so English visitors never see the German markup first.
let lang = document.documentElement.lang === "en" ? "en" : "de";
let model = "107", cur = "alarm";

const order = m => MODELS[m].groups.flatMap(g => g.items);
// Hash = model prefix + function, e.g. #alarm (PI-107, as before) or #180-alarm.
function parseHash(){
  const h = location.hash.slice(1);
  for (const m of MODEL_IDS.slice().sort((a,b)=>MODELS[b].prefix.length-MODELS[a].prefix.length)){
    const p = MODELS[m].prefix;
    if (h.startsWith(p) && order(m).includes(h.slice(p.length))) return [m, h.slice(p.length)];
  }
  return null;
}

function now(){ const d=new Date(); return String(d.getHours()).padStart(2," ")+":"+String(d.getMinutes()).padStart(2,"0"); }

// Typography: keep a dash with the word before it, so no line starts with "–".
const typo = str => str.replace(/ – /g, " – ");
// Text with "Shake-n-Wake" kept on one line (CSS no-wrap span, no hidden characters).
function brand(el, str){
  const parts = typo(str).split("Shake-n-Wake");
  el.replaceChildren(...parts.flatMap((p,i)=>{
    if (!i) return [p];
    const b = document.createElement("span"); b.className = "nobr"; b.textContent = "Shake-n-Wake";
    return [b, p];
  }));
}

const SVGNS = "http://www.w3.org/2000/svg";
// [text, blinks?] pairs as tspans.
const spans = parts => parts.map(([txt, blink])=>{
  const ts = document.createElementNS(SVGNS,"tspan");
  ts.textContent = txt; if (blink) ts.classList.add("blink"); return ts;
});
function lcd(){
  const d = MODELS[model].lcd(cur);
  $("lcd").classList.toggle("lit", !!d.lit);
  $("lcd-top").replaceChildren(...spans(d.top || []));
  $("lcd-main").replaceChildren(...spans(d.main));
  $("lcd-sub").replaceChildren(...spans(d.sub ? [d.sub] : []));
  $("lcd-am").textContent = d.am ? "AM" : "";
  $("lcd-am").classList.toggle("blink", !!d.am);
  $("lcd-bell").style.visibility = d.bell ? "visible" : "hidden";
}

// Badge: step number(s) on line 1, optional count / hint on line 2.
// The rect grows downward around the key's vertical centre.
function badge(g, key, t){
  const r = g.querySelector("rect"), [n, c] = g.querySelectorAll("text");
  const mid = +g.dataset.mid, sub = key && key.c ? (t[key.c] || key.c) : "";
  n.textContent = key ? key.n : "";
  c.textContent = sub;
  const h = sub ? 44 : 30;
  r.setAttribute("y", mid - h/2); r.setAttribute("height", h);
  n.setAttribute("y", sub ? mid - 1 : mid + 6);
  c.setAttribute("y", mid + 15);
}

// On phones the nav is one horizontal strip: keep the current pill in view
// (e.g. when opened via a deep link to the last function).
const STRIP_FADE = 32;
function stripToCurrent(){
  const strip = $("nav"), a = strip.querySelector("[aria-current]");
  if (!a || strip.scrollWidth <= strip.clientWidth) return;
  // Prefer showing the whole group from its heading; centre the pill only
  // when the group is too wide for that to keep the pill in view.
  // Clear view = left padding .. right edge minus the fade-out (STRIP_FADE,
  // the 32px of the mask gradient in style.css), plus a little air.
  const pad = parseFloat(getComputedStyle(strip).paddingLeft) || 0;
  const view = strip.clientWidth - pad - STRIP_FADE - 4;
  const grpLeft = a.closest(".navgroup").offsetLeft - pad;
  const fits = a.offsetLeft + a.offsetWidth - grpLeft - pad <= view;
  const left = fits ? grpLeft : a.offsetLeft - pad - (view - a.offsetWidth) / 2;
  const smooth = !matchMedia("(prefers-reduced-motion: reduce)").matches;
  strip.scrollTo({left, behavior: smooth ? "smooth" : "auto"});
}

// Step text can point to another function of the same model with [[id]]:
// rendered as a link named after that function, e.g. „Alarm on or off“.
function linked(str, tm, M){
  return str.split(/\[\[(\w+)\]\]/).map((part, i)=>{
    if (!(i % 2)) return part;
    const a = document.createElement("a");
    a.href = "#"+M.prefix+part; a.textContent = tm.f[part].n;
    return a;
  });
}

// The nav is rebuilt only when the model changes; render() otherwise updates
// it in place so keyboard focus survives.
let navModel = null;
function buildNav(){
  const nav = $("nav"), M = MODELS[model];
  nav.replaceChildren(...M.groups.map(g=>{
    const grp = document.createElement("div"), head = document.createElement("p"), pills = document.createElement("div");
    grp.className = "navgroup"; grp.setAttribute("role","group"); grp.setAttribute("aria-labelledby","g-"+g.id);
    head.className = "navhead"; head.id = "g-"+g.id;
    pills.className = "pills";
    g.items.forEach(id=>{ const a=document.createElement("a"); a.id="n-"+id; a.href="#"+M.prefix+id; pills.append(a); });
    grp.append(head, pills); return grp;
  }));
  navModel = model;
}

function render(){
  const t = T[lang], tm = t.m[model], M = MODELS[model], f = tm.f[cur], k = M.keys[cur];
  if (navModel !== model) buildNav();
  document.documentElement.lang = lang;
  document.title = t.h1;
  brand($("h1"), t.h1); $("lede1").textContent=typo(t.lede1); $("lede2").textContent=typo(t.lede2);
  $("model-q").textContent = t.modelQ; $("model-short").textContent = t.modelShort;
  MODEL_IDS.forEach(m=>$("m"+m).textContent = t.m[m].pick);
  document.querySelectorAll(".model button").forEach(b=>b.setAttribute("aria-pressed", b.dataset.model===model));
  $("tip").textContent=typo(tm.tip); brand($("foot"), t.foot); brand($("foot-link"), tm.footLink); $("foot-link").href = URLS[model];
  $("legend").textContent=t.legend;
  // The legend explains bold vs. plain names on a two-name key: only show it
  // when this function highlights one name of such a key.
  $("legend").hidden = !Object.entries(k).some(([x, key])=>
    key.l && LABELS[x].filter(id=>M.labels[id]).length > 1);
  $("svgt").textContent=t.svg; $("l-slide").textContent=t.slideL; $("l-slide2").textContent=tm.slideR || t.slideR; $("nav").setAttribute("aria-label",t.nav);
  Object.entries(M.labels).forEach(([id, txt])=>$(id).textContent = txt);
  document.querySelectorAll(".lang button").forEach(b=>b.setAttribute("aria-pressed", b.dataset.lang===lang));
  M.groups.forEach(g=>{
    $("g-"+g.id).textContent = t.groups[g.id];
    g.items.forEach(id=>{
      const a = $("n-"+id);
      a.textContent = tm.f[id].n;
      if (id===cur) a.setAttribute("aria-current","page"); else a.removeAttribute("aria-current");
    });
  });
  ALL.forEach(x=>{
    const on = x in k, key = on ? k[x] : null;
    $("k-"+x).classList.toggle("hl", on);
    $("b-"+x).classList.toggle("show", on);
    if (x!=="slide") badge($("b-"+x), key, t);
    LABELS[x].forEach(id=>$(id).classList.toggle("hl", on && (!key.l || key.l===id)));
  });
  stripToCurrent();
  $("ttl").textContent = f.n;
  $("steps").className = f.s.length>1 ? "" : "plain";
  $("steps").replaceChildren(...f.s.map(s=>{ const li=document.createElement("li"); li.append(...linked(typo(s), tm, M)); return li; }));
  $("note").textContent = typo(f.note);
  $("note").hidden = !f.note;
  lcd();
  document.documentElement.classList.remove("pre-render");
}

// The LCD shows the real time for functions without a demo value.
// Tick on the minute boundary so it never lags behind.
function tick(){
  if (MODELS[model].live.includes(cur)) $("lcd-main").textContent = now();
  setTimeout(tick, 60000 - Date.now() % 60000 + 50);
}

function setModel(m){
  if (m===model) return;
  model = m;
  try{localStorage.setItem("snw-model",m);}catch(e){}
  if (!order(m).includes(cur)) cur = "alarm";
  history.replaceState(null, "", "#"+MODELS[m].prefix+cur);
  render();
  announce(true);
}
// Focus stays on the control the visitor used; the live region only says what
// changed: the function title, plus the clock model when that changed too.
function announce(withModel){
  const title = T[lang].m[model].f[cur].n;
  $("announce").textContent = withModel ? MODEL_NAMES[model]+" – "+title : title;
}

window.addEventListener("hashchange",()=>{
  const p = parseHash();
  if (!p || (p[0]===model && p[1]===cur)) return;
  const modelChanged = p[0]!==model;
  [model, cur] = p; render();
  // A link inside the steps is gone after the re-render: keep keyboard focus
  // on the page by moving it to the now-current function in the nav.
  if (!document.activeElement || document.activeElement===document.body)
    $("n-"+cur).focus({preventScroll:true});
  announce(modelChanged);
});
document.querySelectorAll(".lang button").forEach(b=>b.addEventListener("click",()=>{
  lang=b.dataset.lang; try{localStorage.setItem("snw-lang",lang);}catch(e){} render();
}));
document.querySelectorAll(".model button").forEach(b=>b.addEventListener("click",()=>setModel(b.dataset.model)));
// Rotating the phone (or resizing the window) changes the strip width:
// bring the current pill back into clear view once per frame.
let stripFrame = 0;
window.addEventListener("resize",()=>{
  cancelAnimationFrame(stripFrame);
  stripFrame = requestAnimationFrame(stripToCurrent);
});

// Start: model and function from the hash, else the saved model.
const start = parseHash();
if (start) [model, cur] = start;
else { try{ const s=localStorage.getItem("snw-model"); if (s in MODELS) model=s; }catch(e){} }
render();
tick();
