const T = {
  de: {
    h1: "Shake-n-Wake: welche Taste macht was?",
    lede1: "Für den kleinen Vibrationswecker mit einer AAA-Batterie.",
    lede2: "Funktion auswählen – die Tasten zum Drücken leuchten orange, die Zahlen zeigen die Reihenfolge.",
    slideL: "Vibration", slideR: "Ton",
    nav: "Funktionen",
    groups: {tonight:"Heute Abend", buzz:"Wenn er weckt", later:"Ab und zu"},
    svg: "Wecker von oben mit markierten Tasten",
    tip: "Wecker reagiert seltsam? Batterie herausnehmen, ein paar Minuten warten, wieder einlegen. Er startet neu in der Uhrzeit-Anzeige – danach Uhrzeit und Weckzeit neu einstellen und den Wecker wieder einschalten.",
    foot: "Inoffizielle Kurzanleitung, nicht vom Hersteller. Zusammengefasst aus der",
    footLink: "Original-Anleitung des Tech Tools Shake-n-Wake (Modell PI-107)",
    legend: "Zwei Namen an einer Taste = eine Taste. Fett ist der Name, den der Schritt meint.",
    f: {
      zeit: {n:"Uhrzeit und Datum", s:["In der Uhrzeit-Anzeige Mode 3× drücken – die Sekunden blinken.","Adjust ändert den blinkenden Wert (Sekunden: zurück auf 00).","Time Set springt zum nächsten Feld: Sekunden → Minuten → Stunden → Tag → Monat → Wochentag.","Mode drücken – fertig."], note:"12 oder 24 Stunden: Bei den Stunden mit Adjust weiterdrücken, bis das gewünschte Format erscheint."},
      alarm: {n:"Weckzeit einstellen", s:["In der Uhrzeit-Anzeige Mode 2× drücken – die Weck-Stunde blinkt.","Adjust ändert die Stunde.","Time Set wechselt zu den Minuten, wieder mit Adjust ändern.","Mode drücken – fertig."], note:"Der Wecker klingelt jeden Tag. Den blinkenden Wochentag beim Einstellen einfach ignorieren."},
      an: {n:"Wecker an oder aus", s:["In der Uhrzeit-Anzeige Time Set und Adjust gleichzeitig drücken.","Alarm-Symbol im Display = an. Kein Symbol = aus."], note:""},
      zeig: {n:"Weckzeit anzeigen", s:["Reset drücken – das Display zeigt die eingestellte Weckzeit."], note:""},
      snooze: {n:"Schlummern", s:["Wenn er weckt: Start/Stop drücken – 5 Minuten Ruhe."], note:"Zum Beenden für heute eine andere Taste drücken (siehe „Wecken beenden“). Achtung: „Wecker aus“ (Time Set + Adjust) schaltet ihn auch für morgen aus."},
      beenden: {n:"Wecken beenden", s:["Wenn er weckt: Mode, Reset oder die Lampen-Taste drücken – Ruhe bis morgen."], note:"Start/Stop beendet das Wecken nicht, sondern schlummert nur 5 Minuten. Der Wecker bleibt an und weckt morgen wieder."},
      stopp: {n:"Stoppuhr", s:["In der Uhrzeit-Anzeige Mode 1× drücken – Stoppuhr-Modus.","Start/Stop startet und stoppt.","Reset setzt auf 00:00 zurück.","Mode drücken – zurück zur Uhrzeit."], note:""},
      stunde: {n:"Signal zur vollen Stunde", s:["Time Set gedrückt halten.","Dazu Mode drücken. Alle Wochentage sichtbar = an, verschwunden = aus."], note:""},
      licht: {n:"Licht", s:["Lampen-Taste drücken – das Display leuchtet kurz."], note:""},
      vib: {n:"Vibration oder Ton", s:["Orangefarbener Schieber an der Unterkante: links = lautlose Vibration, rechts = Piepton."], note:"Tipp: Unters Kopfkissen legen oder mit dem Armband ums Handgelenk tragen."}
    },
    hold:"halten", or:"oder", both:"beide"
  },
  en: {
    h1: "Shake-n-Wake: which button does what?",
    lede1: "For the small vibrating alarm clock that runs on one AAA battery.",
    lede2: "Pick a function – the buttons to press light up orange, the numbers show the order.",
    slideL: "Vibrate", slideR: "Beep",
    nav: "Functions",
    groups: {tonight:"Tonight", buzz:"When it buzzes", later:"Now and then"},
    svg: "Top view of the clock with highlighted buttons",
    tip: "Clock acting up? Take the battery out, wait a few minutes, put it back. It restarts in time mode – then set the time and alarm again and switch the alarm back on.",
    foot: "Unofficial quick guide, not from the manufacturer. Summarised from the",
    footLink: "original Tech Tools Shake-n-Wake (model PI-107) instructions",
    legend: "Two names on one button = one button. Bold is the name the step means.",
    f: {
      zeit: {n:"Time and date", s:["In time mode, press Mode 3× – the seconds flash.","Adjust changes the flashing value (seconds: back to 00).","Time Set jumps to the next field: seconds → minutes → hours → day → month → weekday.","Press Mode – done."], note:"12 or 24 hours: while on the hours, keep pressing Adjust until the format you want appears."},
      alarm: {n:"Set the alarm time", s:["In time mode, press Mode 2× – the alarm hour flashes.","Adjust changes the hour.","Time Set moves to the minutes, change them with Adjust.","Press Mode – done."], note:"The alarm goes off every day. Ignore the flashing weekday while setting it."},
      an: {n:"Alarm on or off", s:["In time mode, press Time Set and Adjust together.","Alarm symbol on the display = on. No symbol = off."], note:""},
      zeig: {n:"Show alarm time", s:["Press Reset – the display shows the alarm time."], note:""},
      snooze: {n:"Snooze", s:["When it goes off: press Start/Stop – 5 minutes of quiet."], note:"To stop it for today, press another button (see “Stop the alarm”). Careful: “Alarm off” (Time Set + Adjust) also switches it off for tomorrow."},
      beenden: {n:"Stop the alarm", s:["When it goes off: press Mode, Reset or the light button – quiet until tomorrow."], note:"Start/Stop doesn’t end the alarm, it only snoozes for 5 minutes. The alarm stays on and goes off again tomorrow."},
      stopp: {n:"Stopwatch", s:["In time mode, press Mode 1× – stopwatch mode.","Start/Stop starts and stops.","Reset sets it back to 00:00.","Press Mode – back to the time."], note:""},
      stunde: {n:"Hourly chime", s:["Hold Time Set.","Press Mode as well. All weekdays shown = on, gone = off."], note:""},
      licht: {n:"Light", s:["Press the light button – the display lights up briefly."], note:""},
      vib: {n:"Vibrate or beep", s:["Orange slider on the bottom edge: left = silent vibration, right = beep."], note:"Tip: put it under your pillow or wear it on the wrist strap."}
    },
    hold:"hold", or:"or", both:"both"
  }
};

