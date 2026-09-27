import { useRef, useState, type KeyboardEvent, type TouchEvent } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function SlidePreview({ slides, title }: { slides: string[]; title: string }) {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const last = slides.length - 1;

  const go = (next: number) => setIndex(Math.min(Math.max(next, 0), last));

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'ArrowLeft') { e.preventDefault(); go(index - 1); }
    if (e.key === 'ArrowRight') { e.preventDefault(); go(index + 1); }
  };

  const onTouchStart = (e: TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e: TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 40) go(dx < 0 ? index + 1 : index - 1);
    touchStartX.current = null;
  };

  return (
    <div
      className="relative aspect-video bg-gray-100 select-none group outline-none focus-visible:ring-2 focus-visible:ring-black"
      tabIndex={0}
      onKeyDown={onKeyDown}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      role="region"
      aria-roledescription="carousel"
      aria-label={`${title} slides`}
    >
      {slides.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={`${title} slide ${i + 1} of ${slides.length}`}
          loading={Math.abs(i - index) <= 1 ? 'eager' : 'lazy'}
          draggable={false}
          className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-300 ${i === index ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          aria-hidden={i !== index}
        />
      ))}

      <button
        type="button"
        onClick={() => go(index - 1)}
        disabled={index === 0}
        className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-black transition disabled:opacity-0"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        type="button"
        onClick={() => go(index + 1)}
        disabled={index === last}
        className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-black transition disabled:opacity-0"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      <div className="absolute bottom-3 inset-x-0 flex items-center justify-center gap-1.5">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => go(i)}
            className={`h-1.5 rounded-full transition-all ${i === index ? 'w-5 bg-black' : 'w-1.5 bg-black/30 hover:bg-black/50'}`}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === index}
          />
        ))}
      </div>

      <span className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-black/70 text-white text-xs tabular-nums">
        {index + 1} / {slides.length}
      </span>
    </div>
  );
}

export function VideoPreview({ embedUrl, title }: { embedUrl: string; title: string }) {
  return (
    <div className="relative aspect-video bg-black">
      <iframe
        src={embedUrl}
        title={title}
        loading="lazy"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 w-full h-full border-0"
      />
    </div>
  );
}
