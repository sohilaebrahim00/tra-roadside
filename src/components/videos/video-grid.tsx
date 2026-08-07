"use client";

import { useState } from "react";
import { VideoPosterCard } from "@/components/media/video-poster-card";
import { VideoLightbox } from "@/components/media/video-lightbox";
import type { VideoItem } from "@/lib/data/videos";

export function VideoGrid({ items }: { items: VideoItem[] }) {
  const [active, setActive] = useState<VideoItem | null>(null);

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((video) => (
          <VideoPosterCard
            key={video.id}
            title={video.title}
            poster={video.poster_url ?? undefined}
            durationSeconds={video.duration_seconds ?? undefined}
            onPlay={() => setActive(video)}
          />
        ))}
      </div>

      {active && (
        <VideoLightbox
          title={active.title}
          youtubeId={active.youtube_id ?? undefined}
          src={active.video_url ?? undefined}
          onClose={() => setActive(null)}
        />
      )}
    </>
  );
}