// Per function: which keys to press. n = step number(s) on the badge,
// c = second badge line (press count, or a key into T[lang]),
// l = which label of a two-name key the steps mean (omit = all labels).
const KEYS = {
  zeit:{mode:{n:"1 + 4",c:"3× + 1×"},adj:{n:"2",l:"l-adj2"},set:{n:"3",l:"l-set2"}},
  alarm:{mode:{n:"1 + 4",c:"2× + 1×"},adj:{n:"2",l:"l-adj2"},set:{n:"3",l:"l-set2"}},
  an:{set:{n:"1",c:"both",l:"l-set2"},adj:{n:"1",c:"both",l:"l-adj2"}},
  zeig:{set:{n:"1",l:"l-set1"}},
  snooze:{adj:{n:"1",l:"l-adj1"}},
  beenden:{mode:{n:"1",c:"or"},set:{n:"1",c:"or",l:"l-set1"},light:{n:"1",c:"or"}},
  stopp:{mode:{n:"1 + 4"},adj:{n:"2",l:"l-adj1"},set:{n:"3",l:"l-set1"}},
  stunde:{set:{n:"1",c:"hold",l:"l-set2"},mode:{n:"2"}},
  licht:{light:{n:"1"}},
  vib:{slide:{n:""}}
};
// Functions grouped by the moment you need them, in the order you'd use them.
const GROUPS = [
  {id:"tonight", items:["alarm","vib","an","zeig"]},
  {id:"buzz", items:["snooze","beenden"]},
  {id:"later", items:["zeit","licht","stunde","stopp"]}
];
const ORDER = GROUPS.flatMap(g => g.items);
const ALL = ["set","light","adj","mode","slide"];
const LABELS = {set:["l-set1","l-set2"],light:["l-light"],adj:["l-adj1","l-adj2"],mode:["l-mode"],slide:["l-slide","l-slide2"]};

