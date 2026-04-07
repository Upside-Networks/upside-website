/* Upside Networks — main.js */

/* ── EASTER EGG: type "upside" ── */
(function () {
  const TARGET = 'upside';
  let buf = '';
  document.addEventListener('keydown', (e) => {
    if (['INPUT','TEXTAREA','SELECT'].includes(document.activeElement.tagName)) return;
    if (e.key.length !== 1) return;
    buf = (buf + e.key.toLowerCase()).slice(-TARGET.length);
    if (buf === TARGET) { buf = ''; triggerUpside(); }
  });
  function triggerUpside() {
    const o = document.createElement('div');
    o.style.cssText = 'position:fixed;inset:0;z-index:99999;background:#071223;display:flex;flex-direction:column;align-items:center;justify-content:center;cursor:pointer;animation:uFade 0.4s ease both;';
    o.innerHTML = `
      <style>
        @keyframes uFade{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}
        @keyframes uPulse{0%,100%{opacity:1}50%{opacity:0.3}}
        .u-pill{background:rgba(0,201,167,0.12);border:1px solid rgba(0,201,167,0.25);border-radius:99px;padding:6px 16px;font-family:'Plus Jakarta Sans',sans-serif;font-size:0.72rem;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#00c9a7;animation:uPulse 2s ease infinite;margin-bottom:24px;}
        .u-title{font-family:'Plus Jakarta Sans',sans-serif;font-size:clamp(3rem,9vw,7rem);font-weight:800;color:#fff;line-height:0.9;letter-spacing:-0.04em;text-align:center;margin-bottom:8px;}
        .u-title em{color:#00c9a7;font-style:normal;}
        .u-sub{font-family:'Plus Jakarta Sans',sans-serif;font-size:0.78rem;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;color:rgba(255,255,255,0.25);margin-bottom:20px;}
        .u-msg{font-family:'DM Sans',sans-serif;font-size:1rem;color:rgba(255,255,255,0.4);text-align:center;max-width:360px;line-height:1.7;}
        .u-dismiss{margin-top:32px;font-family:'Plus Jakarta Sans',sans-serif;font-size:0.62rem;color:rgba(0,201,167,0.2);letter-spacing:0.2em;text-transform:uppercase;}
      </style>
      <div class="u-pill">✦ Easter Egg Unlocked</div>
      <div class="u-title">Go <em>Up-</em><br><em>side</em>.</div>
      <div class="u-sub">Upside Networks · Glendale, CA</div>
      <div class="u-msg">200+ carriers. Zero bias. Your business wins.<br>You typed "upside." You know the deal.</div>
      <div class="u-dismiss">click or press esc to close</div>
    `;
    document.body.appendChild(o);
    document.body.style.overflow = 'hidden';
    const close = () => { o.remove(); document.body.style.overflow = ''; };
    o.addEventListener('click', close);
    document.addEventListener('keydown', function esc(e) {
      if (e.key === 'Escape') { close(); document.removeEventListener('keydown', esc); }
    });
  }
})();
