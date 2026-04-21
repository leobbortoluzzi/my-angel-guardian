import { useEffect, useRef, useState } from "react";
import Hls from "hls.js";
import { Volume2 } from "lucide-react";

const PITCH_TIME_SECONDS = 3507; // Valor provisório, aguardando informação
const VIDEO_SRC = "https://vz-af4cf92c-ffc.b-cdn.net/d4fc2baf-1726-4bc6-b20c-959373b46c1f/playlist.m3u8";
const CHECKOUT_URL = "https://pay.kiwify.com/HvMxVHR";

const Hero = () => {
  const [showCTA, setShowCTA] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      if (video.currentTime >= PITCH_TIME_SECONDS) {
        setShowCTA(true);
      }
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("contextmenu", (e) => e.preventDefault());

    if (Hls.isSupported()) {
      const hls = new Hls({
        maxBufferLength: 10,
        maxMaxBufferLength: 20,
        startLevel: -1,
        autoStartLoad: true,
      });

      hls.loadSource(VIDEO_SRC);
      hls.attachMedia(video);

      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.muted = true;
        video.play().catch((e) => console.log("Autoplay bloqueado", e));
      });

      return () => {
        hls.destroy();
        video.removeEventListener("timeupdate", handleTimeUpdate);
      };
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = VIDEO_SRC;
      video.muted = true;

      const handleLoadedMetadata = () => {
        video.play().catch((e) => console.log("Autoplay bloqueado", e));
      };

      video.addEventListener("loadedmetadata", handleLoadedMetadata);

      return () => {
        video.removeEventListener("loadedmetadata", handleLoadedMetadata);
        video.removeEventListener("timeupdate", handleTimeUpdate);
      };
    }

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);

  const handleUnmute = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = false;
    video.currentTime = 0;
    video.play();
    setHasInteracted(true);
  };

  return (
    <header className="relative overflow-hidden">
      <div className="divine-light pointer-events-none absolute inset-x-0 top-0 h-[520px]" />
      <div className="container relative z-10 flex flex-col items-center px-4 pt-10 pb-6 text-center">
        <p className="font-display text-[10px] sm:text-xs uppercase tracking-[0.35em] text-primary/80">
          ✦ Heaven Sent You Here — Do Not Close This Page ✦
        </p>

        <h1 className="mt-6 font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-foreground">
          God Sent You Here Today
          <br />
          For A Reason —
          <br />
          <span className="text-gold">Archangel Michael Is</span>
          <br />
          <span className="text-gold underline decoration-primary/60 underline-offset-[10px]">
            Finally Ready To Act
          </span>
        </h1>

        <p className="mt-6 font-serif italic text-sm sm:text-base md:text-lg text-primary/80 tracking-wide">
          The Sacred Chant of Saint Padre Pio · Manifest Your Financial Miracle in 24 Hours
        </p>

        {/* Container do Vídeo em Formato 9:16 Vertical */}
        <div
          id="vsl-video"
          className="group relative mt-10 w-full max-w-[320px] sm:max-w-[380px] overflow-hidden rounded-2xl border border-border/40 shadow-2xl cursor-pointer"
          onClick={!hasInteracted ? handleUnmute : undefined}
        >
          <video
            ref={videoRef}
            className="aspect-[9/16] w-full bg-black pointer-events-none"
            playsInline
            muted
          />

          {/* Overlay de "Clique para Ouvir" */}
          {!hasInteracted && (
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/40 backdrop-blur-[2px] transition-all group-hover:bg-black/20">
              <div className="flex flex-col items-center gap-4 px-6 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/90 text-primary-foreground shadow-lg animate-pulse">
                  <Volume2 className="h-8 w-8" />
                </div>
                <p className="font-display text-lg font-bold uppercase tracking-widest text-white drop-shadow-md">
                  Seu vídeo já começou
                </p>
                <p className="font-serif italic text-white/90">
                  Clique para ouvir com som
                </p>
              </div>
            </div>
          )}
        </div>

        {showCTA && (
          <a
            href={CHECKOUT_URL}
            className="mt-8 inline-flex w-full max-w-xl flex-col items-center rounded-md px-8 py-4 text-white transition active:scale-[0.99] no-underline shadow-[0_10px_40px_rgba(34,197,94,0.5)] animate-pulse"
            style={{
              background: "linear-gradient(180deg, #22c55e 0%, #15803d 100%)",
            }}
          >
            <span className="font-display text-base sm:text-lg font-bold uppercase tracking-wider">
              ✦ HEAR THE SACRED CHANT NOW ✦
            </span>
            <span className="mt-1 font-serif text-xs italic opacity-90 text-white/90">
              Archangel Michael is standing by - tap to receive your blessing.
            </span>
          </a>
        )}
      </div>
    </header>
  );
};

export default Hero;