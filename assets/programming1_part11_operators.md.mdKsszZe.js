import{c as n,I as s,a1 as a,j as t,a as e,o as l,aE as r}from"./chunks/framework.CXdr-MAK.js";import{I as i}from"./chunks/IframeToggle.zhkYMG6t.js";/* empty css                                                                            */const p=a('<h1 id="python-operatorer" tabindex="-1">Python operatorer <a class="header-anchor" href="#python-operatorer" aria-label="Permalink to &quot;Python operatorer&quot;">​</a></h1><p>Python-operatorer är symboler som används för att utföra operationer på variabler och värden. De spelar en central roll i programmering eftersom de låter oss utföra beräkningar, jämföra värden och manipulera data.</p><p>Några vanliga typer av operatorer i Python inkluderar aritmetiska operatorer för matematiska beräkningar, jämförelseoperatörer för att jämföra värden, logiska operatorer för att kombinera villkor och tilldelningsoperatörer för att ge variabler värden. Genom att förstå och använda dessa operatorer kan man skriva effektiva och funktionella program.</p><p><img src="'+r+`" alt=""></p><h2 id="_1-aritmetiska-operatorer" tabindex="-1">1. Aritmetiska Operatorer <a class="header-anchor" href="#_1-aritmetiska-operatorer" aria-label="Permalink to &quot;1. Aritmetiska Operatorer&quot;">​</a></h2><p>Dessa operatorer används för att utföra matematiska operationer.</p><table tabindex="0"><thead><tr><th style="text-align:center;">Operator</th><th>Beskrivning</th><th style="text-align:center;">Exempel</th></tr></thead><tbody><tr><td style="text-align:center;">+</td><td>Addition</td><td style="text-align:center;">x + y</td></tr><tr><td style="text-align:center;">-</td><td>Subtraktion</td><td style="text-align:center;">x - y</td></tr><tr><td style="text-align:center;">*</td><td>Multiplikation</td><td style="text-align:center;">x * y</td></tr><tr><td style="text-align:center;">/</td><td>Division</td><td style="text-align:center;">x / y</td></tr><tr><td style="text-align:center;">%</td><td>Modulus (rest vid division)</td><td style="text-align:center;">x % y</td></tr><tr><td style="text-align:center;">**</td><td>Exponentiering (upphöjt till)</td><td style="text-align:center;">x ** y</td></tr><tr><td style="text-align:center;">//</td><td>Golvdivision (heltalsdivision)</td><td style="text-align:center;">x // y</td></tr></tbody></table><div class="language-python vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">y </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> y)  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 13</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> y)  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 7</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> y)  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 30</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> y)  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 3.3333333333333335</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> y)  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 1</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> y) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 1000</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">//</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> y) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 3</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div>`,8),h=a(`<h2 id="_2-jamforelseoperatorer" tabindex="-1">2. Jämförelseoperatorer <a class="header-anchor" href="#_2-jamforelseoperatorer" aria-label="Permalink to &quot;2. Jämförelseoperatorer&quot;">​</a></h2><p>Dessa operatorer används för att jämföra två värden. Resultatet av en jämförelse är ett boolskt värde (True eller False).</p><table tabindex="0"><thead><tr><th style="text-align:center;">Operator</th><th>Beskrivning</th><th style="text-align:center;">Exempel</th></tr></thead><tbody><tr><td style="text-align:center;">==</td><td>Lika med</td><td style="text-align:center;">x == y</td></tr><tr><td style="text-align:center;">!=</td><td>Inte lika med</td><td style="text-align:center;">x != y</td></tr><tr><td style="text-align:center;">&gt;</td><td>Större än</td><td style="text-align:center;">x &gt; y</td></tr><tr><td style="text-align:center;">&lt;</td><td>Mindre än</td><td style="text-align:center;">x &lt; y</td></tr><tr><td style="text-align:center;">&gt;=</td><td>Större än eller lika med</td><td style="text-align:center;">x &gt;= y</td></tr><tr><td style="text-align:center;">&lt;=</td><td>Mindre än eller lika med</td><td style="text-align:center;">x &lt;= y</td></tr></tbody></table><div class="language-python vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">y </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> y)  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># False</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> y)  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># True</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> y)   </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># True</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> y)   </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># False</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> y)  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># True</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> y)  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># False</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>`,4),k=a(`<h2 id="_3-logiska-operatorer" tabindex="-1">3. Logiska Operatorer <a class="header-anchor" href="#_3-logiska-operatorer" aria-label="Permalink to &quot;3. Logiska Operatorer&quot;">​</a></h2><p>Dessa operatorer används för att kombinera villkor.</p><table tabindex="0"><thead><tr><th style="text-align:center;">Operator</th><th>Beskrivning</th><th style="text-align:center;">Exempel</th></tr></thead><tbody><tr><td style="text-align:center;">and</td><td>Sant om båda är sanna</td><td style="text-align:center;">x and y</td></tr><tr><td style="text-align:center;">or</td><td>Sant om minst en är sann</td><td style="text-align:center;">x or y</td></tr><tr><td style="text-align:center;">not</td><td>Inverterar värdet</td><td style="text-align:center;">not x</td></tr></tbody></table><div class="language-python vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> True</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">y </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> False</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">and</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> y)  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># False</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">or</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> y)   </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># True</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">not</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x)    </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># False</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>`,4),d=a(`<h2 id="_4-tilldelningsoperatorer" tabindex="-1">4. Tilldelningsoperatorer <a class="header-anchor" href="#_4-tilldelningsoperatorer" aria-label="Permalink to &quot;4. Tilldelningsoperatorer&quot;">​</a></h2><p>Dessa operatorer används för att tilldela värden till variabler.</p><table tabindex="0"><thead><tr><th style="text-align:center;">Operator</th><th>Beskrivning</th><th style="text-align:center;">Exempel</th><th>Motsvarande</th></tr></thead><tbody><tr><td style="text-align:center;">=</td><td>Tilldelning</td><td style="text-align:center;">x = 5</td><td>x = 5</td></tr><tr><td style="text-align:center;">+=</td><td>Tilldelning med addition</td><td style="text-align:center;">x += 3</td><td>x = x + 3</td></tr><tr><td style="text-align:center;">-=</td><td>Tilldelning med subtraktion</td><td style="text-align:center;">x -= 3</td><td>x = x - 3</td></tr><tr><td style="text-align:center;">*=</td><td>Tilldelning med multiplikation</td><td style="text-align:center;">x *= 3</td><td>x = x * 3</td></tr><tr><td style="text-align:center;">/=</td><td>Tilldelning med division</td><td style="text-align:center;">x /= 3</td><td>x = x / 3</td></tr><tr><td style="text-align:center;">%=</td><td>Tilldelning med modulus</td><td style="text-align:center;">x %= 3</td><td>x = x % 3</td></tr><tr><td style="text-align:center;">**=</td><td>Tilldelning med exponentiering</td><td style="text-align:center;">x **= 3</td><td>x = x ** 3</td></tr><tr><td style="text-align:center;">//=</td><td>Tilldelning med floordivision</td><td style="text-align:center;">x //= 3</td><td>x = x // 3</td></tr></tbody></table><div class="language-python vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     </span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x)  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 5</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # x = x + 3</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x)  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 8</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # x = x - 3</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x)  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 5</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # x = x * 3</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x)  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 15</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # x = x / 3</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x)  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 5.0</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # x = x % 3</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x)  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 2.0</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   # x = x ** 3</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x)  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 8.0</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div>`,4),g=a(`<h2 id="_5-identitetsoperatorer" tabindex="-1">5. Identitetsoperatorer <a class="header-anchor" href="#_5-identitetsoperatorer" aria-label="Permalink to &quot;5. Identitetsoperatorer&quot;">​</a></h2><p>Dessa operatorer används för att kontrollera om två variabler hänvisar till samma objekt.</p><table tabindex="0"><thead><tr><th style="text-align:center;">Operator</th><th>Beskrivning</th><th style="text-align:center;">Exempel</th></tr></thead><tbody><tr><td style="text-align:center;">is</td><td>Sant om båda variablerna hänvisar till samma objekt</td><td style="text-align:center;">x is y</td></tr><tr><td style="text-align:center;">is not</td><td>Sant om variablerna inte hänvisar till samma objekt</td><td style="text-align:center;">x is not y</td></tr></tbody></table><div class="language-python vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;äpple&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;banan&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">y </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;äpple&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;banan&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">z </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">is</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> z)     </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># True</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">is</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> y)     </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># False</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> y)     </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># True (de har samma innehåll)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">is</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> not</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> y) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># True</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>`,4),y=a(`<h2 id="_6-medlemskapsoperatorer" tabindex="-1">6. Medlemskapsoperatorer <a class="header-anchor" href="#_6-medlemskapsoperatorer" aria-label="Permalink to &quot;6. Medlemskapsoperatorer&quot;">​</a></h2><p>Dessa operatorer används för att testa om en sekvens innehåller ett visst objekt.</p><table tabindex="0"><thead><tr><th style="text-align:center;">Operator</th><th>Beskrivning</th><th style="text-align:center;">Exempel</th></tr></thead><tbody><tr><td style="text-align:center;">in</td><td>Sant om värdet finns i sekvensen</td><td style="text-align:center;">x in y</td></tr><tr><td style="text-align:center;">not in</td><td>Sant om värdet inte finns i sekvensen</td><td style="text-align:center;">x not in y</td></tr></tbody></table><div class="language-python vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;äpple&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;banan&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;banan&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> in</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x)      </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># True</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;päron&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> not</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> in</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x)  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># True</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>`,4),E=a(`<h2 id="_7-bitvisa-operatorer" tabindex="-1">7. Bitvisa Operatorer <a class="header-anchor" href="#_7-bitvisa-operatorer" aria-label="Permalink to &quot;7. Bitvisa Operatorer&quot;">​</a></h2><p>Dessa operatorer används för att utföra bitvisa operationer på binära tal.</p><table tabindex="0"><thead><tr><th style="text-align:center;">Operator</th><th>Beskrivning</th><th style="text-align:center;">Exempel</th></tr></thead><tbody><tr><td style="text-align:center;">&amp;=</td><td>bitvis OCH</td><td style="text-align:center;">x &amp; y</td></tr><tr><td style="text-align:center;">|=</td><td>bitvis ELLER</td><td style="text-align:center;">x | y</td></tr><tr><td style="text-align:center;">^=</td><td>bitvis XOR</td><td style="text-align:center;">x ^ y</td></tr><tr><td style="text-align:center;">~</td><td>bitvis INTE</td><td style="text-align:center;">~x</td></tr><tr><td style="text-align:center;">&lt;&lt;=</td><td>bitvis vänsterflytt</td><td style="text-align:center;">x &lt;&lt; 2</td></tr><tr><td style="text-align:center;">&gt;&gt;=</td><td>bitvis högerflytt</td><td style="text-align:center;">x &gt;&gt; 2</td></tr></tbody></table><div class="language-python vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 5</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 0101 i binär</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">y </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 0011 i binär</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> y)  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 1 (0001 i binär)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> y)  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 7 (0111 i binär)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">^</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> y)  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 6 (0110 i binär)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">~</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">x)     </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># -6 (Inverterar alla bitar)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 20 (10100 i binär)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 1 (0001 i binär)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>`,4),o=t("h2",{id:"avslut",tabindex:"-1"},[e("Avslut "),t("a",{class:"header-anchor",href:"#avslut","aria-label":'Permalink to "Avslut"'},"​")],-1),c=t("p",null,"Python-operatorer ger kraftfulla sätt att utföra många olika operationer. Genom att förstå och använda dessa operatorer kan du skriva mer effektiv och uttrycksfull kod. Oavsett om du gör enkla matematiska beräkningar, jämför värden, eller manipulerar bitar, har Python de verktyg du behöver.",-1),C=JSON.parse('{"title":"Python operatorer","description":"","frontmatter":{"outline":[1,6]},"headers":[],"relativePath":"programming1/part11/operators.md","filePath":"programming1/part11/operators.md"}'),b={name:"programming1/part11/operators.md"},v=Object.assign(b,{setup(x){return(m,u)=>(l(),n("div",null,[p,s(i),h,s(i),k,s(i),d,s(i),g,s(i),y,s(i),E,s(i),o,c]))}});export{C as __pageData,v as default};
