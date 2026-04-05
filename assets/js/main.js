/* Upside Networks — main.js */

/* ── EASTER EGG — type "upside" ── */
(function () {
  const TARGET = 'upside';
  let buffer = '';

  console.log(
    '%c▸ UPSIDE NETWORKS LLC',
    'background:#0a0f1a;color:#38bdf8;font-weight:bold;font-size:13px;padding:6px 14px;border-left:3px solid #0077ff;letter-spacing:0.1em;'
  );

  document.addEventListener('keydown', (e) => {
    if (['INPUT','TEXTAREA','SELECT'].includes(document.activeElement.tagName)) return;
    if (e.key.length !== 1) return;
    buffer = (buffer + e.key.toLowerCase()).slice(-TARGET.length);
    if (buffer === TARGET) { buffer = ''; triggerUpside(); }
  });

  function triggerUpside() {
    const overlay = document.createElement('div');
    overlay.style.cssText = 'position:fixed;inset:0;z-index:99999;background:#050a14;display:flex;flex-direction:column;align-items:center;justify-content:center;cursor:pointer;font-family:Montserrat,sans-serif;animation:uFade 0.4s ease both;';
    overlay.innerHTML = `
      <style>
        @keyframes uFade{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}
        @keyframes uPulse{0%,100%{opacity:1}50%{opacity:0.3}}
        .u-label{font-size:0.7rem;letter-spacing:0.35em;text-transform:uppercase;color:#0077ff;animation:uPulse 2s ease infinite;margin-bottom:1.5rem;font-weight:700;}
        .u-title{font-size:clamp(3rem,10vw,7rem);font-weight:800;color:#f0f8ff;line-height:0.95;letter-spacing:-0.03em;text-align:center;}
        .u-title span{color:#0077ff;}
        .u-sub{font-size:0.78rem;letter-spacing:0.2em;text-transform:uppercase;color:rgba(150,180,220,0.45);margin-top:1rem;font-weight:700;}
        .u-msg{font-size:0.85rem;color:rgba(150,180,220,0.5);margin-top:2rem;text-align:center;max-width:380px;line-height:1.7;}
        .u-dismiss{margin-top:2.5rem;font-size:0.6rem;color:rgba(150,180,220,0.2);letter-spacing:0.2em;text-transform:uppercase;}
      </style>
      <div class="u-label">▸ Upside Networks LLC</div>
      <div class="u-title">Secure<span>.</span><br>Reliable<span>.</span></div>
      <div class="u-sub">Networking · Managed IT · Cybersecurity</div>
      <p class="u-msg">You typed "upside." There's only one.<br>200+ carriers. One strategic partner.</p>
      <div class="u-dismiss">click or esc to close</div>
    `;
    document.body.appendChild(overlay);
    document.body.style.overflow = 'hidden';
    const close = () => { overlay.remove(); document.body.style.overflow = ''; };
    overlay.addEventListener('click', close);
    document.addEventListener('keydown', function esc(e) {
      if (e.key === 'Escape') { close(); document.removeEventListener('keydown', esc); }
    });
  }
})();
