const T = {
  de: {
    h1: "Shake-n-Wake: welche Taste macht was?",
    lede: "Für den kleinen Vibrationswecker mit einer AAA-Batterie. Wähle eine Funktion – die Tasten zum Drücken leuchten orange, die Zahlen zeigen die Reihenfolge.",
    slide: "Vibration  ◂  ▸  Ton",
    nav: "Funktionen",
    svg: "Wecker von oben mit markierten Tasten",
    tip: "Wecker spinnt? Batterie herausnehmen, ein paar Minuten warten, wieder einlegen – dann startet er in der normalen Uhrzeit-Anzeige.",
    foot: "Inoffizielle Kurzanleitung, nicht vom Hersteller. Zusammengefasst aus der Original-Anleitung des Tech Tools Shake-n-Wake (Modell PI-107). Die Tasten mit zwei Beschriftungen sind jeweils eine einzige Taste – was sie tut, hängt vom aktuellen Modus ab.",
    f: {
      zeit: {n:"Uhrzeit und Datum", s:["Mode 3× drücken – der Einstellmodus startet.","Adjust ändert den blinkenden Wert.","Time Set springt zum nächsten Feld: Sekunden → Minuten → Stunden → Tag → Monat → Wochentag.","Mode drücken – fertig."], note:"12 oder 24 Stunden: Bei den Stunden mit Adjust weiterdrücken, bis das gewünschte Format erscheint."},
      alarm: {n:"Weckzeit einstellen", s:["Mode 2× drücken – die Weck-Stunde blinkt.","Adjust ändert die Stunde.","Time Set wechselt zu den Minuten, wieder mit Adjust ändern.","Mode drücken – fertig."], note:"Der Wecker klingelt jeden Tag. Den blinkenden Wochentag beim Einstellen einfach ignorieren."},
      an: {n:"Wecker an oder aus", s:["Time Set und Adjust gleichzeitig drücken.","Alarm-Symbol im Display = an. Kein Symbol = aus."], note:""},
      zeig: {n:"Weckzeit anzeigen", s:["Reset drücken – das Display zeigt die eingestellte Weckzeit."], note:""},
      snooze: {n:"Schlummern", s:["Wenn er weckt: Start/Stop drücken – 5 Minuten Ruhe."], note:"Zum ganz Ausschalten: Wecker aus (Time Set + Adjust)."},
      stopp: {n:"Stoppuhr", s:["Mode 1× drücken – Stoppuhr-Modus.","Start/Stop startet und stoppt.","Reset setzt auf 00:00 zurück.","Mode drücken – zurück zur Uhrzeit."], note:""},
      stunde: {n:"Signal zur vollen Stunde", s:["Time Set gedrückt halten.","Dazu Mode drücken. Alle Wochentage sichtbar = an, verschwunden = aus."], note:""},
      licht: {n:"Licht", s:["Lampen-Taste drücken – das Display leuchtet kurz."], note:""},
      vib: {n:"Vibration oder Ton", s:["Orangener Schieber an der Unterkante: links = lautlose Vibration, rechts = Piepton."], note:"Tipp: Unters Kopfkissen legen oder mit dem Armband ums Handgelenk tragen."}
    },
    lcdSet:"EINST.", lcdAl:"WECKEN", lcdSw:"STOPPUHR", lcdHr:"STUNDE", lcdSn:"SCHLUMMERN"
  },
  en: {
    h1: "Shake-n-Wake: which button does what?",
    lede: "For the small vibrating alarm clock that runs on one AAA battery. Pick a function – the buttons to press light up orange, the numbers show the order.",
    slide: "Vibrate  ◂  ▸  Beep",
    nav: "Functions",
    svg: "Top view of the clock with highlighted buttons",
    tip: "Clock acting up? Take the battery out, wait a few minutes, put it back – it restarts in normal time mode.",
    foot: "Unofficial quick guide, not from the manufacturer. Summarised from the original Tech Tools Shake-n-Wake (model PI-107) instructions. Buttons with two labels are a single button – what it does depends on the current mode.",
    f: {
      zeit: {n:"Time and date", s:["Press Mode 3× – setting mode starts.","Adjust changes the flashing value.","Time Set jumps to the next field: seconds → minutes → hours → day → month → weekday.","Press Mode – done."], note:"12 or 24 hours: while on the hours, keep pressing Adjust until the format you want appears."},
      alarm: {n:"Set the alarm time", s:["Press Mode 2× – the alarm hour flashes.","Adjust changes the hour.","Time Set moves to the minutes, change them with Adjust.","Press Mode – done."], note:"The alarm goes off every day. Ignore the flashing weekday while setting it."},
      an: {n:"Alarm on or off", s:["Press Time Set and Adjust together.","Alarm symbol on the display = on. No symbol = off."], note:""},
      zeig: {n:"Show alarm time", s:["Press Reset – the display shows the alarm time."], note:""},
      snooze: {n:"Snooze", s:["When it goes off: press Start/Stop – 5 minutes of quiet."], note:"To stop it for good, switch the alarm off (Time Set + Adjust)."},
      stopp: {n:"Stopwatch", s:["Press Mode 1× – stopwatch mode.","Start/Stop starts and stops.","Reset sets it back to 00:00.","Press Mode – back to the time."], note:""},
      stunde: {n:"Hourly chime", s:["Hold Time Set.","Press Mode as well. All weekdays shown = on, gone = off."], note:""},
      licht: {n:"Light", s:["Press the light button – the display lights up briefly."], note:""},
      vib: {n:"Vibrate or beep", s:["Orange slider on the bottom edge: left = silent vibration, right = beep."], note:"Tip: put it under your pillow or wear it on the wrist strap."}
    },
    lcdSet:"SET", lcdAl:"ALARM", lcdSw:"STOPWATCH", lcdHr:"HOURLY", lcdSn:"SNOOZE"
  }
};

