import { Play } from "lucide-react";
import { useRef, useState } from "react";

const assetPath = (path: string) => `${import.meta.env.BASE_URL}${path}`;
const HERO_VIDEO_SRC = assetPath("hero-video.mp4");
const HERO_POSTER_SRC = assetPath("video-poster.jpg");

export default function VideoIntro() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoMissing, setVideoMissing] = useState(false);

  const playVideo = async () => {
    const video = videoRef.current;

    if (!video || videoMissing) {
      return;
    }

    video.muted = false;

    try {
      await video.play();
      setIsPlaying(true);
    } catch {
      video.muted = true;
      await video.play();
      setIsPlaying(true);
    }
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-neutral-950 text-white">
      {!videoMissing && (
        <video
          ref={videoRef}
          className="absolute inset-0 z-0 h-full w-full object-cover"
          src={HERO_VIDEO_SRC}
          poster={HERO_POSTER_SRC}
          playsInline
          muted
          loop
          preload="metadata"
          onCanPlay={() => {
            videoRef.current?.play().catch(() => undefined);
          }}
          onError={() => setVideoMissing(true)}
        />
      )}

      {videoMissing && (
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#151515_0%,#34302d_45%,#181818_100%)]" />
      )}
      {!videoMissing && (
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.12)_38%,rgba(0,0,0,0.68)_100%)]" />
      )}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-neutral-950/70 to-transparent" />

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <div className="font-serif text-4xl sm:text-5xl md:text-7xl">
          Sarah <span className="text-white/60">&</span> Cameron
        </div>
        <button
          type="button"
          onClick={playVideo}
          className="mt-8 inline-flex items-center gap-3 border-b border-white/70 pb-2 font-serif text-lg transition hover:border-white hover:text-white/80"
        >
          <Play size={18} fill="currentColor" />
          {isPlaying ? "Playing" : "Play Video"}
        </button>
      </div>

      <div className="absolute inset-x-0 bottom-8 z-10 flex justify-center">
        <div className="h-12 w-px animate-pulse bg-white/70" />
      </div>
    </section>
  );
}