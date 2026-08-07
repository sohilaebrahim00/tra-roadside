"use client";

import { useState } from "react";
import { Film } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { VideoPosterCard } from "@/components/media/video-poster-card";
import { VideoLightbox } from "@/components/media/video-lightbox";
import { getVideosByCategory } from "@/data/media-registry";
import type { GeneratedVideoItem } from "@/data/media-types";

/** Real team/vehicle/operations clips only — never a staged or AI-generated "team member." Gracefully empty until real footage exists. */
export function AboutStorySection() {
  const videos = getVideosByCategory("about");
  const [active, setActive] = useState<GeneratedVideoItem | null>(null);

  if (videos.length === 0) return null;

  return (
    <section className="border-t border-ink-950/8 bg-paper-50 py-16 sm:py-24">
      <Container>
        <SectionHeading eyebrow="Behind The Work" title="TRA on the road" align="center" />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((video) => (
            <VideoPosterCard
              key={video.id}
              title={video.title}
              poster={video.poster}
              durationSeconds={video.durationSeconds}
              onPlay={() => setActive(video)}
            />
          ))}
        </div>
        <p className="mt-6 flex items-center justify-center gap-1.5 text-xs text-ink-400">
          <Film className="h-3.5 w-3.5" aria-hidden="true" /> Real TRA vehicles and operations — no staged footage.
        </p>
      </Container>

      {active && (
        <VideoLightbox title={active.title} src={active.source} onClose={() => setActive(null)} />
      )}
    </section>
  );
}
