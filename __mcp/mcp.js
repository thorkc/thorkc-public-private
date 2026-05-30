async function deployNow() {
  const cfg = await fetch("deploy-hook.json").then(r => r.json());
  await fetch(cfg.deployHookUrl, { method: "POST" });
  log("Deploy triggered.");
}

async function scanSite() {
  const result = await fetch("scan-site.json").then(r => r.json());
  log("Scan complete:\n" + JSON.stringify(result, null, 2));
}

async function fixAssets() {
  const result = await fetch("fix-assets.json").then(r => r.json());
  log("Fix routine complete:\n" + JSON.stringify(result, null, 2));
}

function loadMode(mode) {
  const modes = ["journal", "thorkcade", "insider", "system", "checkov", "archive"];
  modes.forEach(m => {
    const el = document.getElementById("mode-" + m);
    if (!el) return;
    el.classList.toggle("hidden", m !== mode);
  });
  log("Mode loaded: " + mode);
}

// Mode‑specific stubs (you can wire these to real scripts later)
function journalRebuild() {
  log("Journal: rebuild index (stub).");
}

function thorkcadeSync() {
  log("ThorKCade: sync listings (stub).");
}

function insiderRefresh() {
  log("Insider: refresh content map (stub).");
}

function systemHealthCheck() {
  log("System: health check (stub).");
}

function checkovScan() {
  log("Checkov: scan for narrative threads (stub).");
}

function archiveIndex() {
  log("Archive: rebuild index (stub).");
}

function log(msg) {
  document.getElementById("output").textContent = msg;
}
