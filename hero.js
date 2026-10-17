/* ══════════════════════════════════════════════════════════
   hero.js — Image slideshow + canvas rain overlay
   ══════════════════════════════════════════════════════════ */

(function () {
    "use strict";

    /* ── Slideshow ────────────────────────────────────────── */
    const slides = document.querySelectorAll(".hero-slide");
    const SLIDE_INTERVAL = 8000; // ms per slide
    let current = 0;

    function nextSlide() {
        slides[current].classList.remove("active");
        current = (current + 1) % slides.length;
        slides[current].classList.add("active");
    }

    if (slides.length > 1) {
        setInterval(nextSlide, SLIDE_INTERVAL);
    }

    /* ── Rain ─────────────────────────────────────────────── */
    const canvas = document.getElementById("rain-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    // Config
    const DROP_COUNT = 120;        // number of raindrops
    const DROP_MIN_LEN = 12;
    const DROP_MAX_LEN = 28;
    const DROP_MIN_SPEED = 4;
    const DROP_MAX_SPEED = 9;
    const WIND_ANGLE = 0.08;       // slight slant (radians)

    let W, H;
    let drops = [];

    function resize() {
        W = canvas.width  = window.innerWidth;
        H = canvas.height = window.innerHeight;
    }

    function rand(min, max) {
        return Math.random() * (max - min) + min;
    }

    function createDrop() {
        return {
            x: rand(0, W),
            y: rand(-H, 0),                       // start above viewport
            len: rand(DROP_MIN_LEN, DROP_MAX_LEN),
            speed: rand(DROP_MIN_SPEED, DROP_MAX_SPEED),
            opacity: rand(0.15, 0.4),
            width: rand(0.5, 1.2),
        };
    }

    function initDrops() {
        drops = [];
        for (let i = 0; i < DROP_COUNT; i++) {
            const d = createDrop();
            d.y = rand(0, H); // scatter vertically on first frame
            drops.push(d);
        }
    }

    function draw() {
        ctx.clearRect(0, 0, W, H);

        for (const d of drops) {
            ctx.beginPath();
            ctx.moveTo(d.x, d.y);
            ctx.lineTo(
                d.x + Math.sin(WIND_ANGLE) * d.len,
                d.y + Math.cos(WIND_ANGLE) * d.len
            );
            ctx.strokeStyle = `rgba(200, 210, 220, ${d.opacity})`;
            ctx.lineWidth = d.width;
            ctx.lineCap = "round";
            ctx.stroke();

            // advance
            d.x += Math.sin(WIND_ANGLE) * d.speed;
            d.y += Math.cos(WIND_ANGLE) * d.speed;

            // recycle when off-screen
            if (d.y > H + d.len) {
                Object.assign(d, createDrop());
            }
        }

        requestAnimationFrame(draw);
    }

    // Kick off
    window.addEventListener("resize", () => {
        resize();
    });

    resize();
    initDrops();
    requestAnimationFrame(draw);
})();