const KEYS = {
  zeit:{mode:"1 · 4",set:"3",adj:"2"},
  alarm:{mode:"1 · 4",set:"3",adj:"2"},
  an:{set:"1",adj:"1"},
  zeig:{set:"1"},
  snooze:{adj:"1"},
  stopp:{mode:"1 · 4",adj:"2",set:"3"},
  stunde:{set:"1*",mode:"2"},
  licht:{light:"1"},
  vib:{slide:"◂ ▸"}
};
const ORDER = Object.keys(KEYS);
const ALL = ["set","light","adj","mode","slide"];
const LABELS = {set:["l-set1","l-set2"],light:["l-light"],adj:["l-adj1","l-adj2"],mode:["l-mode"],slide:["l-slide"]};

let lang = "de";
try { const s = localStorage.getItem("snw-lang"); if (s === "de" || s === "en") lang = s; } catch(e) {}
let cur = ORDER.includes(location.hash.slice(1)) ? location.hash.slice(1) : "zeit";
const $ = id => document.getElementById(id);

function now(){ const d=new Date(); return String(d.getHours()).padStart(2," ")+":"+String(d.getMinutes()).padStart(2,"0"); }

function lcd(){
  const t = T[lang], top=$("lcd-top"), main=$("lcd-main"), sub=$("lcd-sub");
  main.classList.remove("blink"); $("lcd").classList.remove("lit");
  let a="", b=now(), c="";
  if (cur==="zeit"){ a=t.lcdSet; b="12:00"; c="00"; main.classList.add("blink"); }
  else if (cur==="alarm"){ a=t.lcdAl; b="6:30"; main.classList.add("blink"); }
  else if (cur==="an"){ a="((•))"; }
  else if (cur==="zeig"){ a=t.lcdAl; b="6:30"; }
  else if (cur==="snooze"){ a=t.lcdSn; b="Zz"; }
  else if (cur==="stopp"){ a=t.lcdSw; b="0:00"; c="00"; }
  else if (cur==="stunde"){ a="SU MO TU WE TH FR SA"; }
  else if (cur==="licht"){ $("lcd").classList.add("lit"); }
  top.textContent=a; main.textContent=b; sub.textContent=c;
  top.setAttribute("font-size", a.length>12 ? "11" : "15");
}

function render(){
  const t = T[lang], f = t.f[cur], k = KEYS[cur];
  document.documentElement.lang = lang;
  document.title = t.h1;
  $("h1").textContent=t.h1; $("lede").textContent=t.lede; $("tip").textContent=t.tip; $("foot").textContent=t.foot;
  $("svgt").textContent=t.svg; $("l-slide").textContent=t.slide; $("nav").setAttribute("aria-label",t.nav);
  document.querySelectorAll(".lang button").forEach(b=>b.setAttribute("aria-pressed", b.dataset.lang===lang));
  $("nav").innerHTML = ORDER.map(id=>`<a href="#${id}"${id===cur?' aria-current="true"':''}>${t.f[id].n}</a>`).join("");
  ALL.forEach(x=>{
    const on = x in k;
    $("k-"+x).classList.toggle("hl", on);
    $("b-"+x).classList.toggle("show", on);
    if (x!=="slide") $("b-"+x).querySelector("text").textContent = on ? k[x].replace("*"," ✋") : "";
    LABELS[x].forEach(id=>$(id).classList.toggle("hl", on));
  });
  $("ttl").textContent = f.n;
  $("steps").className = f.s.length>1 ? "" : "plain";
  $("steps").innerHTML = f.s.map(s=>`<li>${s}</li>`).join("");
  $("note").textContent = f.note;
  $("note").hidden = !f.note;
  lcd();
}

window.addEventListener("hashchange",()=>{ const h=location.hash.slice(1); if (ORDER.includes(h)){ cur=h; render(); }});
document.querySelectorAll(".lang button").forEach(b=>b.addEventListener("click",()=>{
  lang=b.dataset.lang; try{localStorage.setItem("snw-lang",lang);}catch(e){} render();
}));
setInterval(()=>{ if (!["zeit","alarm","zeig","snooze","stopp"].includes(cur)) $("lcd-main").textContent=now(); }, 15000);
render();
