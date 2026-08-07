"use client";

import { useEffect, useRef } from "react";
import { X } from "lucide-react";

export interface VideoLightboxProps {
  title: string;
  youtubeId?: string;
  src?: string;
  onClose: () => void;
}

/** Accessible modal video player — Escape to close, backdrop click to close, focus moved to the close button on open. */
export function VideoLightbox({ title, youtubeId, src, onClose }: VideoLightboxProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeButtonRef.current?.focus();
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKeyDown);
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.documentElement.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
      onClick={onClose}
    >
      <button
        ref={closeButtonRef}
        onClick={onClose}
        className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
        aria-label="Close video"
      >
        <X className="h-5 w-5" aria-hidden="true" />
      </button>
      <div className="aspect-video w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
        {youtubeId ? (
          <iframe
            src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
            title={title}
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
            className="h-full w-full rounded-lg"
          />
        ) : src ? (
          <video src={src} controls autoPlay playsInline className="h-full w-full rounded-lg" aria-label={title}>
            <track kind="captions" />
          </video>
        ) : null}
      </div>
    </div>
  );
}