// The language is picked by the inline script in <head> (saved choice, else
// browser language) so English visitors never see the German markup first.
let lang = document.documentElement.lang === "en" ? "en" : "de";
let cur = ORDER.includes(location.hash.slice(1)) ? location.hash.slice(1) : "alarm";
const $ = id => document.getElementById(id);

function now(){ const d=new Date(); return String(d.getHours()).padStart(2," ")+":"+String(d.getMinutes()).padStart(2,"0"); }

// Typography: keep a dash with the word before it, so no line starts with "–".
const typo = str => str.replace(/ – /g, "\u00a0– ");
// Text with "Shake-n-Wake" kept on one line (CSS no-wrap span, no hidden characters).
function brand(el, str){
  const parts = typo(str).split("Shake-n-Wake");
  el.replaceChildren(...parts.flatMap((p,i)=>{
    if (!i) return [p];
    const b = document.createElement("span"); b.className = "nobr"; b.textContent = "Shake-n-Wake";
    return [b, p];
  }));
}

// LCD mock, following the PI-107 manual: the display has no words. The weekday
// letters double as mode indicators (TU blinks while setting the time, MO while
// setting the alarm, SU/FR/SA in the stopwatch, all letters = hourly chime on),
// plus an "alarm on" symbol. Main line parts are [text, blinks?].
const DAYS = ["SU","MO","TU","WE","TH","FR","SA"];
const SVGNS = "http://www.w3.org/2000/svg";
function lcd(){
  const top=$("lcd-top"), main=$("lcd-main"), sub=$("lcd-sub");
  sub.classList.remove("blink"); $("lcd").classList.remove("lit");
  let days=null, blinkDays=[], b=[[now()]], c="", bell=false;
  if (cur==="zeit"){ days=DAYS; blinkDays=["TU"]; b=[["12:00"]]; c="00"; sub.classList.add("blink"); }
  else if (cur==="alarm"){ days=DAYS; blinkDays=["MO"]; b=[["6",true],[":30"]]; }
  else if (cur==="an"){ bell=true; }
  else if (cur==="zeig"){ b=[["6:30"]]; bell=true; }
  else if (cur==="snooze" || cur==="beenden"){ bell=true; }
  else if (cur==="stopp"){ days=DAYS; blinkDays=["SU","FR","SA"]; b=[["0:00"]]; c="00"; }
  else if (cur==="stunde"){ days=DAYS; }
  else if (cur==="licht"){ $("lcd").classList.add("lit"); }
  top.replaceChildren(...(days||[]).flatMap((d,i)=>{
    const ts = document.createElementNS(SVGNS,"tspan");
    ts.textContent = d; if (blinkDays.includes(d)) ts.classList.add("blink");
    return i ? [" ", ts] : [ts];
  }));
  $("lcd-bell").style.visibility = bell ? "visible" : "hidden";
  sub.textContent=c;
  main.replaceChildren(...b.map(([txt, blink])=>{
    const ts = document.createElementNS(SVGNS,"tspan");
    ts.textContent = txt; if (blink) ts.classList.add("blink"); return ts;
  }));
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
function stripToCurrent(){
  const strip = $("nav"), a = strip.querySelector("[aria-current]");
  if (!a || strip.scrollWidth <= strip.clientWidth) return;
  // Prefer showing the whole group from its heading; centre the pill only
  // when the group is too wide for that to keep the pill in view.
  const pad = parseFloat(getComputedStyle(strip).paddingLeft) || 0;
  const grpLeft = a.closest(".navgroup").offsetLeft - pad;
  const fits = a.offsetLeft + a.offsetWidth - grpLeft <= strip.clientWidth - pad;
  const left = fits ? grpLeft : a.offsetLeft - (strip.clientWidth - a.offsetWidth) / 2;
  const smooth = !matchMedia("(prefers-reduced-motion: reduce)").matches;
  strip.scrollTo({left, behavior: smooth ? "smooth" : "auto"});
}

function render(){
  const t = T[lang], f = t.f[cur], k = KEYS[cur];
  document.documentElement.lang = lang;
  document.title = t.h1;
  brand($("h1"), t.h1); $("lede1").textContent=typo(t.lede1); $("lede2").textContent=typo(t.lede2);
  $("tip").textContent=typo(t.tip); brand($("foot"), t.foot); brand($("foot-link"), t.footLink); $("legend").textContent=t.legend;
  $("svgt").textContent=t.svg; $("l-slide").textContent=t.slideL; $("l-slide2").textContent=t.slideR; $("nav").setAttribute("aria-label",t.nav);
  document.querySelectorAll(".lang button").forEach(b=>b.setAttribute("aria-pressed", b.dataset.lang===lang));
  // Update the nav in place (never rebuild it) so keyboard focus survives.
  GROUPS.forEach(g=>{
    $("g-"+g.id).textContent = t.groups[g.id];
    g.items.forEach(id=>{
      const a = $("n-"+id);
      a.textContent = t.f[id].n;
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
  $("steps").replaceChildren(...f.s.map(s=>{ const li=document.createElement("li"); li.textContent=typo(s); return li; }));
  $("note").textContent = typo(f.note);
  $("note").hidden = !f.note;
  lcd();
  document.documentElement.classList.remove("pre-render");
}

// Built once; render() only changes text and aria-current.
function buildNav(){
  const nav = $("nav");
  GROUPS.forEach(g=>{
    const grp = document.createElement("div"), head = document.createElement("p"), pills = document.createElement("div");
    grp.className = "navgroup"; grp.setAttribute("role","group"); grp.setAttribute("aria-labelledby","g-"+g.id);
    head.className = "navhead"; head.id = "g-"+g.id;
    pills.className = "pills";
    g.items.forEach(id=>{ const a=document.createElement("a"); a.id="n-"+id; a.href="#"+id; pills.append(a); });
    grp.append(head, pills); nav.append(grp);
  });
}

// The LCD shows the real time for functions without a demo value.
// Tick on the minute boundary so it never lags behind.
const LIVE_CLOCK = ["an","beenden","licht","vib","stunde"];
function tick(){
  if (LIVE_CLOCK.includes(cur)) $("lcd-main").textContent = now();
  setTimeout(tick, 60000 - Date.now() % 60000 + 50);
}

window.addEventListener("hashchange",()=>{
  const h = location.hash.slice(1);
  if (!ORDER.includes(h) || h===cur) return;
  cur = h; render();
  // Focus stays on the chosen link; announce only the new title, not the whole panel.
  $("announce").textContent = T[lang].f[cur].n;
});
document.querySelectorAll(".lang button").forEach(b=>b.addEventListener("click",()=>{
  lang=b.dataset.lang; try{localStorage.setItem("snw-lang",lang);}catch(e){} render();
}));
buildNav();
render();
tick();
