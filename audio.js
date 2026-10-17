/* ══════════════════════════════════════════════════════════
   audio.js — YouTube background audio with toggle control
   ══════════════════════════════════════════════════════════ */

(function () {
    "use strict";

    const VIDEO_ID = "0jXTBAGv9ZQ";
    const VOLUME   = 50;           // 0-100, comfortable ambient level

    let player  = null;
    let isMuted = true;

    const btn        = document.getElementById("audio-toggle");
    const iconMuted  = document.getElementById("icon-muted");
    const iconPlay   = document.getElementById("icon-playing");

    /* ── YouTube IFrame API callback (global) ─────────────── */
    window.onYouTubeIframeAPIReady = function () {
        player = new YT.Player("yt-player-wrap", {
            videoId: VIDEO_ID,
            playerVars: {
                autoplay: 1,
                loop:     1,
                playlist: VIDEO_ID,   // required for loop to work
                controls: 0,
                disablekb: 1,
                fs: 0,
                modestbranding: 1,
                rel: 0,
                showinfo: 0,
                mute: 1,              // start muted (browser policy)
            },
            events: {
                onReady: onPlayerReady,
            },
        });
    };

    function onPlayerReady(event) {
        event.target.setVolume(VOLUME);
        // Stays muted until user clicks toggle
    }

    /* ── Toggle handler ───────────────────────────────────── */
    btn.addEventListener("click", function () {
        if (!player || typeof player.isMuted !== "function") return;

        if (isMuted) {
            player.unMute();
            player.setVolume(VOLUME);
            // If the player was paused (some browsers), play it
            if (player.getPlayerState() !== YT.PlayerState.PLAYING) {
                player.playVideo();
            }
            iconMuted.style.display  = "none";
            iconPlay.style.display   = "block";
            btn.classList.add("active");
        } else {
            player.mute();
            iconMuted.style.display  = "block";
            iconPlay.style.display   = "none";
            btn.classList.remove("active");
        }

        isMuted = !isMuted;
    });
})();
