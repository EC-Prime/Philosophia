
(function () {
    "use strict";

    let audioCtx = null;

  
    function getCtx() {
        if (!audioCtx) {
            audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        }
        return audioCtx;
    }

    /**
     * Play a single short "click" with slight random variation
     * so consecutive keys don't sound robotic.
     */
    function playClick() {
        const ctx  = getCtx();
        const now  = ctx.currentTime;

        // ── Oscillator (short burst of noise-like tone) ──
        const osc  = ctx.createOscillator();
        const gain = ctx.createGain();

        // Randomise pitch slightly for each keystroke
        const baseFreq = 1800 + Math.random() * 600;   // 1800-2400 Hz
        osc.type       = "square";
        osc.frequency.setValueAtTime(baseFreq, now);
        osc.frequency.exponentialRampToValueAtTime(baseFreq * 0.4, now + 0.04);

        // Very short envelope
        const volume = 0.03 + Math.random() * 0.02;    // subtle: 0.03-0.05
        gain.gain.setValueAtTime(volume, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.045);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now);
        osc.stop(now + 0.05);
    }

    // ── Attach to the reflection textarea ────────────────
    const textarea = document.getElementById("reflection-input");
    if (!textarea) return;

    textarea.addEventListener("keydown", function (e) {
        // Skip modifier-only keys
        if (["Shift", "Control", "Alt", "Meta", "CapsLock", "Tab"].includes(e.key)) return;
        playClick();
    });
})();

