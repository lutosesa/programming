import{c as a,j as n,I as i,a1 as s,o as e,c2 as t}from"./chunks/framework.Jv7tKpEi.js";import{I as l}from"./chunks/IframeTogglePygame.ChNW57Aq.js";/* empty css                                                                                  */const p=s('<h1 id="pygames-grundskelett" tabindex="-1">Pygames Grundskelett <a class="header-anchor" href="#pygames-grundskelett" aria-label="Permalink to &quot;Pygames Grundskelett&quot;">​</a></h1><h2 id="inledning" tabindex="-1">Inledning <a class="header-anchor" href="#inledning" aria-label="Permalink to &quot;Inledning&quot;">​</a></h2><p>När vi pratar om att göra ett <span class="a">grundskelett</span> i Pygame, handlar det om att <strong>skapa en enkel och grundläggande struktur för ett spel</strong>. Detta grundskelett är en <strong>enkel mall</strong> som hjälper oss att komma igång med spelprogrammering, och vi kan sedan bygga vidare på det genom att lägga till funktioner, grafik och interaktion.</p><p><img src="'+t+'" alt=""></p><h2 id="grundskelett-i-pygame" tabindex="-1">Grundskelett i Pygame <a class="header-anchor" href="#grundskelett-i-pygame" aria-label="Permalink to &quot;Grundskelett i Pygame&quot;">​</a></h2>',5),r={class:"tip custom-block"},h=s(`<p class="custom-block-title">Här är ett enkelt exempel på hur ett grundskelett i Pygame ser ut:</p><div class="language-python vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark has-highlighted vp-code" tabindex="0"><code><span class="line highlighted warning"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># STEG 1: Importera bibliotek</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> pygame   </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> sys       </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Importera sys för att avsluta programmet</span></span>
<span class="line"></span>
<span class="line highlighted warning"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># STEG 2: Initiera Pygame</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pygame.init()</span></span>
<span class="line"></span>
<span class="line highlighted warning"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># STEG 3: Skapa ett spelfönster</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">width, height </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 800</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">600</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">         # Bestäm fönstrets bredd och höjd</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">screen </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> pygame.display.set_mode((width, height)) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Skapa fönstret</span></span>
<span class="line"></span>
<span class="line highlighted warning"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># STEG 4: Sätt fönstertitel</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">title </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Mitt första Pygame-spel&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pygame.display.set_caption(title)   </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Sätt en titel på fönstret</span></span>
<span class="line"></span>
<span class="line highlighted warning"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># STEG 5: Sätt fönstrets grundfärg, svart (RGB-färgkod)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">color </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line highlighted warning"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># STEG 6: Skapa spelloopen</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">running </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> True</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">while</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> running:</span></span>
<span class="line highlighted warning"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # STEG 7: Hantera händelser (t.ex. tangentvord, mus, stänga fönstret)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> event </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> pygame.event.get():</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> event.type </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> pygame.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">QUIT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:   </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Om spelaren klickar på &quot;X&quot;-knappen</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            running </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> False</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">             # Avsluta loopen</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line highlighted warning"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # STEG 8: Uppdatera fönstret</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    screen.fill(color)  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    pygame.display.flip()       </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Uppdatera skärmen med ändringarna</span></span>
<span class="line"></span>
<span class="line highlighted warning"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># STEG 9: Avsluta Pygame</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pygame.quit()       </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Stäng ner Pygame</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">sys.exit()          </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Stäng programmet helt</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div>`,2),k=s('<h2 id="detaljer-for-varje-del-av-grundskelettets-kod" tabindex="-1">Detaljer för varje del av grundskelettets kod <a class="header-anchor" href="#detaljer-for-varje-del-av-grundskelettets-kod" aria-label="Permalink to &quot;Detaljer för varje del av grundskelettets kod&quot;">​</a></h2><p><strong>STEG 1</strong> - <span class="a">Importera bibliotek</span>:<br> För att kunna använda Pygame och Python måste vi först importera de moduler vi behöver. Vi använder <span class="c">pygame</span> för spelrelaterade funktioner och <span class="c">sys</span> för att avsluta programmet.</p><p><strong>STEG 2</strong> - <span class="a">Initiera Pygame</span>:<br> Funktionen <span class="c">pygame.init()</span> startar alla Pygames interna moduler, till exempel <strong>grafik</strong> och <strong>ljud</strong>. Utan denna skulle vi inte kunna använda Pygame-funktioner.</p><p><strong>STEG 3</strong> - <span class="a">Skapa ett spelfönster</span>:<br><span class="c">pygame.display.set_mode((800, 600))</span> skapar ett fönster med storleken 800x600 pixlar. Det är här vi kommer att rita och visa vårt spel.</p><p><strong>STEG 4</strong> - <span class="a">Sätt fönstertitel</span>:<br><span class="c">pygame.display.set_caption(title)</span> sätter titeln på spel-fönstret.</p><p><strong>STEG 5</strong> - <span class="a"> Sätt fönstrets grundfärg</span>:<br><span class="c">color = (0, 0, 0)</span> representerar färgen black med hjälp av <strong>RGB</strong>-värden (<strong>Red</strong>, <strong>Green</strong>, <strong>Blue</strong>). Färger i Pygame skrivs alltid som <strong>(R, G, B)</strong>-värden.</p><p><strong>STEG 6</strong> - <span class="a">Spelloopen</span>:<br> Detta är den viktigaste delen av spelet. Loopen gör att spelet ständigt körs tills spelaren avslutar det. I loopen tar vi hand om alla händelser, uppdaterar spelets logik och ritar grafik på skärmen.</p><p><strong>STEG 7</strong> - <span class="a">Hantera händelser</span>:<br> Varje gång något händer i spelet (som att någon klickar på &quot;X&quot;-knappen för att stänga fönstret) registreras det som en &quot;<strong>händelse</strong>&quot;. <span class="c">pygame.event.get()</span> samlar in alla händelser. Om spelaren stänger spelet genom att klicka på &quot;X&quot;, slutar loopen med <span class="c">running = False</span>.</p><p><strong>STEG 8</strong> - <span class="a">Uppdatera skärmen</span>:<br> Vi använder <span class="c">screen.fill(color)</span> för att fylla skärmen med en färg (svart i detta fall). <span class="c">pygame.display.flip()</span> uppdaterar skärmen, så att allt vi ritat faktiskt visas för spelaren.</p><p><strong>STEG 9</strong> - <span class="a">Avsluta Pygame</span>:<br> När loopen avslutas kör vi <span class="c">pygame.quit()</span> för att stänga alla Pygame-moduler och <span class="c">sys.exit()</span> för att avsluta programmet.</p><h2 id="sammanfattning" tabindex="-1">Sammanfattning <a class="header-anchor" href="#sammanfattning" aria-label="Permalink to &quot;Sammanfattning&quot;">​</a></h2><p>Ett grundskelett i Pygame är en enkel och ren kodstruktur som består av att:</p><ul><li>Initiera Pygame och skapa en spelskärm.</li><li>Skapa en spelloop som uppdaterar och tar hand om händelser.</li><li>Uppdatera skärmen med grafik.</li><li>Avsluta spelet när spelaren vill stänga det.</li></ul><p>Denna grundstruktur är vad du behöver för att börja skapa ett spel. När du väl har det här på plats kan du börja lägga till fler funktioner, som att röra på objekt, kollisionshantering, ljud och mycket mer!</p>',14),y=JSON.parse('{"title":"Pygames Grundskelett","description":"","frontmatter":{"outline":[1,6]},"headers":[],"relativePath":"programming1/part27/basic-skeleton.md","filePath":"programming1/part27/basic-skeleton.md"}'),g={name:"programming1/part27/basic-skeleton.md"},b=Object.assign(g,{setup(d){return(o,c)=>(e(),a("div",null,[p,n("div",r,[h,i(l)]),k]))}});export{y as __pageData,b as default};
